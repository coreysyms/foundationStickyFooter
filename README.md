foundationStickyFooter For Foundation 3 and up
======================
The Sticky footer will use the HTML5 tag < footer > and make it "stick" to the bottom of the page.
Simply add in < footer ></ footer > to your webpage with your desired styled content inside the < footer > tag.
You may pre-style the < footer > in your css file. 
The stiky footer will remember your original styles if the page is not long enough to "stick" to the bottom of the page! Even after resize!
There are no requirements for CSS! No 100% Body Height!
You don't even need a fixed height, or a wrapper!

It even works in mobile and tablet! Go on, check out the demo! http://tangerineindustries.com/download/sticky_footer/index.html

<b>NEW DOM CHANGE EVENT LISTENERS! Also, my example uses an old instal of Foundation, but it does work in Foundation 5, I just couldn't figure out how to regigger my git files to reflect Foundations new file structure.</b>

FAQ's as they come up.
=====================
Q: Will it work with Foundation 6?

A: Yes, all testing so far has shown that sickyfooter plays will with Foundation 6

Q: What about HTML 5 allowing for multiple footer tags? 

A: Sticky Footer will only stick the last < footer > on your page.

Q: Do I need to apply 100% height to my body?

A: This has been changed from don't to does not matter. New sticky footer will still work with height 100%

Q: How do I span the full width of the browser with my footer in Foundation?

A: If you would like to have your footer span the full width of the browser, apply a style to the footer.
footer { background-color:red; } 
This will give you a full width bar with a background color of red.

Q: Will this work with out Foundation?

A: Yes! This sticky footer will work with out Foundation. I build it with Foundation in mind cause that is what I use.

Q: How do I install this for Foundation 4?

A: Your scripts should load like this, as you can see I moved the location of the stickyfooter.js file to the js/vendor/ directory to reflect the location of the "helper" script... see... ('__proto__' in {} ? 'js/vendor/zepto' : 'js/vendor/jquery') how this script is looking for any jquery files in js/vendor.
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


<b>HELPERS:</b>

Please DO NOT apply any classes to the footer IE < footer class="row" > If you would like your row content to respect the grid plase place the row and column(s) inside the < footer > tag. The stickyFooter will not work proprly if you class it with foundation's grid classes.

If you would like your footer to be 'hidden' before the sticky footer 'sticks' the footer at the bottom apply an inline style on your footer tag. This will eliminate a 'jump' in the footer to the bottom of the page.
```
 <footer style="visibility:hidden;">
 ... your footer code ...
 </footer>
 ```
