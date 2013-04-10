/*!
 * jQuery Sticky Footer 1.0
 * Corey Snyder
 * http://tangerineindustries.com
 *
 * Released under the MIT license
 *
 * Copyright 2013 Corey Snyder.
 *
 * Date: Thu Jan 22 2013 13:34:00 GMT-0630 (Eastern Daylight Time)
 */

$(window).load(function() {
	stickyFooter();
	setInterval(checkForDOMChange, 500);
});

function checkForDOMChange() {
	stickyFooter();
}

function stickyFooter() {
	$("footer").removeAttr('style');	
	if (window.innerHeight != document.body.offsetHeight) {
		var offset = window.innerHeight - document.body.offsetHeight;
		var current = parseInt($("footer").css("margin-top"));
		
		if (current+offset > parseInt($("footer").css("margin-top"))) {
			$("footer").css({"margin-top":(current+offset)+"px"});
		}
	}
}
/*
! end sticky footer
*/
