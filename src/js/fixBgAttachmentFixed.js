$(document).ready(function($){
    const deviceAgent = navigator.userAgent.toLowerCase();
    
    if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
        $('.bg-attachment-fixed').css('background-attachment', 'scroll');
    }
});