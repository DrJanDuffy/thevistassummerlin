#!/usr/bin/env node

/**
 * Windows-compatible setup script for background automation and monitoring
 * This script sets up the automation environment for the real estate website
 */

const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

class AutomationSetup {
  constructor() {
    this.projectRoot = process.cwd();
    this.cursorDir = path.join(this.projectRoot, '.cursor');
    this.logsDir = path.join(this.cursorDir, 'logs');
    this.scriptsDir = path.join(this.cursorDir, 'scripts');
    this.reportsDir = path.join(this.cursorDir, 'reports');
  }

  async log(message) {
    console.log(`🔧 ${message}`);
  }

  async ensureDirectories() {
    await this.log('Creating necessary directories...');
    
    const directories = [this.logsDir, this.scriptsDir, this.reportsDir];
    
    for (const dir of directories) {
      try {
        await fs.access(dir);
      } catch {
        await fs.mkdir(dir, { recursive: true });
        await this.log(`Created directory: ${dir}`);
      }
    }
  }

  async installDependencies() {
    await this.log('Installing monitoring dependencies...');
    
    try {
      await execAsync('npm install --save-dev lighthouse axe-core');
      await this.log('✅ Dependencies installed successfully');
    } catch (error) {
      await this.log(`⚠️ Warning: Failed to install some dependencies: ${error.message}`);
    }
  }

  async createEnvironmentTemplate() {
    await this.log('Creating environment template...');
    
    const envTemplate = `# Automation and Monitoring Environment Variables
# Copy this to .env.local and fill in your values

# Performance Monitoring
PERFORMANCE_MONITORING_ENABLED=true
LIGHTHOUSE_THRESHOLD_LCP=2500
LIGHTHOUSE_THRESHOLD_FID=100
LIGHTHOUSE_THRESHOLD_CLS=0.1

# SEO Monitoring
SEO_MONITORING_ENABLED=true
SITEMAP_URL=http://localhost:3000/sitemap.xml
ROBOTS_URL=http://localhost:3000/robots.txt

# Real Estate Specific
REAL_ESTATE_MONITORING_ENABLED=true
PROPERTY_DATA_VALIDATION=true
MARKET_DATA_SYNC=true

# Notification Settings
NOTIFICATION_CONSOLE=true
NOTIFICATION_FILE=true
NOTIFICATION_EMAIL=false`;

    const envPath = path.join(this.projectRoot, '.env.automation');
    await fs.writeFile(envPath, envTemplate);
    await this.log(`✅ Environment template created at ${envPath}`);
  }

  async createWindowsBatchFile() {
    await this.log('Creating Windows batch file for automation...');
    
    const batchContent = `@echo off
REM Real Estate Website Automation Script
REM Run this script to set up automated monitoring

echo 🚀 Setting up background automation for real estate website...

REM Create directories
if not exist ".cursor\\logs" mkdir ".cursor\\logs"
if not exist ".cursor\\scripts" mkdir ".cursor\\scripts"
if not exist ".cursor\\reports" mkdir ".cursor\\reports"

REM Install dependencies
echo 📦 Installing monitoring dependencies...
npm install --save-dev lighthouse axe-core

REM Run monitoring
echo 🔍 Running initial monitoring check...
npm run monitor

echo ✅ Setup complete!
echo.
echo Next steps:
echo 1. Copy .env.automation to .env.local and configure your settings
echo 2. Run 'npm run monitor' to test the setup
echo 3. Open .cursor/dashboard.html to view the monitoring dashboard
echo.
echo For more information, see .cursor/AUTOMATION_README.md
pause`;

    const batchPath = path.join(this.projectRoot, 'setup-automation.bat');
    await fs.writeFile(batchPath, batchContent);
    await this.log(`✅ Windows batch file created at ${batchPath}`);
  }

  async createPowerShellScript() {
    await this.log('Creating PowerShell script for automation...');
    
    const psContent = `# Real Estate Website Automation PowerShell Script
# Run this script to set up automated monitoring

Write-Host "🚀 Setting up background automation for real estate website..." -ForegroundColor Green

# Create directories
$directories = @(".cursor\\logs", ".cursor\\scripts", ".cursor\\reports")
foreach ($dir in $directories) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force
        Write-Host "📁 Created directory: $dir" -ForegroundColor Yellow
    }
}

# Install dependencies
Write-Host "📦 Installing monitoring dependencies..." -ForegroundColor Blue
try {
    npm install --save-dev lighthouse axe-core
    Write-Host "✅ Dependencies installed successfully" -ForegroundColor Green
} catch {
    Write-Host "⚠️ Warning: Failed to install some dependencies" -ForegroundColor Yellow
}

# Run monitoring
Write-Host "🔍 Running initial monitoring check..." -ForegroundColor Blue
npm run monitor

Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Copy .env.automation to .env.local and configure your settings" -ForegroundColor White
Write-Host "2. Run 'npm run monitor' to test the setup" -ForegroundColor White
Write-Host "3. Open .cursor/dashboard.html to view the monitoring dashboard" -ForegroundColor White
Write-Host ""
Write-Host "For more information, see .cursor/AUTOMATION_README.md" -ForegroundColor Gray

Read-Host "Press Enter to continue"`;

    const psPath = path.join(this.projectRoot, 'setup-automation.ps1');
    await fs.writeFile(psPath, psContent);
    await this.log(`✅ PowerShell script created at ${psPath}`);
  }

