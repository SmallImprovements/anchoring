anchoring
=========

jQuery Plugin to automatically add anchors to elements to make them linkable.

Usage
-----

To add links to all headings of the type h2 and h3, the code would be: 

```javascript
$('h2, h3').anchoring();
```

It will transform 

```html
<h2>A really interesting heading</h2>
```

to 

```html
<h2 id="A-really-interesting-heading" class="anchoring">
	<a class="anchor" href="#A-really-interesting-heading">#</a>
	A really interesting heading
</h2>
```

As you can observe in the example, the elements will get an ID generated from the text inside the anchored element and a link pointing to it. Multiple elements will never share a common ID. In this case the ID will get a number appended to prevent this.

### Setting custom IDs
Elements that already have an ID will not get a new one, but the anchor link and the class will be inserted nonetheless; pointing to the already existing ID. This is handy to ensure that old links work although the title was changed or if the title is expected to change in the future.

### Styling
It might be useful to embed the css included in this package. It ensures a basic styling for the anchors and hides them as long as the user is not hovering the element with the mouse.

### Scroll offset
Use this if you have a fixed bar on the top of your page or something similar. Otherwise the top of the element might be hidden behind it - usually the heading the user is supposed to see at that time.

### Options

| option 				| Default 		| Description																|
| --------------------- | ------------- | ------------------------------------------------------------------------- |
| `linkText`			| '#'			| use another text for the actual anchor 									|
| `containingClass` 	| 'anchoring' 	| class the anchored element will be assigned to 							|
| `linkClass` 			| 'anchor' 		| class the link will get													|
| `excludeClass` 		| 'noAnchoring'	| elements with this class wont be anchored									|
| `scrollOffset` 		| 0				| offset for the scroll–usefull for pages with fixed bars and menus 		|
| `maxLength` 			| 100			| max length of the generated anchor. 0 means no limit						|
| `maxWords` 			| 0				| max amount of words the generated anchor will contain. 0 is no maxWords	|