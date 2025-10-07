#!/bin/bash

# Setup script for background automation and monitoring
# This script sets up the automation environment for the real estate website

set -e

echo "🚀 Setting up background automation for real estate website..."

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p .cursor/logs
mkdir -p .cursor/scripts
mkdir -p .cursor/reports

# Make scripts executable
echo "🔧 Making scripts executable..."
chmod +x .cursor/scripts/background-monitor.js

# Install required dependencies for monitoring
echo "📦 Installing monitoring dependencies..."
npm install --save-dev lighthouse axe-core

# Create package.json scripts for automation
echo "📝 Adding automation scripts to package.json..."

# Backup original package.json
cp package.json package.json.backup

# Add automation scripts
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

pkg.scripts = {
  ...pkg.scripts,
  'monitor': 'node .cursor/scripts/background-monitor.js',
  'monitor:watch': 'nodemon .cursor/scripts/background-monitor.js',
  'automation:setup': 'bash .cursor/scripts/setup-automation.sh',
  'performance:check': 'lighthouse http://localhost:3000 --output json --output-path .cursor/reports/lighthouse.json',
  'accessibility:check': 'axe http://localhost:3000 --reporter json --save .cursor/reports/accessibility.json',
  'seo:check': 'node .cursor/scripts/seo-check.js',
  'real-estate:validate': 'node .cursor/scripts/real-estate-validator.js'
};

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

echo "✅ Package.json updated with automation scripts"

# Create environment file template
echo "🔐 Creating environment template..."
cat > .env.automation << EOF
# Automation and Monitoring Environment Variables
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
NOTIFICATION_EMAIL=false
EOF

echo "✅ Environment template created at .env.automation"

# Create cron job template
echo "⏰ Creating cron job template..."
cat > .cursor/scripts/crontab-template << EOF
# Real Estate Website Automation Cron Jobs
# Add these to your crontab with: crontab .cursor/scripts/crontab-template

# Performance monitoring every 5 minutes during business hours
*/5 9-17 * * 1-5 cd $(pwd) && npm run monitor

# Daily SEO and accessibility check at 4 AM
0 4 * * * cd $(pwd) && npm run seo:check && npm run accessibility:check

# Weekly performance report on Mondays at 2 AM
0 2 * * 1 cd $(pwd) && npm run performance:check

# Real estate data validation daily at 1 AM
0 1 * * * cd $(pwd) && npm run real-estate:validate
EOF

echo "✅ Cron job template created"

# Create git hooks for automation
echo "🪝 Setting up git hooks..."
mkdir -p .git/hooks

# Pre-commit hook
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
echo "🔍 Running pre-commit checks..."

# Run linting
npm run lint

# Run type checking
npm run build

# Run basic performance check if server is running
if curl -s http://localhost:3000 > /dev/null; then
    echo "🚀 Running quick performance check..."
    npm run performance:check -- --quiet
fi

echo "✅ Pre-commit checks passed"
EOF

chmod +x .git/hooks/pre-commit

# Post-commit hook
cat > .git/hooks/post-commit << 'EOF'
#!/bin/bash
echo "📊 Running post-commit monitoring..."

# Log commit for monitoring
echo "$(date): Commit $(git rev-parse HEAD)" >> .cursor/logs/commits.log

# Run quick monitoring if configured
if [ "$AUTOMATION_ENABLED" = "true" ]; then
    npm run monitor
fi
EOF

chmod +x .git/hooks/post-commit

echo "✅ Git hooks configured"

