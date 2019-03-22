const CREATE = 'CREATE'
const REMOVE = 'REMOVE'
const REPLACE = 'REPLACE'
const UPDATE = 'UPDATE'
const SET_PROP = 'SET_PROP'
const REMOVE_PROP = 'REMOVE PROP'

//// DIFF

function changed(node1, node2) {

}

function diffProps(newNode, oldNode) {

}

function diffChildren(newNode, oldNode) {

}

function diff(newNode, oldNode) {  //@

}

//// PATCH

function createElement(node) { //@
	if (typeof node === 'string') {
    return document.createTextNode(node)
  }
  const el = document.createElement(node.type)
  setProps(el, node.props)
  node.children
    .map(createElement)
    .forEach(el.appendChild.bind(el))
  return el
}

function setProp(target, name, value) { //@

}

function setProps(target, props) {

}

function removeProp(target, name, value) { //@

}

function patchProps(parent, patches) {

}

function patch(parent, patches, index = 0) { //@

}

//// My Application

function flatten(arr) {
  return [].concat.apply([], arr)
}

function h(type, props, ...children) {
  props = props || {}
  return { type, props, children: flatten(children) }
}

function view(count) { //@
	return <ul id="cool" className="foo">
	  <li className="test">text 1</li>
	  <li>text 2</li>
	</ul>
}

function tick(el, count) {

}

function render(el) {
	el.appendChild(createElement(view(0)))
}