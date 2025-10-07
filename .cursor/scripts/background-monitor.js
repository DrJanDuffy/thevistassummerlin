#!/usr/bin/env node

/**
 * Background monitoring script for real estate website
 * Monitors performance, SEO, and real estate specific metrics
 */

const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

class BackgroundMonitor {
  constructor() {
    this.config = null;
    this.logFile = path.join(__dirname, '..', 'logs', 'monitor.log');
    this.results = {
      performance: {},
      seo: {},
      accessibility: {},
      errors: []
    };
  }

  async init() {
    try {
      const configPath = path.join(__dirname, '..', 'automation.json');
      const configData = await fs.readFile(configPath, 'utf8');
      this.config = JSON.parse(configData);
      
      // Ensure logs directory exists
      await this.ensureLogsDirectory();
      
      console.log('🚀 Background monitor initialized');
    } catch (error) {
      console.error('❌ Failed to initialize monitor:', error.message);
      process.exit(1);
    }
  }

  async ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    try {
      await fs.access(logsDir);
    } catch {
      await fs.mkdir(logsDir, { recursive: true });
    }
  }

  async log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    
    console.log(logMessage.trim());
    
    try {
      await fs.appendFile(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async runPerformanceCheck() {
    this.log('🔍 Running performance check...');
    
    try {
      // Run Lighthouse audit
      const { stdout: lighthouseOutput } = await execAsync('npx lighthouse http://localhost:3000 --output json --quiet');
      const lighthouseData = JSON.parse(lighthouseOutput);
      
      this.results.performance = {
        lcp: lighthouseData.audits['largest-contentful-paint']?.numericValue,
        fid: lighthouseData.audits['first-input-delay']?.numericValue,
        cls: lighthouseData.audits['cumulative-layout-shift']?.numericValue,
        score: lighthouseData.categories.performance.score * 100
      };

      // Check thresholds
      const thresholds = this.config.monitoring.metrics.performance;
      const alerts = [];

      if (this.results.performance.lcp > thresholds.lcp.threshold * 1000) {
        alerts.push(`LCP exceeded threshold: ${this.results.performance.lcp}ms > ${thresholds.lcp.threshold * 1000}ms`);
      }

      if (this.results.performance.cls > thresholds.cls.threshold) {
        alerts.push(`CLS exceeded threshold: ${this.results.performance.cls} > ${thresholds.cls.threshold}`);
      }

      if (alerts.length > 0) {
        this.log(`⚠️ Performance alerts: ${alerts.join(', ')}`, 'warn');
      } else {
        this.log('✅ Performance check passed');
      }

    } catch (error) {
      this.log(`❌ Performance check failed: ${error.message}`, 'error');
      this.results.errors.push(`Performance check: ${error.message}`);
    }
  }

  async runSEOCheck() {
    this.log('🔍 Running SEO check...');
    
    try {
      // Check sitemap
      const { stdout: sitemapCheck } = await execAsync('curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/sitemap.xml');
      
      // Check robots.txt
      const { stdout: robotsCheck } = await execAsync('curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/robots.txt');
      
      // Check meta tags (simplified check)
      const { stdout: pageContent } = await execAsync('curl -s http://localhost:3000 | grep -i "meta.*description"');
      
      this.results.seo = {
        sitemap: sitemapCheck === '200',
        robots: robotsCheck === '200',
        metaDescription: pageContent.includes('description')
      };

      const seoIssues = [];
      if (!this.results.seo.sitemap) seoIssues.push('Sitemap not accessible');
      if (!this.results.seo.robots) seoIssues.push('Robots.txt not accessible');
      if (!this.results.seo.metaDescription) seoIssues.push('Meta description missing');

      if (seoIssues.length > 0) {
        this.log(`⚠️ SEO issues: ${seoIssues.join(', ')}`, 'warn');
      } else {
        this.log('✅ SEO check passed');
      }

    } catch (error) {
      this.log(`❌ SEO check failed: ${error.message}`, 'error');
      this.results.errors.push(`SEO check: ${error.message}`);
    }
  }

  async runAccessibilityCheck() {
    this.log('🔍 Running accessibility check...');
    
    try {
      // Run axe-core accessibility check
      const { stdout } = await execAsync('npx axe http://localhost:3000 --reporter json');
      const axeResults = JSON.parse(stdout);
      
      this.results.accessibility = {
        violations: axeResults.violations.length,
        passes: axeResults.passes.length,
        score: Math.round((axeResults.passes.length / (axeResults.passes.length + axeResults.violations.length)) * 100)
      };

      if (this.results.accessibility.violations > 0) {
        this.log(`⚠️ Accessibility violations found: ${this.results.accessibility.violations}`, 'warn');
      } else {
        this.log('✅ Accessibility check passed');
      }

    } catch (error) {
      this.log(`❌ Accessibility check failed: ${error.message}`, 'error');
      this.results.errors.push(`Accessibility check: ${error.message}`);
    }
  }

  async runRealEstateChecks() {
    this.log('🔍 Running real estate specific checks...');
    
    try {
      // Check property data integrity
      const { stdout } = await execAsync('npm run lint -- --format json');
      const lintResults = JSON.parse(stdout);
      
      const realEstateIssues = [];
      
      // Check for RealScout widget implementations
      const { stdout: realscoutCheck } = await execAsync('grep -r "RealScout" src/ --include="*.tsx" --include="*.ts" || true');
      if (!realscoutCheck.trim()) {
        realEstateIssues.push('No RealScout widgets found');
      }

      // Check for proper image optimization
      const { stdout: imageCheck } = await execAsync('grep -r "next/image" src/ --include="*.tsx" | wc -l');
      if (parseInt(imageCheck.trim()) < 5) {
        realEstateIssues.push('Insufficient image optimization');
      }

      if (realEstateIssues.length > 0) {
        this.log(`⚠️ Real estate issues: ${realEstateIssues.join(', ')}`, 'warn');
      } else {
        this.log('✅ Real estate checks passed');
      }

    } catch (error) {
      this.log(`❌ Real estate checks failed: ${error.message}`, 'error');
      this.results.errors.push(`Real estate checks: ${error.message}`);
    }
  }

  async generateReport() {
    this.log('📊 Generating monitoring report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        performance: this.results.performance.score || 0,
        seo: Object.values(this.results.seo).filter(Boolean).length,
        accessibility: this.results.accessibility.score || 0,
        errors: this.results.errors.length
      },
      details: this.results
    };

    const reportPath = path.join(__dirname, '..', 'logs', `report-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report saved to: ${reportPath}`);
    
    // Send summary to console
    console.log('\n📊 Monitoring Summary:');
    console.log(`Performance Score: ${report.summary.performance}%`);
    console.log(`SEO Checks Passed: ${report.summary.seo}/3`);
    console.log(`Accessibility Score: ${report.summary.accessibility}%`);
    console.log(`Errors: ${report.summary.errors}`);
    
    return report;
  }

  async run() {
    await this.init();
    
    this.log('🚀 Starting background monitoring...');
    
    try {
      await this.runPerformanceCheck();
      await this.runSEOCheck();
      await this.runAccessibilityCheck();
      await this.runRealEstateChecks();
      
      const report = await this.generateReport();
      
      if (this.results.errors.length === 0) {
        this.log('✅ All checks passed successfully');
        process.exit(0);
      } else {
        this.log(`⚠️ ${this.results.errors.length} issues found`, 'warn');
        process.exit(1);
      }
      
    } catch (error) {
      this.log(`❌ Monitoring failed: ${error.message}`, 'error');
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new BackgroundMonitor();
  monitor.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = BackgroundMonitor;
