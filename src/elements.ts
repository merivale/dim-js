import type { Attributes } from './attributes'
import { Child, createElement } from './element'

export const a = (attributes: Attributes = {}, children: Child[]): HTMLAnchorElement => {
  return createElement('a', attributes, children) as HTMLAnchorElement
}

export const abbr = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('abbr', attributes, children) as HTMLElement
}

export const address = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('address', attributes, children) as HTMLElement
}

export const area = (attributes: Attributes = {}): HTMLAreaElement => {
  return createElement('area', attributes) as HTMLAreaElement
}

export const article = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('article', attributes, children) as HTMLElement
}

export const aside = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('aside', attributes, children) as HTMLElement
}

export const audio = (attributes: Attributes = {}, children: Child[]): HTMLAudioElement => {
  return createElement('audio', attributes, children) as HTMLAudioElement
}

export const b = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('b', attributes, children) as HTMLElement
}

export const base = (attributes: Attributes = {}): HTMLBaseElement => {
  return createElement('base', attributes) as HTMLBaseElement
}

export const bdi = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('bdi', attributes, children) as HTMLElement
}

export const bdo = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('bdo', attributes, children) as HTMLElement
}

export const blockquote = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('blockquote', attributes, children) as HTMLElement
}

export const body = (attributes: Attributes = {}, children: Child[]): HTMLBodyElement => {
  return createElement('body', attributes, children) as HTMLBodyElement
}

export const br = (attributes: Attributes = {}): HTMLBRElement => {
  return createElement('br', attributes) as HTMLBRElement
}

export const button = (attributes: Attributes = {}, children: Child[]): HTMLButtonElement => {
  return createElement('button', attributes, children) as HTMLButtonElement
}

export const canvas = (attributes: Attributes = {}, children: Child[]): HTMLCanvasElement => {
  return createElement('canvas', attributes, children) as HTMLCanvasElement
}

export const caption = (attributes: Attributes = {}, children: Child[]): HTMLTableCaptionElement => {
  return createElement('caption', attributes, children) as HTMLTableCaptionElement
}

export const cite = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('cite', attributes, children) as HTMLElement
}

export const code = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('code', attributes, children) as HTMLElement
}

export const col = (attributes: Attributes = {}): HTMLTableColElement => {
  return createElement('col', attributes) as HTMLTableColElement
}

export const colgroup = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('colgroup', attributes, children) as HTMLElement
}

export const data = (attributes: Attributes = {}, children: Child[]): HTMLDataElement => {
  return createElement('data', attributes, children) as HTMLDataElement
}

export const datalist = (attributes: Attributes = {}, children: Child[]): HTMLDataListElement => {
  return createElement('datalist', attributes, children) as HTMLDataListElement
}

export const dd = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('dd', attributes, children) as HTMLElement
}

export const del = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('del', attributes, children) as HTMLElement
}

export const details = (attributes: Attributes = {}, children: Child[]): HTMLDetailsElement => {
  return createElement('details', attributes, children) as HTMLDetailsElement
}

export const dfn = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('dfn', attributes, children) as HTMLElement
}

export const div = (attributes: Attributes = {}, children: Child[]): HTMLDivElement => {
  return createElement('div', attributes, children) as HTMLDivElement
}

export const dl = (attributes: Attributes = {}, children: Child[]): HTMLDListElement => {
  return createElement('dl', attributes, children) as HTMLDListElement
}

export const dt = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('dt', attributes, children) as HTMLElement
}

export const em = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('em', attributes, children) as HTMLElement
}

export const embed = (attributes: Attributes = {}): HTMLEmbedElement => {
  return createElement('embed', attributes) as HTMLEmbedElement
}

export const fieldset = (attributes: Attributes = {}, children: Child[]): HTMLFieldSetElement => {
  return createElement('fieldset', attributes, children) as HTMLFieldSetElement
}

export const figcaption = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('figcaption', attributes, children) as HTMLElement
}

export const figure = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('figure', attributes, children) as HTMLElement
}

export const footer = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('footer', attributes, children) as HTMLElement
}

export const form = (attributes: Attributes = {}, children: Child[]): HTMLFormElement => {
  return createElement('form', attributes, children) as HTMLFormElement
}

export const h1 = (attributes: Attributes = {}, children: Child[]): HTMLHeadingElement => {
  return createElement('h1', attributes, children) as HTMLHeadingElement
}

export const h2 = (attributes: Attributes = {}, children: Child[]): HTMLHeadingElement => {
  return createElement('h2', attributes, children) as HTMLHeadingElement
}

