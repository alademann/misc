CSS Interview Questions
===

##What is the "Box Model" in CSS? Which CSS properties are a part of it?

The CSS [box model](http://css-tricks.com/the-css-box-model/) is fundamental to understanding layout and sizing and such. It's made up of:

  + Width and height (or in the absence of that, default values and the content inside)
  + Padding
  + Border

![CSS Box Model](http://css-tricks.com/wp-content/csstricks-uploads/thebox.png)

> __Bonus points__ for mentioning that `margin` is related but not technically a part of it.

---

##What are Sass / LESS? Why do people use them? How does something like Compass relate to Sass?

They are CSS preprocessors. They are an abstraction layer on top of CSS. They are a special syntax/language that compile down into CSS. They make managing CSS easier, with things like variables and mixins to handle vendor prefixes (among other things). They make doing best practices easier, like concatenating and compressing CSS.

> __Bonus points__ for knowing how they differ and/or having experience using them. More bonus points for knowing what things like Compass, Bourbon, LESSHat, Nib, etc are and how they relate.

---

##Name some online resources that you reference when having CSS issues.

Being good at googling problems you are having is a valuable job skill. There isn't any shame in it. There is shame in spinning your wheels because "you should know this." If you don't have time to do the Googling exercise above, just asking about resources can be telling.

Google is a pretty good answer _(since it's true and we all know it)_. But being able to name some specific sites is a good indicator they have done it a bunch and are familiar with the places they land and know their favorites. Stuff like MDN (Mozilla Developer Network) is a good answer.

---

##Describe what a "reset" CSS file does and how it's useful.

Resets are so wildly common in CSS that anyone who is a front end developer type has surely used them. Do they do so blindly or do they know why? The reason is essentially that different browsers have different default styling for elements, and if you don't deal with that at all, you risk designers looking unnecessarily different in different browsers and possibly more dramatic breaking problems.

###Are you familiar with normalize.css? Do you understand how they differ?

[Normalize](http://necolas.github.io/normalize.css/) you might call a CSS reset alternative. Instead of wiping out all styles, it delivers a set of reasonable defaults. It doesn't unset things that are already consistent across browsers and reasonable _(e.g. bold headers)_. In that way it does some less than a reset. It also does some more than a reset in that it handles quirks you may never consider, like HTML5 audio element inconsistencies or line-height inconsistencies when you use sub and sup elements.

---

##What are the various techniques for clearing floats?

[Floats](http://css-tricks.com/all-about-floats/) are still incredibly common. As this is published, still probably the most cross-browser consistent way to build layout and grids. Anyone who has worked with them is aware of float collapsing. That is, floated element do not add to the height of a parent element. So for example if a parent element contained only floated elements, it would collapse to zero height. You can deal with that like:

  + Use a clearfix (bonus points for micro clearfix).
  + Float the parent as well.
  + Use an overflow property other than "visible" on the parent (bonus points for listing downsides like cutting off shadows).

> __Bonus points__ for "create a [new block formatting context](http://www.yuiblog.com/blog/2010/05/19/css-101-block-formatting-contexts/)".

> __Negative points__ for something like `<br style="clear: both;">`

![Clearing Floats](http://css-tricks.com/wp-content/csstricks-uploads/directionalclearing.png)

> __As a bonus question__, you could ask them to compare using inline-block and floats for building a grid.
  + Good answer: there are problems either way. With inline block you need to deal with the whitespace issue.
    With floats you need to deal with clearing.

---

##What are sprites and why would use them?

###How do you go about creating them?

###What are possible alternatives to sprites?

[Sprites are](http://css-tricks.com/css-sprites/) essentially multiple images combined into one. Performance is the reason that they are used. Generally speaking, the slowest thing a website can do is request a resource. The fewer requests a site needs to make, the faster it is. Fast = good. Combining what would be many requests into one = good.

![Image Sprites](http://css-tricks.com/wp-content/csstricks-uploads/1454282699-lhn-sprite.png)

Asking how they make sprites would just seal the deal that they are actually very familiar with them. Manually creating sprites is certainly a possibility but it isn't very efficent. There are helper tools like [SpriteCow](http://css-tricks.com/video-screencasts/105-using-spritecow/) and [SpriteMe](http://spriteme.org/), [Spriting with Compass](http://compass-style.org/help/tutorials/spriting/), or [Grunticon](https://github.com/filamentgroup/grunticon). It's always interesting to hear a real workflow approach.

> Sprites are raster images. When asking about alternatives, good answers might be related to the fact that sprites are often for icons and icons often don't need to be raster. [SVG Stacks](http://simurai.com/post/20251013889/svg-stacks), [Icon Fonts](http://css-tricks.com/flat-icons-icon-fonts/), [Unicode](http://copypastecharacter.com/)...

---

##What are some accessibility concerns that come up in CSS?

[Hidden content](http://css-tricks.com/places-its-tempting-to-use-display-none-but-dont/) is a big one here. It's only acceptable to use display: none; if you're both trying to hide things visually and the content itself.

CSS controls colors so color [accessibility](http://colorfilter.wickline.org/) is relevant. [Focus styles](http://a11yproject.com/posts/never-remove-css-outlines/) are also important and directly controlled by CSS.

There is a lot more accessibility stuff that is related to HTML and JavaScript, so mentioning that stuff is great, but I think it's interesting to target the question solely on CSS to force focused thinking.

---

##What is the difference between inline, inline-block, and block?

> __Bonus points__ for bringing up specific details like the fact that you can't transform inline elements.

---

##What tools do you use for cross-browser testing?

They should have some kind of strategy. Perhaps a web based tool like [BrowserStack](http://www.browserstack.com/). Perhaps a VM based tool like [Virtual Box](https://www.virtualbox.org/). Perhaps different actual computers.

> Part of the job of front end design is making sure things work everywhere they can _(based on decided-upon support)_. You don't have to love it, but you can't hate it. _["This right here, this is the job. What kind of work were you expecting?"](http://the-pastry-box-project.net/wilson-miner/2013-june-15/)_

---

##What are some of your favorite web design workflow tools?

  + What IDE to they like?
  + Where do they go for inspiration?
  + What experience with version control do they have?
  + What was QA like where they have worked? Support?
  + What different deployment methods have they worked with?
  + Do they know Photoshop or another visual design software alternative?
  + Are the comfortable with CLI?

Those are just some examples, it's interesting to hear about any software they use to get the jobs done. Getting a sense of the tools they use _(and better, the tools they like)_ is interesting.

> __Bonus points:__ a sense of excitement about some of the tools.

---

##What is responsive design all about?

It's about making websites work wherever the web is. Different devices with different sizes and different capabilities. Responsive design is about taking one code base and making it work for all of them. Part of that is media queries and different visuals. Part of that is different resources _(e.g. different JavaScript to handle touch vs click or different images to accommodate the screen)_.

---

#Have you ever worked with a grid layout? What are your thoughts on that?

  + Why did they need a grid?
  + How did they build the grid?
  + Was it home grown or did they use a grid tool?
    + Did they like the grid tool?
      + What kind of class names did they use?
  + Did they go mobile-first or desktop-first?
    + Was a help or a hinderance?
  + Do they reach for the grid automatically on any project?

---

##What are the benefits of SVG?

[SVG](http://css-tricks.com/using-svg/) is an image format that is vector based. It's an efficient format for that _(small file sizes)_. You can scale them and they retain their sharpness at any size _(bonus points for mentioning raster might have the upper hand at tiny sizes)_. You can affect parts of them with CSS and JavaScript as well as SVG specific filters that can do things like blurring.

---

##Say you were tasked with coding a design that used non-standard web fonts, how would you go about it?

A non-leading way to get them to talk about `@font-face` and how it works. Talking about how it works as a core CSS technology is great, as well as talking about services that provide the fonts and can make it easier e.g. Google Fonts, Typekit, Font Deck, Cloud Typography, etc.

> __Bonus points__ for obscure knowledge like the history of @font-face syntax or [Firefox's issue](http://www.change.org/petitions/mozilla-firefox-fix-bug-604421) with cross-origin fonts.

---

##Explain to me what's going on in this CSS selector:

```css
[role=navigation] > ul a:not([href^=mailto]) {

}
```

This selects anchor links that are not email links that are decedents of an unordered list that is the direct child of any element with a `role` attribute of 'navigation'.

> Being able to verbalize a selector is proof you understand them and evidence they can communicate complex tech subjects.

