// src/element.ts
var createElement = (tagName, attributes = {}, content = []) => {
  const element = document.createElement(tagName);
  addAttributes(element, attributes);
  appendContent(element, content);
  return element;
};
var createDocumentFragment = (content = []) => {
  const fragment = document.createDocumentFragment();
  appendContent(fragment, content);
  return fragment;
};
var addAttributes = (element, attributes) => {
  Object.entries(attributes).forEach(([key, value]) => {
    if (key.slice(0, 2) === "on") {
      const event = key.slice(2).toLowerCase();
      element.addEventListener(event, value);
    } else if (key === "style") {
      Object.entries(attributes.style).forEach(([cssKey, cssValue]) => {
        element.style[cssKey] = cssValue;
      });
    } else if (key === "className") {
      attributes.className.split(" ").forEach((x) => element.classList.add(x));
    } else if (key === "value") {
      element.value = value;
    } else {
      element.setAttribute(key.toLowerCase(), typeof value === "boolean" ? key.toLowerCase() : value.toString());
    }
  });
};
var appendContent = (element, content = []) => {
  if (Array.isArray(content)) {
    const fragment = document.createDocumentFragment();
    content.forEach((x) => appendChild(fragment, x));
    element.appendChild(fragment);
  } else {
    appendChild(element, content);
  }
};
var appendChild = (element, child) => {
  if (typeof child === "string") {
    element.appendChild(document.createTextNode(child));
  } else {
    element.appendChild(child);
  }
};
var setAttributes = (element, attributes = {}) => {
  removeAttributes(element);
  addAttributes(element, attributes);
};
var removeAttributes = (element) => {
  Array.from(element.attributes).map((x) => x.name).forEach(element.removeAttribute);
};
var setContent = (element, content = []) => {
  removeContent(element);
  appendContent(element, content);
};
var removeContent = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