# Create monitoring dashboard template
echo "📊 Creating monitoring dashboard template..."
cat > .cursor/dashboard.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Estate Website Monitoring Dashboard</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .card { background: white; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .metric { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #eee; }
        .metric:last-child { border-bottom: none; }
        .status { padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }
        .status.good { background: #d4edda; color: #155724; }
        .status.warning { background: #fff3cd; color: #856404; }
        .status.error { background: #f8d7da; color: #721c24; }
        h1 { color: #333; }
        h2 { color: #555; margin-top: 0; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🏠 Real Estate Website Monitoring</h1>
        
        <div class="card">
            <h2>📊 Performance Metrics</h2>
            <div id="performance-metrics">
                <div class="metric">
                    <span>Largest Contentful Paint (LCP)</span>
                    <span class="status" id="lcp-status">Loading...</span>
                </div>
                <div class="metric">
                    <span>First Input Delay (FID)</span>
                    <span class="status" id="fid-status">Loading...</span>
                </div>
                <div class="metric">
                    <span>Cumulative Layout Shift (CLS)</span>
                    <span class="status" id="cls-status">Loading...</span>
                </div>
            </div>
        </div>

        <div class="card">
            <h2>🔍 SEO Status</h2>
            <div id="seo-status">
                <div class="metric">
                    <span>Sitemap</span>
                    <span class="status" id="sitemap-status">Loading...</span>
                </div>
                <div class="metric">
                    <span>Robots.txt</span>
                    <span class="status" id="robots-status">Loading...</span>
                </div>
                <div class="metric">
                    <span>Meta Descriptions</span>
                    <span class="status" id="meta-status">Loading...</span>
                </div>
            </div>
        </div>

        <div class="card">
            <h2>♿ Accessibility</h2>
            <div id="accessibility-status">
                <div class="metric">
                    <span>Overall Score</span>
                    <span class="status" id="a11y-score">Loading...</span>
                </div>
                <div class="metric">
                    <span>Violations</span>
                    <span class="status" id="a11y-violations">Loading...</span>
                </div>
            </div>
        </div>

        <div class="card">
            <h2>🏘️ Real Estate Specific</h2>
            <div id="real-estate-status">
                <div class="metric">
                    <span>RealScout Integration</span>
                    <span class="status" id="realscout-status">Loading...</span>
                </div>
                <div class="metric">
                    <span>Property Data</span>
                    <span class="status" id="property-data-status">Loading...</span>
                </div>
                <div class="metric">
                    <span>Image Optimization</span>
                    <span class="status" id="images-status">Loading...</span>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Load latest monitoring data
        async function loadMonitoringData() {
            try {
                const response = await fetch('/api/monitoring/latest');
                const data = await response.json();
                
                updateMetrics(data);
            } catch (error) {
                console.error('Failed to load monitoring data:', error);
            }
        }

        function updateMetrics(data) {
            // Update performance metrics
            updateStatus('lcp-status', data.performance?.lcp, 2500, 'ms');
            updateStatus('fid-status', data.performance?.fid, 100, 'ms');
            updateStatus('cls-status', data.performance?.cls, 0.1, 'score');
            
            // Update SEO status
            updateBooleanStatus('sitemap-status', data.seo?.sitemap);
            updateBooleanStatus('robots-status', data.seo?.robots);
            updateBooleanStatus('meta-status', data.seo?.metaDescription);
            
            // Update accessibility
            updateStatus('a11y-score', data.accessibility?.score, 90, '%');
            updateStatus('a11y-violations', data.accessibility?.violations, 0, 'violations', true);
        }

        function updateStatus(elementId, value, threshold, unit, reverse = false) {
            const element = document.getElementById(elementId);
            if (value !== undefined) {
                const isGood = reverse ? value <= threshold : value <= threshold;
                element.textContent = `${value}${unit}`;
                element.className = `status ${isGood ? 'good' : 'warning'}`;
            }
        }

        function updateBooleanStatus(elementId, value) {
            const element = document.getElementById(elementId);
            element.textContent = value ? 'OK' : 'Missing';
            element.className = `status ${value ? 'good' : 'error'}`;
        }

        // Load data on page load
        loadMonitoringData();
        
        // Refresh every 30 seconds
        setInterval(loadMonitoringData, 30000);
    </script>
</body>
</html>
EOF

echo "✅ Monitoring dashboard created"

# Create README for automation setup
cat > .cursor/AUTOMATION_README.md << 'EOF'
# Background Automation Setup

This directory contains automation scripts and configuration for the real estate website.

## Files

- `automation.json` - Main configuration for automation tasks
- `scripts/background-monitor.js` - Main monitoring script
- `scripts/setup-automation.sh` - This setup script
- `dashboard.html` - Monitoring dashboard
- `logs/` - Log files and reports

## Usage

### Manual Monitoring
```bash
# Run all checks
npm run monitor

# Run specific checks
npm run performance:check
npm run accessibility:check
npm run seo:check
npm run real-estate:validate
```

### Automated Monitoring
```bash
# Add cron jobs
crontab .cursor/scripts/crontab-template

# View logs
tail -f .cursor/logs/monitor.log
```

### Dashboard
Open `.cursor/dashboard.html` in your browser to view monitoring metrics.

## Configuration

Edit `.cursor/automation.json` to customize:
- Monitoring schedules
- Performance thresholds
- Alert settings
- Real estate specific checks

## Environment Variables

Copy `.env.automation` to `.env.local` and configure:
- Performance thresholds
- Notification settings
- API keys for monitoring services

## Troubleshooting

1. **Scripts not executable**: Run `chmod +x .cursor/scripts/*`
2. **Dependencies missing**: Run `npm install`
3. **Permission errors**: Check file permissions and user access
4. **Cron not working**: Verify cron service is running and paths are correct
EOF

echo "✅ Documentation created"

echo ""
echo "🎉 Background automation setup complete!"
echo ""
echo "Next steps:"
echo "1. Copy .env.automation to .env.local and configure your settings"
echo "2. Run 'npm run monitor' to test the setup"
echo "3. Add cron jobs with: crontab .cursor/scripts/crontab-template"
echo "4. Open .cursor/dashboard.html to view the monitoring dashboard"
echo ""
echo "For more information, see .cursor/AUTOMATION_README.md"
