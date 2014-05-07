foundationStickyFooter For Foundation 3 and up
======================
The Sticky footer will use the HTML5 tag < footer > and make it "stick" to the bottom of the page.
Simply add in < footer ></ footer > to your webpage with your desired styled content inside the < footer > tag.
You may pre-style the < footer > in your css file. 
The stiky footer will remember your original styles if the page is not long enough to "stick" to the bottom of the page! Even after resize!
There are no requirements for CSS! No 100% Body Height!
You don't even need a fixed height, or a wrapper!

It even works in mobile and tablet! Go on, check out the demo! http://tangerineindustries.com/download/sticky_footer/

<b>With the recent changes to Foundation I have put together a non-jQuery stickyFooter. The code changes have been reflected in the git files. It is a little quirky in IE8, but have tested with success in IE9, 10, 11, chrome, FF, and safari.</b>

FAQ's as they come up.
=====================
Q: Do I need to apply 100% height to my body?

A: No, Do not apply 100% height to your body, this will cause the plug in to not work.

Q: How do I span the full width of the browser with my footer in Foundation?

A: If you would like to have your footer span the full width of the browser, apply a style to the footer.
< footer style="background-color:red" >
This will give you a full width bar with a background color of red.

Q: Will this work with out Foundation?

A: Yes! This sticky footer will work with out Foundation. I build it with Foundation in mind cause that is what I use.

Q: How do I install this for Foundation 4?

A: Your scripts should load like this, as you can see I moved the location of the jquery.stickyfooter.js file to the js/vendor/ directory to reflect the location of the "helper" script... see... ('__proto__' in {} ? 'js/vendor/zepto' : 'js/vendor/jquery') how this script is looking for any jquery files in js/vendor.
```
  <script>
  document.write('<script src=' +
  ('__proto__' in {} ? 'js/vendor/zepto' : 'js/vendor/jquery') +
  '.js><\/script>')
  </script>

  <script src="js/vendor/jquery.js"></script>
  <script src="js/foundation.min.js"></script>
  <script src="js/vendor/stickyFooter.js"></script>
  ```
  
Your file locations may be a little different so make you paths reflect that.

Q: What about Foundation 5? 
A: It works great! and its easy to install too, no more Zepto!
