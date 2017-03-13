/*!
 * jQuery Sticky Footer 2.3
 * Corey Snyder
 * http://tangerineindustries.com
 *
 * Released under the MIT license
 *
 * Copyright 2013 Corey Snyder.
 *
 * Date: Thu Jan 22 2013 13:34:00 GMT-0630 (Eastern Daylight Time)
 * Modification for jquery 1.9+ Tue May 7 2013
 * Modification for non-jquery, removed all, now classic JS Wed Jun 12 2013
 * Modification for Foundation 5 auto height issues
 * Modification for new DOM change event listener
 * Modification for old IE mutation events, since not supported uses polling
 * 
 * March 13, 2017
 * Modification for HTML multiple <footer> tag syntax, SF should only grabbing the last <footer> on the page
 */

var MutationObserver = (function () {
	var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
		for (var i=0; i < prefixes.length; i++) {
			if (prefixes[i] + 'MutationObserver' in window) {
				 return window[prefixes[i] + 'MutationObserver'];
			}
		}
		return false;
}());

window.onload = function() {
	stickyFooter();

	if (MutationObserver) {
  		observer.observe(target, config);
	} else {
		//old IE
  		setInterval(stickyFooter, 500);
	}
};

//check for changes to the DOM
var target = document.body;
var observer;
var config = { attributes: true, childList: true, characterData: true, subtree:true };

if (MutationObserver) {
	// create an observer instance
	observer = new MutationObserver(mutationObjectCallback);
}

function mutationObjectCallback(mutationRecordsList) {	
	stickyFooter();
}
	 

//check for resize event
window.onresize = function() {
	stickyFooter();
};

//lets get the marginTop for the <footer>
function getCSS(element, property) {

  var elem = document.getElementsByTagName(element)[0];
  var css = null;
  
  if (elem.currentStyle) {
    css = elem.currentStyle[property];
  
  } else if (window.getComputedStyle) {
	css = document.defaultView.getComputedStyle(elem, null).
	getPropertyValue(property);
  }
  
  return css;

}

function stickyFooter() {
	if (MutationObserver) {
		observer.disconnect();
	}
	document.body.setAttribute("style","height:auto");
	
	//only get the last footer
	var footer = document.getElementsByTagName("footer")[document.getElementsByTagName("footer").length-1];
			
	if (footer.getAttribute("style") !== null) {
		footer.removeAttribute("style");
	}
	
	if (window.innerHeight != document.body.offsetHeight) {
		var offset = window.innerHeight - document.body.offsetHeight;
		var current = getCSS("footer", "margin-top");
		
		if (isNaN(parseInt(current)) === true) {
			footer.setAttribute("style","margin-top:0px;");
			current = 0;
		} else {
			current = parseInt(current);
		}
						
		if (current+offset > parseInt(getCSS("footer", "margin-top"))) {			
			footer.setAttribute("style","margin-top:"+(current+offset)+"px;");
		}
	}
	
	document.body.setAttribute("style","height:100%");
	
	//reconnect
	if (MutationObserver) {
		observer.observe(target, config);
	}
}

/*
! end sticky footer
*/
