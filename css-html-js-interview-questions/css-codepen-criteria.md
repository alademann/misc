CSS Proficiency Tests
===

> Tests described below can all be found in [this collection](http://codepen.io/collection/daEif/) on CodePen.


##[CSS BUTTON](http://codepen.io/alademann/pen/cAxzs?editors=010)

###Instructions

> Using CSS properties alone (No Background Images), recreate this button:

![Button Sample](http://i.imgur.com/gnZnY.png)

> Spend no longer than 15 minutes on it, we don't expect it to be a perfect match. It's open book, feel free to hit Google but be prepared to explain your solution.

###Test Criteria

  + How did they handle [multiple borders](http://css-tricks.com/snippets/css/multiple-borders/)? `box-shadow` is probably the best way here.
  + Did they use `text-transform: uppercase;` for the text? That would be best.
  + How did they handle the stars? Pseudo elements would be a good candidate there. Did they use unicode? Icon font?
  + Did they catch the subtle `text-shadow`?
  + How did they split the background in the main part of the button? a `linear-gradient` with no fade would be a good technique there. Or `box-shadow`.
  + Were they [careful](http://css-tricks.com/public-service-announcement-careful-with-your-nested-border-radii/) with the nested `border-radius`?

> Decent answer [here](http://codepen.io/gillytech/pen/duHFG)

---

##[CSS FLOAT CLEARING](http://codepen.io/alademann/pen/hApJd?editors=110)

###Instructions

> Using css changes only, make the green div completely contain the blue div

###Test Criteria

They can either use the `.clearfix { overflow: hidden; }` solution, or the preferred micro clearfix:

```css
.clearfix {
    display: block;
}
.clearfix:after {
    clear: both;
    content: ".";
    display: block;
    height: 0;
    line-height: 0;
    visibility: hidden;
}
```

---

##[FIX THE SIDEBAR](http://codepen.io/alademann/pen/dwcbj?editors=110)

###Instructions

> The right sidebar here has fallen down below the content. Show me some different ways you could fix that.

![Broken Sidebar](http://cdn.css-tricks.com/wp-content/uploads/2013/10/fallen-sidebar.jpg)

###Test Criteria

Even though the two columns are 75% and 25% wide and floated opposite ways, the sidebar has fallen. The reason is because the columns don't actually add up to 100% - they add up to more than that due to the padding. There are a number of ways to fix it:

  + Using `box-sizing: border-box;` on the appropriate elements is the most efficient fix.
  + Using `calc()` on the widths to remove the `1rem` padding is another way.
  + Putting the padding on an added internal wrapper element instead of the columns is a fix that will work with very deep browser support.
  + Adjusting the numbers to make the math work is another way. For instance making the widths of the columns `4%` narrower and using `2%` for the padding instead.
  + _There are other ways._ The more solutions they can think of, the more creative and versatile a problem solver they are.

---

##[MAKE THIS DESIGN FLUID / RESPONSIVE](http://codepen.io/alademann/pen/fBhoi?editors=110)

###Instructions

> [Here's a design](http://codepen.io/alademann/pen/fBhoi?editors=110). It's a fixed `800px` wide. Do your best at making it fit the screen more appropriately at any screen size.

###Test Criteria

This is just one ingredient to responsive design _(which they should probably at least be familiar with)_ but it's an important one. It can help prove they can think spatially and make reasoned choices about layout. I'd look for:

  + Changing the pixel widths to percentages _(how did they handle the math? Sass?)_
  + Did they do anything special for large screens or just small?
  + Did they attempt to use a responsive images solution?
  + Does the new design retain the hierarchy of importance inherit to the original?
  + Did they come back at you with questions? _(Lots of things to ask here, including what other resources might be available.)_
  + Did they test it? _(To make sure it actually works, and find things like missing meta tags.)_