Sticky Footer
======================
The Sticky footer will use the HTML5 tag < footer > and make it "stick" to the bottom of the page.
Simply add in < footer ></ footer > to your webpage with your desired styled content inside the < footer > tag.
You may pre-style the < footer > in your css file. 
The stiky footer will remember your original styles if the page is not long enough to "stick" to the bottom of the page! Even after resize!
There are no requirements for CSS! No 100% Body Height!
You don't need a fixed height, or a wrapper!

It even works in mobile and tablet!


FAQ's as they come up.
=====================

<b>Q: What about HTML 5 allowing for multiple footer tags? </b>

A: Sticky Footer will only stick the last < footer > on your page.

<b>Q: Do I need to apply 100% height to my body?</b>

A: This has been changed from don't to does not matter. New sticky footer will still work with height 100%

<b>Q: How do I span the full width of the browser with my footer in Foundation?</b>

A: If you would like to have your footer span the full width of the browser, apply a style to the footer.
footer { background-color:red; } 
This will give you a full width bar with a background color of red.

A more robust example being a 2 column grid respecting footer with a full width bg red and a margin top of 100px when the footer is longer than the height of the page.

```
*app.css*
footer { background-color:red; margin-top:100px }

*html*
<footer>
  <div class="row">
    <div class="columns medium-6">
      <p>I am the left side</p>
    </div>
    <div class="columns medium-6">
      <p>I am the right side</p>
    </div>
  </div>
</footer>
```


<b>Q: Will this work with out Foundation?</b>

A: Yes! This sticky footer will work with out Foundation. I build it with Foundation in mind cause that is what I use.



<b>HELPERS:</b>

Please DO NOT apply any classes to the footer IE < footer class="row" > If you would like your row content to respect the grid plase place the row and column(s) inside the < footer > tag. The stickyFooter will not work proprly if you class it with foundation's grid classes.

If you would like your footer to be 'hidden' before the sticky footer 'sticks' the footer at the bottom apply an inline style on your footer tag. This will eliminate a 'jump' in the footer to the bottom of the page.
```
 <footer style="visibility:hidden;">
 ... your footer code ...
 </footer>
 ```
