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

Elements that already have an ID wont get a new one, but the anchor link and the class nontheless; pointing to the already axisting ID.

### Options

| option 				| Default 		| Description															|
| --------------------- | ------------- | --------------------------------------------------------------------- |
| `linkText`			| '#'			| use another text fot the actual anchor 								|
| `containingClass` 	| 'anchoring' 	| class the anchored element will be assigned to 						|
| `linkClass` 			| 'anchor' 		| class the link will get												|
| `excludeClass` 		| 'noAnchoring'	| elements with this class wont be anchored								|
| `scrollOffset` 		| 0				| offset for the scroll–usefull for pages with fixed bars and menus 	|
| `maxLength` 			| 0				| max length of the generated anchor 									|
| `maxWords` 			| 0				| max words the generated anchor will containing 						|