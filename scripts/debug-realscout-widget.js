// Debug script for RealScout widget issues
// Run this in the browser console to diagnose widget loading problems

console.log('🔍 RealScout Widget Debug Script');
console.log('================================');

// Check if RealScout script is loaded
console.log('1. Checking RealScout script loading...');
const realscoutScript = document.querySelector('script[src*="realscout-web-components"]');
if (realscoutScript) {
  console.log('✅ RealScout script found:', realscoutScript.src);
  console.log('   Script loaded:', realscoutScript.readyState || 'loaded');
} else {
  console.log('❌ RealScout script not found');
}

// Check custom elements support
console.log('\n2. Checking custom elements support...');
if (window.customElements) {
  console.log('✅ Custom Elements API available');
  console.log('   Defined elements:', window.customElements.get('realscout-home-value'));
} else {
  console.log('❌ Custom Elements API not available');
}

// Check for RealScout widgets on page
console.log('\n3. Checking for RealScout widgets...');
const widgets = document.querySelectorAll('realscout-home-value, realscout-simple-search, realscout-advanced-search');
console.log(`Found ${widgets.length} RealScout widgets:`);
widgets.forEach((widget, index) => {
  console.log(`   Widget ${index + 1}:`, widget.tagName, widget.attributes);
});

// Check network requests
console.log('\n4. Checking network requests...');
console.log('   Check Network tab for requests to:');
console.log('   - em.realscout.com');
console.log('   - widget.realscout.com');
console.log('   - Any 404s or failed requests');

// Test widget creation
console.log('\n5. Testing widget creation...');
try {
  const testWidget = document.createElement('realscout-home-value');
  testWidget.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw');
  console.log('✅ Widget creation successful:', testWidget);
} catch (error) {
  console.log('❌ Widget creation failed:', error);
}

// Check for errors in console
console.log('\n6. Checking for errors...');
console.log('   Look for any red error messages above');
console.log('   Common issues:');
console.log('   - Network connectivity');
console.log('   - Invalid agent ID');
console.log('   - Script loading failures');
console.log('   - CORS issues');

console.log('\n🎯 Debug complete! Check the information above for issues.');
console.log('\n💡 Solutions:');
console.log('   - If script not found: Check if script is loading from layout.tsx');
console.log('   - If custom elements not available: Check browser support');
console.log('   - If widgets not found: Check if components are rendering');
console.log('   - If creation fails: Check agent ID and script loading');
