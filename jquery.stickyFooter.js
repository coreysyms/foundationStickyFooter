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
  
	//IE does not support mutation events so old skool here
	if ($.browser.msie) {
		setInterval(checkForDOMChange, 100);
	}
});

//check for changes to the DOM
function checkForDOMChange() {
	if (!$.browser.msie) {
		$(document).unbind("DOMSubtreeModified");
	}
	stickyFooter();
}

//check for resize event if not IE
if (!$.browser.msie) {
	$(window).resize(function() {
		stickyFooter();
	});
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
	
	if (!$.browser.msie) {
		$(document).bind("DOMSubtreeModified", checkForDOMChange);
	}
}
/*
! end sticky footer
*/
