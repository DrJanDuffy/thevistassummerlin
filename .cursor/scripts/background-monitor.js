#!/usr/bin/env node

/**
 * Simple background monitoring script
 */

const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

class BackgroundMonitor {
  constructor() {
    this.logFile = path.join(__dirname, '..', 'logs', 'monitor.log');
  }

  async init() {
    try {
      const logsDir = path.dirname(this.logFile);
      await fs.mkdir(logsDir, { recursive: true });
      console.log('🚀 Monitor initialized');
    } catch (error) {
      console.error('❌ Failed to initialize:', error.message);
      process.exit(1);
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
  }

  async runPerformanceCheck() {
    this.log('🔍 Running performance check...');
    
    try {
      // First check if server is responding
      const { stdout: curlResult } = await execAsync('curl -s -o nul -w "%{http_code}" http://localhost:3000');
      
      if (curlResult.trim() !== '200') {
        this.log('❌ Server not responding properly');
        return;
      }

      // Run lighthouse with timeout and better error handling
      const { stdout } = await execAsync('npx lighthouse http://localhost:3000 --output json --quiet --max-wait-for-load=10000');
      const data = JSON.parse(stdout);
      
      const lcp = data.audits['largest-contentful-paint']?.numericValue;

      if (lcp > 2500) {
        this.log(`⚠️ LCP slow: ${lcp}ms`);
      } else {
        this.log('✅ Performance check passed');
      }

    } catch (error) {
      if (error.message.includes('timeout') || error.message.includes('stopped responding')) {
        this.log('⚠️ Performance check timed out - server may be slow');
      } else {
        this.log(`❌ Performance check failed: ${error.message}`);
      }
    }
  }

  async run() {
    await this.init();
    this.log('🚀 Starting monitoring...');
    
    try {
      await this.runPerformanceCheck();
      this.log('✅ Monitoring complete');
    } catch (error) {
      this.log(`❌ Monitoring failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the monitor
const monitor = new BackgroundMonitor();
monitor.run().catch(console.error);