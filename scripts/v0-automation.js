#!/usr/bin/env node

/**
 * V0 Modernization Automation Script
 * 
 * This script runs the V0 modernization analysis and provides
 * automated suggestions for keeping the site modernized.
 * 
 * Usage:
 *   node scripts/v0-automation.js [options]
 * 
 * Options:
 *   --schedule    - Run on a schedule (daily, weekly, monthly)
 *   --notify      - Send notifications about modernization opportunities
 *   --update      - Auto-update prompts based on code changes
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class V0Automation {
  constructor() {
    this.projectRoot = process.cwd();
    this.lastRunFile = path.join(this.projectRoot, '.v0-modernization', 'last-run.json');
    this.configFile = path.join(this.projectRoot, '.v0-modernization', 'automation-config.json');
    this.config = this.loadConfig();
  }

  /**
   * Load automation configuration
   */
  loadConfig() {
    const defaultConfig = {
      schedule: 'weekly',
      notify: true,
      autoUpdate: false,
      priorityComponents: [
        'hero',
        'navigation',
        'footer',
        'property-search',
        'contact-forms'
      ],
      lastRun: null,
      modernizationHistory: []
    };

    if (fs.existsSync(this.configFile)) {
      try {
        return { ...defaultConfig, ...JSON.parse(fs.readFileSync(this.configFile, 'utf8')) };
      } catch {
        return defaultConfig;
      }
    }

    return defaultConfig;
  }

  /**
   * Save automation configuration
   */
  saveConfig() {
    const configDir = path.dirname(this.configFile);
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }
    fs.writeFileSync(this.configFile, JSON.stringify(this.config, null, 2));
  }

  /**
   * Check if modernization is needed
   */
  needsModernization() {
    const lastRun = this.config.lastRun;
    if (!lastRun) return true;

    const now = new Date();
    const lastRunDate = new Date(lastRun);
    const daysSinceLastRun = (now - lastRunDate) / (1000 * 60 * 60 * 24);

    switch (this.config.schedule) {
      case 'daily':
        return daysSinceLastRun >= 1;
      case 'weekly':
        return daysSinceLastRun >= 7;
      case 'monthly':
        return daysSinceLastRun >= 30;
      default:
        return daysSinceLastRun >= 7;
    }
  }

  /**
   * Run modernization analysis
   */
  async runModernization() {
    console.log('🤖 V0 Automation: Running modernization analysis...');
    
    try {
      // Run the main modernization script
      execSync('node scripts/v0-modernize.js --all', { 
        stdio: 'inherit',
        cwd: this.projectRoot 
      });

      // Update last run timestamp
      this.config.lastRun = new Date().toISOString();
      this.saveConfig();

      // Analyze results
      const results = this.analyzeResults();
      this.logResults(results);

      // Send notifications if enabled
      if (this.config.notify) {
        this.sendNotifications(results);
      }

      return results;
    } catch (error) {
      console.error('❌ Automation error:', error.message);
      return null;
    }
  }

  /**
   * Analyze modernization results
   */
  analyzeResults() {
    const modernizationDir = path.join(this.projectRoot, '.v0-modernization');
    
    if (!fs.existsSync(modernizationDir)) {
      return { error: 'Modernization directory not found' };
    }

    const files = fs.readdirSync(modernizationDir);
    const prompts = files.filter(file => file.endsWith('.md'));
    
    const analysis = {
      totalPrompts: prompts.length,
      componentPrompts: prompts.filter(p => p.startsWith('component-')).length,
      pagePrompts: prompts.filter(p => p.startsWith('page-')).length,
      realEstatePrompts: prompts.filter(p => p.startsWith('real-estate-')).length,
      designSystemPrompts: prompts.filter(p => p.includes('design-system')).length,
      priorityComponents: this.analyzePriorityComponents(prompts),
      recommendations: this.generateRecommendations(prompts)
    };

    // Add to history
    this.config.modernizationHistory.push({
      date: new Date().toISOString(),
      analysis: analysis
    });

    // Keep only last 10 runs
    if (this.config.modernizationHistory.length > 10) {
      this.config.modernizationHistory = this.config.modernizationHistory.slice(-10);
    }

    this.saveConfig();
    return analysis;
  }

  /**
   * Analyze priority components
   */
  analyzePriorityComponents(prompts) {
    const priorityComponents = [];
    
    this.config.priorityComponents.forEach(component => {
      const promptFile = prompts.find(p => p.includes(component));
      if (promptFile) {
        priorityComponents.push({
          name: component,
          promptFile: promptFile,
          status: 'ready'
        });
      }
    });

    return priorityComponents;
  }

  /**
   * Generate recommendations
   */
  generateRecommendations(prompts) {
    const recommendations = [];

    // Check for high-priority components
    const highPriorityComponents = prompts.filter(p => 
      p.includes('hero') || p.includes('navigation') || p.includes('footer')
    );

    if (highPriorityComponents.length > 0) {
      recommendations.push({
        type: 'priority',
        message: `Focus on ${highPriorityComponents.length} high-priority components first`,
        components: highPriorityComponents
      });
    }

    // Check for real estate features
    const realEstateFeatures = prompts.filter(p => p.startsWith('real-estate-'));
    if (realEstateFeatures.length > 0) {
      recommendations.push({
        type: 'conversion',
        message: `Implement ${realEstateFeatures.length} real estate features for better conversion`,
        features: realEstateFeatures
      });
    }

    // Check for community pages
    const communityPages = prompts.filter(p => p.startsWith('page-'));
    if (communityPages.length > 0) {
      recommendations.push({
        type: 'seo',
        message: `Modernize ${communityPages.length} community pages for better SEO`,
        pages: communityPages
      });
    }

    return recommendations;
  }

  /**
   * Log results
   */
  logResults(results) {
    if (results.error) {
      console.log('❌ Analysis failed:', results.error);
      return;
    }

    console.log('\n📊 V0 Automation Results:');
    console.log('==========================');
    console.log(`📁 Total Prompts Generated: ${results.totalPrompts}`);
    console.log(`🧩 Component Prompts: ${results.componentPrompts}`);
    console.log(`📄 Page Prompts: ${results.pagePrompts}`);
    console.log(`🏠 Real Estate Prompts: ${results.realEstatePrompts}`);
    console.log(`🎨 Design System Prompts: ${results.designSystemPrompts}`);

    if (results.priorityComponents.length > 0) {
      console.log('\n🎯 Priority Components:');
      results.priorityComponents.forEach(comp => {
        console.log(`   • ${comp.name} - ${comp.status}`);
      });
    }

    if (results.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      results.recommendations.forEach(rec => {
        console.log(`   ${rec.type.toUpperCase()}: ${rec.message}`);
      });
    }

    console.log('\n🚀 Next Steps:');
    console.log('   1. Review prompts in .v0-modernization/');
    console.log('   2. Start with priority components');
    console.log('   3. Test each component thoroughly');
    console.log('   4. Implement in phases');
  }

  /**
   * Send notifications
   */
  sendNotifications(results) {
    // This could be extended to send email, Slack, or other notifications
    console.log('\n📧 Notifications:');
    console.log('   • Modernization analysis complete');
    console.log('   • Check .v0-modernization/ for new prompts');
    console.log('   • Focus on priority components first');
  }

  /**
   * Schedule automation
   */
  scheduleAutomation() {
    console.log(`⏰ Scheduling V0 automation (${this.config.schedule})`);
    
    // This could be extended to use cron jobs or task schedulers
    console.log('   • Run manually: npm run modernize:automation');
    console.log('   • Check .v0-modernization/automation-config.json for settings');
    console.log('   • Consider setting up CI/CD integration');
  }

  /**
   * Main execution
   */
  async run() {
    console.log('🤖 V0 Modernization Automation');
    console.log('===============================\n');

    if (this.needsModernization()) {
      console.log('✅ Modernization needed - running analysis...');
      await this.runModernization();
    } else {
      console.log('⏭️  Modernization not needed yet');
      console.log(`   Last run: ${this.config.lastRun}`);
      console.log(`   Schedule: ${this.config.schedule}`);
    }

    this.scheduleAutomation();
  }
}

// CLI argument parsing
const args = process.argv.slice(2);
const options = {
  schedule: 'weekly',
  notify: true,
  update: false
};

args.forEach((arg, index) => {
  if (arg === '--schedule' && args[index + 1]) {
    options.schedule = args[index + 1];
  } else if (arg === '--notify') {
    options.notify = true;
  } else if (arg === '--update') {
    options.update = true;
  }
});

// Run the automation
if (require.main === module) {
  const automation = new V0Automation();
  automation.run().catch(console.error);
}

module.exports = V0Automation;