// src/elements.ts
var a = (attributes = {}, children) => {
  return createElement("a", attributes, children);
};
var abbr = (attributes = {}, children) => {
  return createElement("abbr", attributes, children);
};
var address = (attributes = {}, children) => {
  return createElement("address", attributes, children);
};
var area = (attributes = {}) => {
  return createElement("area", attributes);
};
var article = (attributes = {}, children) => {
  return createElement("article", attributes, children);
};
var aside = (attributes = {}, children) => {
  return createElement("aside", attributes, children);
};
var audio = (attributes = {}, children) => {
  return createElement("audio", attributes, children);
};
var b = (attributes = {}, children) => {
  return createElement("b", attributes, children);
};
var base = (attributes = {}) => {
  return createElement("base", attributes);
};
var bdi = (attributes = {}, children) => {
  return createElement("bdi", attributes, children);
};
var bdo = (attributes = {}, children) => {
  return createElement("bdo", attributes, children);
};
var blockquote = (attributes = {}, children) => {
  return createElement("blockquote", attributes, children);
};
var body = (attributes = {}, children) => {
  return createElement("body", attributes, children);
};
var br = (attributes = {}) => {
  return createElement("br", attributes);
};
var button = (attributes = {}, children) => {
  return createElement("button", attributes, children);
};
var canvas = (attributes = {}, children) => {
  return createElement("canvas", attributes, children);
};
var caption = (attributes = {}, children) => {
  return createElement("caption", attributes, children);
};
var cite = (attributes = {}, children) => {
  return createElement("cite", attributes, children);
};
var code = (attributes = {}, children) => {
  return createElement("code", attributes, children);
};
var col = (attributes = {}) => {
  return createElement("col", attributes);
};
var colgroup = (attributes = {}, children) => {
  return createElement("colgroup", attributes, children);
};
var data = (attributes = {}, children) => {
  return createElement("data", attributes, children);
};
var datalist = (attributes = {}, children) => {
  return createElement("datalist", attributes, children);
};
var dd = (attributes = {}, children) => {
  return createElement("dd", attributes, children);
};
var del = (attributes = {}, children) => {
  return createElement("del", attributes, children);
};
var details = (attributes = {}, children) => {
  return createElement("details", attributes, children);
};
var dfn = (attributes = {}, children) => {
  return createElement("dfn", attributes, children);
};
var div = (attributes = {}, children) => {
  return createElement("div", attributes, children);
};
var dl = (attributes = {}, children) => {
  return createElement("dl", attributes, children);
};
var dt = (attributes = {}, children) => {
  return createElement("dt", attributes, children);
};
var em = (attributes = {}, children) => {
  return createElement("em", attributes, children);
};
var embed = (attributes = {}) => {
  return createElement("embed", attributes);
};
var fieldset = (attributes = {}, children) => {
  return createElement("fieldset", attributes, children);
};
var figcaption = (attributes = {}, children) => {
  return createElement("figcaption", attributes, children);
};
var figure = (attributes = {}, children) => {
  return createElement("figure", attributes, children);
};
var footer = (attributes = {}, children) => {
  return createElement("footer", attributes, children);
};
var form = (attributes = {}, children) => {
  return createElement("form", attributes, children);
};
var h1 = (attributes = {}, children) => {
  return createElement("h1", attributes, children);
};
var h2 = (attributes = {}, children) => {
  return createElement("h2", attributes, children);
};
var h3 = (attributes = {}, children) => {
  return createElement("h3", attributes, children);
};
var h4 = (attributes = {}, children) => {
  return createElement("h4", attributes, children);
};
var h5 = (attributes = {}, children) => {
  return createElement("h5", attributes, children);
};
var h6 = (attributes = {}, children) => {
  return createElement("h6", attributes, children);
};
var head = (attributes = {}, children) => {
  return createElement("head", attributes, children);
};
var header = (attributes = {}, children) => {
  return createElement("header", attributes, children);
};
var hgroup = (attributes = {}, children) => {
  return createElement("hgroup", attributes, children);
};
var hr = (attributes = {}) => {
  return createElement("hr", attributes);
};
var html = (attributes = {}, children) => {
  return createElement("html", attributes, children);
};
var i = (attributes = {}, children) => {
  return createElement("i", attributes, children);
};
var iframe = (attributes = {}, children) => {
  return createElement("iframe", attributes, children);
};
var img = (attributes = {}) => {
  return createElement("img", attributes);
};
var input = (attributes = {}, children) => {
  return createElement("input", attributes, children);
};
var ins = (attributes = {}, children) => {
  return createElement("ins", attributes, children);
};
var kbd = (attributes = {}, children) => {
  return createElement("kbd", attributes, children);
};
var label = (attributes = {}, children) => {
  return createElement("label", attributes, children);
};
var legend = (attributes = {}, children) => {
  return createElement("legend", attributes, children);
};
var li = (attributes = {}, children) => {
  return createElement("li", attributes, children);
};
var link = (attributes = {}) => {
  return createElement("link", attributes);
};
var main = (attributes = {}, children) => {
  return createElement("main", attributes, children);
};
var map = (attributes = {}, children) => {
  return createElement("map", attributes, children);
};
var mark = (attributes = {}, children) => {
  return createElement("mark", attributes, children);
};
var menu = (attributes = {}, children) => {
  return createElement("menu", attributes, children);
};
var meta = (attributes = {}) => {
  return createElement("meta", attributes);
};
var meter = (attributes = {}, children) => {
  return createElement("meter", attributes, children);
};
var nav = (attributes = {}, children) => {
  return createElement("nav", attributes, children);
};
var noscript = (attributes = {}, children) => {
  return createElement("noscript", attributes, children);
};
var object = (attributes = {}, children) => {
  return createElement("object", attributes, children);
};
var ol = (attributes = {}, children) => {
  return createElement("ol", attributes, children);
};
var optgroup = (attributes = {}, children) => {
  return createElement("optgroup", attributes, children);
};
var option = (attributes = {}, children) => {
  return createElement("option", attributes, children);
};
var output = (attributes = {}, children) => {
  return createElement("output", attributes, children);
};
var p = (attributes = {}, children) => {
  return createElement("p", attributes, children);
};
var param = (attributes = {}) => {
  return createElement("param", attributes);
};
var picture = (attributes = {}, children) => {
  return createElement("picture", attributes, children);
};
var pre = (attributes = {}, children) => {
  return createElement("pre", attributes, children);
};
var progress = (attributes = {}, children) => {
  return createElement("progress", attributes, children);
};
var q = (attributes = {}, children) => {
  return createElement("q", attributes, children);
};
var rb = (attributes = {}, children) => {
  return createElement("rb", attributes, children);
};
var rp = (attributes = {}, children) => {
  return createElement("rp", attributes, children);
};
var rt = (attributes = {}, children) => {
  return createElement("rt", attributes, children);
};
var rtc = (attributes = {}, children) => {
  return createElement("rtc", attributes, children);
};
var ruby = (attributes = {}, children) => {
  return createElement("ruby", attributes, children);
};
var s = (attributes = {}, children) => {
  return createElement("s", attributes, children);
};
var samp = (attributes = {}, children) => {
  return createElement("samp", attributes, children);
};
var script = (attributes = {}, children) => {
  return createElement("script", attributes, children);
};
var section = (attributes = {}, children) => {
  return createElement("section", attributes, children);
};
var select = (attributes = {}, children) => {
  return createElement("select", attributes, children);
};
var slot = (attributes = {}, children) => {
  return createElement("slot", attributes, children);
};
var small = (attributes = {}, children) => {
  return createElement("small", attributes, children);
};
var source = (attributes = {}) => {
  return createElement("source", attributes);
};
var span = (attributes = {}, children) => {
  return createElement("span", attributes, children);
};
var strong = (attributes = {}, children) => {
  return createElement("strong", attributes, children);
};
var style = (attributes = {}, children) => {
  return createElement("style", attributes, children);
};
var sub = (attributes = {}, children) => {
  return createElement("sub", attributes, children);
};
var summary = (attributes = {}, children) => {
  return createElement("summary", attributes, children);
};
var sup = (attributes = {}, children) => {
  return createElement("sup", attributes, children);
};
var table = (attributes = {}, children) => {
  return createElement("table", attributes, children);
};
var tbody = (attributes = {}, children) => {
  return createElement("tbody", attributes, children);
};
var template = (attributes = {}, children) => {
  return createElement("template", attributes, children);
};
var textarea = (attributes = {}, children) => {
  return createElement("textarea", attributes, children);
};
var td = (attributes = {}, children) => {
  return createElement("td", attributes, children);
};
var tfoot = (attributes = {}, children) => {
  return createElement("tfoot", attributes, children);
};
var th = (attributes = {}, children) => {
  return createElement("th", attributes, children);
};
var thead = (attributes = {}, children) => {
  return createElement("thead", attributes, children);
};
var time = (attributes = {}, children) => {
  return createElement("time", attributes, children);
};
var title = (attributes = {}, children) => {
  return createElement("title", attributes, children);
};
var tr = (attributes = {}, children) => {
  return createElement("tr", attributes, children);
};
var track = (attributes = {}) => {
  return createElement("track", attributes);
};
var u = (attributes = {}, children) => {
  return createElement("u", attributes, children);
};
var ul = (attributes = {}, children) => {
  return createElement("ul", attributes, children);
};
var _var = (attributes = {}, children) => {
  return createElement("var", attributes, children);
};
var video = (attributes = {}, children) => {
  return createElement("video", attributes, children);
};
var wbr = (attributes = {}) => {
  return createElement("wbr", attributes);
};
export {
  _var,
  a,
  abbr,
  address,
  appendContent,
  area,
  article,
  aside,
  audio,
  b,
  base,
  bdi,
  bdo,
  blockquote,
  body,
  br,
  button,
  canvas,
  caption,
  cite,
  code,
  col,
  colgroup,
  createDocumentFragment,
  createElement,
  data,
  datalist,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  head,
  header,
  hgroup,
  hr,
  html,
  i,
  iframe,
  img,
  input,
  ins,
  kbd,
  label,
  legend,
  li,
  link,
  main,
  map,
  mark,
  menu,
  meta,
  meter,
  nav,
  noscript,
  object,
  ol,
  optgroup,
  option,
  output,
  p,
  param,
  picture,
  pre,
  progress,
  q,
  rb,
  rp,
  rt,
  rtc,
  ruby,
  s,
  samp,
  script,
  section,
  select,
  setAttributes,
  setContent,
  slot,
  small,
  source,
  span,
  strong,
  style,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  template,
  textarea,
  tfoot,
  th,
  thead,
  time,
  title,
  tr,
  track,
  u,
  ul,
  video,
  wbr
};