  async createTaskSchedulerXml() {
    await this.log('Creating Windows Task Scheduler configuration...');
    
    const taskXml = `<?xml version="1.0" encoding="UTF-16"?>
<Task version="1.2" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task">
  <RegistrationInfo>
    <Date>2024-01-01T00:00:00</Date>
    <Author>Real Estate Website Automation</Author>
    <Description>Automated monitoring for real estate website</Description>
  </RegistrationInfo>
  <Triggers>
    <CalendarTrigger>
      <StartBoundary>2024-01-01T09:00:00</StartBoundary>
      <Repetition>
        <Interval>PT5M</Interval>
        <Duration>P1D</Duration>
      </Repetition>
      <ScheduleByDay>
        <DaysInterval>1</DaysInterval>
      </ScheduleByDay>
    </CalendarTrigger>
  </Triggers>
  <Principals>
    <Principal id="Author">
      <UserId>S-1-5-18</UserId>
      <RunLevel>LeastPrivilege</RunLevel>
    </Principal>
  </Principals>
  <Settings>
    <MultipleInstancesPolicy>IgnoreNew</MultipleInstancesPolicy>
    <DisallowStartIfOnBatteries>false</DisallowStartIfOnBatteries>
    <StopIfGoingOnBatteries>false</StopIfGoingOnBatteries>
    <AllowHardTerminate>true</AllowHardTerminate>
    <StartWhenAvailable>true</StartWhenAvailable>
    <RunOnlyIfNetworkAvailable>false</RunOnlyIfNetworkAvailable>
    <IdleSettings>
      <StopOnIdleEnd>false</StopOnIdleEnd>
      <RestartOnIdle>false</RestartOnIdle>
    </IdleSettings>
    <AllowStartOnDemand>true</AllowStartOnDemand>
    <Enabled>true</Enabled>
    <Hidden>false</Hidden>
    <RunOnlyIfIdle>false</RunOnlyIfIdle>
    <WakeToRun>false</WakeToRun>
    <ExecutionTimeLimit>PT1H</ExecutionTimeLimit>
    <Priority>7</Priority>
  </Settings>
  <Actions>
    <Exec>
      <Command>npm</Command>
      <Arguments>run monitor</Arguments>
      <WorkingDirectory>${this.projectRoot}</WorkingDirectory>
    </Exec>
  </Actions>
</Task>`;

    const taskPath = path.join(this.projectRoot, 'real-estate-monitoring-task.xml');
    await fs.writeFile(taskPath, taskXml);
    await this.log(`✅ Task Scheduler XML created at ${taskPath}`);
  }

  async createDocumentation() {
    await this.log('Creating documentation...');
    
    const readmeContent = `# Background Automation Setup

This directory contains automation scripts and configuration for the real estate website.

## Files

- \`automation.json\` - Main configuration for automation tasks
- \`scripts/background-monitor.js\` - Main monitoring script
- \`scripts/setup-automation.js\` - This setup script
- \`dashboard.html\` - Monitoring dashboard
- \`logs/\` - Log files and reports

## Usage

### Manual Monitoring
\`\`\`bash
# Run all checks
npm run monitor

# Run specific checks
npm run performance:check
npm run accessibility:check
npm run seo:check
npm run real-estate:validate
\`\`\`

### Windows Automation
\`\`\`cmd
# Run the batch file setup
setup-automation.bat

# Or run the PowerShell script
powershell -ExecutionPolicy Bypass -File setup-automation.ps1
\`\`\`

### Task Scheduler (Windows)
1. Open Task Scheduler
2. Import the task: \`real-estate-monitoring-task.xml\`
3. Configure the task to run as needed

### Dashboard
Open \`.cursor/dashboard.html\` in your browser to view monitoring metrics.

## Configuration

Edit \`.cursor/automation.json\` to customize:
- Monitoring schedules
- Performance thresholds
- Alert settings
- Real estate specific checks

## Environment Variables

Copy \`.env.automation\` to \`.env.local\` and configure:
- Performance thresholds
- Notification settings
- API keys for monitoring services

## Troubleshooting

1. **Scripts not working**: Ensure Node.js is installed and in PATH
2. **Dependencies missing**: Run \`npm install\`
3. **Permission errors**: Run PowerShell as Administrator
4. **Task Scheduler not working**: Check user permissions and paths

## Windows-Specific Notes

- Use PowerShell scripts for advanced automation
- Task Scheduler for background monitoring
- Batch files for simple setup tasks
- Ensure all paths use Windows-style separators`;
    
    const readmePath = path.join(this.cursorDir, 'AUTOMATION_README.md');
    await fs.writeFile(readmePath, readmeContent);
    await this.log(`✅ Documentation created at ${readmePath}`);
  }

  async run() {
    try {
      await this.log('🚀 Starting automation setup...');
      
      await this.ensureDirectories();
      await this.installDependencies();
      await this.createEnvironmentTemplate();
      await this.createWindowsBatchFile();
      await this.createPowerShellScript();
      await this.createTaskSchedulerXml();
      await this.createDocumentation();
      
      await this.log('✅ Setup complete!');
      console.log('\n🎉 Background automation setup complete!');
      console.log('\nNext steps:');
      console.log('1. Copy .env.automation to .env.local and configure your settings');
      console.log('2. Run "npm run monitor" to test the setup');
      console.log('3. For Windows automation, run setup-automation.bat or setup-automation.ps1');
      console.log('4. Open .cursor/dashboard.html to view the monitoring dashboard');
      console.log('\nFor more information, see .cursor/AUTOMATION_README.md');
      
    } catch (error) {
      console.error('❌ Setup failed:', error.message);
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const setup = new AutomationSetup();
  setup.run();
}

module.exports = AutomationSetup;
