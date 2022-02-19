# DIM.js

DIM.js is a micro framework for creating and modifying DOM elements.

The HTML DOM API is a lot nicer than it used to be. But the most annoying thing I find about it (when not working with a framework) is how many commands it takes just to create an element. DIM.js provides a `createElement` function to replace `document.createElement`, which takes three arguments instead of just one: the element's `tagName`, an object specifying its `attributes`, and some `content` to go inside the element (a string, an element, a document fragment, or an array of any of these).

In addition, it provides a `createDocumentFragment` element to replace `document.createDocumentFragment` (which similarly takes a `content` argument for the fragment's content), and individual functions for creating any HTML5 element (`a`, `b`, `body`, `h1`, `p`, `script`, etc.).

Finally, it also exports four basic side-effecting functions for DOM manipulation:

- `addAttributes(element, attributes)` - add attributes to an element (without deleting existing ones)
- `setAttributes(element, attributes)` - set the attributes of an element (deleting existing ones)
- `appendContent(element, content)` - append content to an element
- `setContent(element, content)` - set the content of an element

## Example

```javascript
import * as DIM from 'dim.min.js'

const toggleMessage = () => {
  const text = message.innerHTML === 'hello' ? 'goodbye' : 'hello'
  DIM.setContent(message, text)
}

const button = DIM.button({ onClick: toggleMessage }, 'click me')

const message = DIM.p({ className: 'message' }, 'hello')

const app = document.getElementById('app')

DIM.setContent(app, [button, message])
```