export const h3 = (attributes: Attributes = {}, children: Child[]): HTMLHeadingElement => {
  return createElement('h3', attributes, children) as HTMLHeadingElement
}

export const h4 = (attributes: Attributes = {}, children: Child[]): HTMLHeadingElement => {
  return createElement('h4', attributes, children) as HTMLHeadingElement
}

export const h5 = (attributes: Attributes = {}, children: Child[]): HTMLHeadingElement => {
  return createElement('h5', attributes, children) as HTMLHeadingElement
}

export const h6 = (attributes: Attributes = {}, children: Child[]): HTMLHeadingElement => {
  return createElement('h6', attributes, children) as HTMLHeadingElement
}

export const head = (attributes: Attributes = {}, children: Child[]): HTMLHeadElement => {
  return createElement('head', attributes, children) as HTMLHeadElement
}

export const header = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('header', attributes, children) as HTMLElement
}

export const hgroup = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('hgroup', attributes, children) as HTMLElement
}

export const hr = (attributes: Attributes = {}): HTMLHRElement => {
  return createElement('hr', attributes) as HTMLHRElement
}

export const html = (attributes: Attributes = {}, children: Child[]): HTMLHtmlElement => {
  return createElement('html', attributes, children) as HTMLHtmlElement
}

export const i = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('i', attributes, children) as HTMLElement
}

export const iframe = (attributes: Attributes = {}, children: Child[]): HTMLIFrameElement => {
  return createElement('iframe', attributes, children) as HTMLIFrameElement
}

export const img = (attributes: Attributes = {}): HTMLImageElement => {
  return createElement('img', attributes) as HTMLImageElement
}

export const input = (attributes: Attributes = {}, children: Child[]): HTMLInputElement => {
  return createElement('input', attributes, children) as HTMLInputElement
}

export const ins = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('ins', attributes, children) as HTMLElement
}

export const kbd = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('kbd', attributes, children) as HTMLElement
}

export const label = (attributes: Attributes = {}, children: Child[]): HTMLLabelElement => {
  return createElement('label', attributes, children) as HTMLLabelElement
}

export const legend = (attributes: Attributes = {}, children: Child[]): HTMLLegendElement => {
  return createElement('legend', attributes, children) as HTMLLegendElement
}

export const li = (attributes: Attributes = {}, children: Child[]): HTMLLIElement => {
  return createElement('li', attributes, children) as HTMLLIElement
}

export const link = (attributes: Attributes = {}): HTMLLinkElement => {
  return createElement('link', attributes) as HTMLLinkElement
}

export const main = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('main', attributes, children) as HTMLElement
}

export const map = (attributes: Attributes = {}, children: Child[]): HTMLMapElement => {
  return createElement('map', attributes, children) as HTMLMapElement
}

export const mark = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('mark', attributes, children) as HTMLElement
}

export const menu = (attributes: Attributes = {}, children: Child[]): HTMLMenuElement => {
  return createElement('menu', attributes, children) as HTMLMenuElement
}

export const meta = (attributes: Attributes = {}): HTMLMetaElement => {
  return createElement('meta', attributes) as HTMLMetaElement
}

export const meter = (attributes: Attributes = {}, children: Child[]): HTMLMeterElement => {
  return createElement('meter', attributes, children) as HTMLMeterElement
}

export const nav = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('nav', attributes, children) as HTMLElement
}

export const noscript = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('noscript', attributes, children) as HTMLElement
}

export const object = (attributes: Attributes = {}, children: Child[]): HTMLObjectElement => {
  return createElement('object', attributes, children) as HTMLObjectElement
}

export const ol = (attributes: Attributes = {}, children: Child[]): HTMLOListElement => {
  return createElement('ol', attributes, children) as HTMLOListElement
}

export const optgroup = (attributes: Attributes = {}, children: Child[]): HTMLOptGroupElement => {
  return createElement('optgroup', attributes, children) as HTMLOptGroupElement
}

export const option = (attributes: Attributes = {}, children: Child[]): HTMLOptionElement => {
  return createElement('option', attributes, children) as HTMLOptionElement
}

export const output = (attributes: Attributes = {}, children: Child[]): HTMLOutputElement => {
  return createElement('output', attributes, children) as HTMLOutputElement
}

export const p = (attributes: Attributes = {}, children: Child[]): HTMLParagraphElement => {
  return createElement('p', attributes, children) as HTMLParagraphElement
}

export const param = (attributes: Attributes = {}): HTMLParamElement => {
  return createElement('param', attributes) as HTMLParamElement
}

export const picture = (attributes: Attributes = {}, children: Child[]): HTMLPictureElement => {
  return createElement('picture', attributes, children) as HTMLPictureElement
}

