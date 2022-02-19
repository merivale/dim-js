import { Attributes } from './attributes'
import { TagName } from './tagname'

export type Content = Child | Child[]

export type Child = DocumentFragment | HTMLElement | string

/** creates an HTML element */
export const createElement = (tagName: TagName, attributes: Attributes = {}, content: Content = []): HTMLElement => {
  const element = document.createElement(tagName)
  addAttributes(element, attributes)
  appendContent(element, content)
  return element
}

/** creates a document fragment */
export const createDocumentFragment = (content: Content = []): DocumentFragment => {
  const fragment = document.createDocumentFragment()
  appendContent(fragment, content)
  return fragment
}

/** adds attributes to an HTML element */
export const addAttributes = (element: HTMLElement, attributes: Attributes): void => {
  Object.entries(attributes).forEach(([key, value]) => {
    if (key.slice(0, 2) === 'on') {
      const event = key.slice(2).toLowerCase()
      element.addEventListener(event, value)
    } else if (key === 'style') {
      Object.entries(attributes.style!).forEach(([cssKey, cssValue]) => {
        element.style[cssKey as any] = cssValue
      })
    } else if (key === 'className') {
      attributes.className!.split(' ').forEach(x => element.classList.add(x))
    } else if (key === 'value') {
      (element as HTMLInputElement).value = value
    } else {
      element.setAttribute(key.toLowerCase(), typeof value === 'boolean' ? key.toLowerCase() : value.toString())
    }
  })
}

/** appends content to an HTML element or fragment */
export const appendContent = (element: HTMLElement | DocumentFragment, content: Content = []): void => {
  if (Array.isArray(content)) {
    const fragment = document.createDocumentFragment()
    content.forEach(x => appendChild(fragment, x))
    element.appendChild(fragment)
  } else {
    appendChild(element, content)
  }
}

/** appends a child to an HTML element or fragment */
const appendChild = (element: HTMLElement | DocumentFragment, child: Child): void => {
  if (typeof child === 'string') {
    element.appendChild(document.createTextNode(child))
  } else {
    element.appendChild(child)
  }
}

/** sets the attributes of an HTML element */
export const setAttributes = (element: HTMLElement, attributes: Attributes = {}): void => {
  removeAttributes(element)
  addAttributes(element, attributes)
}

/** clears the attributes of an HTML element */
const removeAttributes = (element: HTMLElement): void => {
  Array.from(element.attributes).map(x => x.name).forEach(element.removeAttribute)
}

/** sets the content of an HTML element or fragment */
export const setContent = (element: HTMLElement | DocumentFragment, content: Content = []): void => {
  removeContent(element)
  appendContent(element, content)
}

/** clears the content of an HTML element or fragment */
const removeContent = (element: HTMLElement | DocumentFragment): void => {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}
