function solution(VDOM, parentDOM = document.body) {
  // 元素节点
  if (VDOM.tag) {
     const dom = document.createElement(VDOM.tag)
     for (let attr in VDOM.attr) {
       dom.setAttribute(attr, VDOM.attr[attr])
     }
     if (VDOM.children) {
       VDOM.children.forEach(item => solution(item, dom))
     }
     parentDOM.appendChild(dom)
  } else {  // 文本节点
    const dom = document.createTextNode(VDOM)
    parentDOM.appendChild(dom)
  }
}