export const pre = (attributes: Attributes = {}, children: Child[]): HTMLPreElement => {
  return createElement('pre', attributes, children) as HTMLPreElement
}

export const progress = (attributes: Attributes = {}, children: Child[]): HTMLProgressElement => {
  return createElement('progress', attributes, children) as HTMLProgressElement
}

export const q = (attributes: Attributes = {}, children: Child[]): HTMLQuoteElement => {
  return createElement('q', attributes, children) as HTMLQuoteElement
}

export const rb = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('rb', attributes, children) as HTMLElement
}

export const rp = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('rp', attributes, children) as HTMLElement
}

export const rt = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('rt', attributes, children) as HTMLElement
}

export const rtc = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('rtc', attributes, children) as HTMLElement
}

export const ruby = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('ruby', attributes, children) as HTMLElement
}

export const s = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('s', attributes, children) as HTMLElement
}

export const samp = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('samp', attributes, children) as HTMLElement
}

export const script = (attributes: Attributes = {}, children: Child[]): HTMLScriptElement => {
  return createElement('script', attributes, children) as HTMLScriptElement
}

export const section = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('section', attributes, children) as HTMLElement
}

export const select = (attributes: Attributes = {}, children: Child[]): HTMLSelectElement => {
  return createElement('select', attributes, children) as HTMLSelectElement
}

export const slot = (attributes: Attributes = {}, children: Child[]): HTMLSlotElement => {
  return createElement('slot', attributes, children) as HTMLSlotElement
}

export const small = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('small', attributes, children) as HTMLElement
}

export const source = (attributes: Attributes = {}): HTMLSourceElement => {
  return createElement('source', attributes) as HTMLSourceElement
}

export const span = (attributes: Attributes = {}, children: Child[]): HTMLSpanElement => {
  return createElement('span', attributes, children) as HTMLSpanElement
}

export const strong = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('strong', attributes, children) as HTMLElement
}

export const style = (attributes: Attributes = {}, children: Child[]): HTMLStyleElement => {
  return createElement('style', attributes, children) as HTMLStyleElement
}

export const sub = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('sub', attributes, children) as HTMLElement
}

export const summary = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('summary', attributes, children) as HTMLElement
}

export const sup = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('sup', attributes, children) as HTMLElement
}

export const table = (attributes: Attributes = {}, children: Child[]): HTMLTableElement => {
  return createElement('table', attributes, children) as HTMLTableElement
}

export const tbody = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('tbody', attributes, children) as HTMLElement
}

export const template = (attributes: Attributes = {}, children: Child[]): HTMLTemplateElement => {
  return createElement('template', attributes, children) as HTMLTemplateElement
}

export const textarea = (attributes: Attributes = {}, children: Child[]): HTMLTextAreaElement => {
  return createElement('textarea', attributes, children) as HTMLTextAreaElement
}

export const td = (attributes: Attributes = {}, children: Child[]): HTMLTableCellElement => {
  return createElement('td', attributes, children) as HTMLTableCellElement
}

export const tfoot = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('tfoot', attributes, children) as HTMLElement
}

export const th = (attributes: Attributes = {}, children: Child[]): HTMLTableCellElement => {
  return createElement('th', attributes, children) as HTMLTableCellElement
}

export const thead = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('thead', attributes, children) as HTMLElement
}

export const time = (attributes: Attributes = {}, children: Child[]): HTMLTimeElement => {
  return createElement('time', attributes, children) as HTMLTimeElement
}

export const title = (attributes: Attributes = {}, children: Child[]): HTMLTitleElement => {
  return createElement('title', attributes, children) as HTMLTitleElement
}

export const tr = (attributes: Attributes = {}, children: Child[]): HTMLTableRowElement => {
  return createElement('tr', attributes, children) as HTMLTableRowElement
}

export const track = (attributes: Attributes = {}): HTMLTrackElement => {
  return createElement('track', attributes) as HTMLTrackElement
}

export const u = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('u', attributes, children) as HTMLElement
}

export const ul = (attributes: Attributes = {}, children: Child[]): HTMLUListElement => {
  return createElement('ul', attributes, children) as HTMLUListElement
}

export const _var = (attributes: Attributes = {}, children: Child[]): HTMLElement => {
  return createElement('var', attributes, children) as HTMLElement
}

export const video = (attributes: Attributes = {}, children: Child[]): HTMLVideoElement => {
  return createElement('video', attributes, children) as HTMLVideoElement
}

export const wbr = (attributes: Attributes = {}): HTMLElement => {
  return createElement('wbr', attributes) as HTMLElement
}
