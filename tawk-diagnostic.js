// BizzyOPS Tawk.to Diagnostic Script
// Add this to your browser console to diagnose Tawk.to loading issues

console.log('🔍 Starting Tawk.to Diagnostic...');

// Check if Tawk.to script is loaded
function checkTawkScript() {
    const scripts = document.querySelectorAll('script[src*="tawk.to"]');
    console.log('📋 Tawk.to scripts found:', scripts.length);
    
    if (scripts.length > 0) {
        scripts.forEach((script, index) => {
            console.log(`✅ Script ${index + 1}:`, script.src);
        });
    } else {
        console.log('❌ No Tawk.to scripts found in DOM');
    }
}

// Check Tawk_API availability
function checkTawkAPI() {
    if (typeof Tawk_API !== 'undefined') {
        console.log('✅ Tawk_API is available');
        console.log('📊 Tawk_API object:', Tawk_API);
        
        if (typeof Tawk_API.isChatOnline === 'function') {
            console.log('💬 Chat online status:', Tawk_API.isChatOnline());
        }
        
        if (typeof Tawk_API.getStatus === 'function') {
            console.log('📱 Widget status:', Tawk_API.getStatus());
        }
    } else {
        console.log('❌ Tawk_API is not available');
    }
}

// Check for widget elements in DOM
function checkWidgetElements() {
    const tawkElements = document.querySelectorAll('[id*="tawk"], [class*="tawk"]');
    console.log('🎯 Tawk.to DOM elements found:', tawkElements.length);
    
    if (tawkElements.length > 0) {
        tawkElements.forEach((element, index) => {
            console.log(`📍 Element ${index + 1}:`, element);
            console.log('   - ID:', element.id);
            console.log('   - Classes:', element.className);
            console.log('   - Visible:', element.offsetParent !== null);
        });
    }
}

// Check for CSP restrictions
function checkCSP() {
    const metaCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (metaCSP) {
        console.log('🔒 CSP meta tag found:', metaCSP.content);
    } else {
        console.log('ℹ️ No CSP meta tag found (CSP might be set via headers)');
    }
}

// Check network requests
function checkNetworkRequests() {
    console.log('🌐 Checking network requests to Tawk.to...');
    
    // Try to fetch the embed URL
    fetch('https://embed.tawk.to/68e5a8ef0b10cd194e33e894/1j70hnqik', { mode: 'no-cors' })
        .then(() => {
            console.log('✅ Network connection to Tawk.to is working');
        })
        .catch(error => {
            console.log('❌ Network connection failed:', error);
        });
}

// Check for console errors related to Tawk.to
function checkConsoleErrors() {
    console.log('🐛 Check browser console for any error messages containing "tawk" or "embed"');
    console.log('💡 Common issues:');
    console.log('   - Ad blockers blocking tawk.to');
    console.log('   - CSP restrictions');
    console.log('   - Network connectivity issues');
    console.log('   - Widget configuration problems');
}

// Run all checks
checkTawkScript();
checkTawkAPI();
checkWidgetElements();
checkCSP();
checkNetworkRequests();
checkConsoleErrors();

console.log('🔍 Diagnostic complete. Check the messages above for any issues.');
console.log('💡 If the widget still doesn\'t appear, try:');
console.log('   1. Disable ad blockers temporarily');
console.log('   2. Check if the website is approved in Tawk.to dashboard');
console.log('   3. Verify the widget ID is correct');
console.log('   4. Test in incognito/private browsing mode');