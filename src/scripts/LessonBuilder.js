console.clear();
const wrapper = document.querySelector(".wrapper");
let domOutline = [];
let tasksArr = [];

function findComments(el) {
  for (let i = 0; i < el.childNodes.length; i++) {
    const node = el.childNodes[i];
    if (node.nodeType === Node.COMMENT_NODE) {
      const text = node.textContent.toLowerCase().trim();
      if (text == "step") {
        domOutline.push([node.nextElementSibling]);
      } else if (text == "sub-step") {
        domOutline[domOutline.length - 1].push(node.nextElementSibling);
      }
    } else {
      findComments(node);
    }
  }
}
findComments(wrapper);
// console.log(domOutline);

function buildLesson() {
  for (let i = 0; i < domOutline.length; i++) {
    const currentRow = domOutline[i];
    const len = tasksArr.push([]);
    for (let j = 0; j < currentRow.length; j++) {
      const currentColumn = currentRow[j];
      tasksArr[len - 1].push(...step(currentColumn));
    }
  }
}

buildLesson();
console.log(tasksArr[2]);

function figureOutThing(item) {
  return item.localName.toLowerCase();
}

function getNumChildren(elem, elemType) {
  const parent = document.querySelector(elem);
  const children = parent.querySelectorAll(elemType);
  return children.length;
}

function step(item) {
  const arr = [];
  const elemType = figureOutThing(item);
  const task = {
    type: "children",
    el: `.${item.parentNode.className}`,
    test: { item: elemType, value: getNumChildren(`.${item.parentNode.className}`, elemType) },
    instructions: `Create "${mockHTML(item)}" inside of "${item.parentNode.className}"`,
    hint: mockHTML(item),
  };

  arr.push(task);

  if (hasID(item)) {
    const task = {};
    task.type = "attribute";
    task.el = `#${item.id}`;
    task.test = { item: "id", value: item.id };
    task.instructions = `Give that "${mockHTML(item)}" a id attribute of "${item.id}"`;
    task.hint = escapeHTML(`id="${item.id}"`);
    arr.push(task);
  }

  if (hasClass(item)) {
    const task = {};
    task.type = "attribute";
    task.el = `.${item.className}`;
    task.test = { item: "className", value: item.className };
    task.instructions = `Give that "${mockHTML(item)}" a class attribute of "${item.className}"`;
    task.hint = escapeHTML(`class="${item.className}"`);
    arr.push(task);
  }

  if (textNode(item) && hasText(item)) {
    const task = {};
    task.type = "attribute";
    task.el = `#${item.parentNode.id} ${item.localName}`;
    task.test = { item: item.localName, value: item.firstChild.textContent.trim() };
    task.instructions = `Add the text "${item.firstChild.textContent.trim()}" to the "${item.localName}"`;
    task.hint = item.firstChild.textContent.trim();
    arr.push(task);
  }

  if (linkNode(item)) {
    const task = {};
    task.type = "attribute";
    task.el = `#${item.parentNode.id} ${item.localName}`;
    task.test = { item: "a", value: item.className };
    task.instructions = `Give the link an href "${item.href}"`;
    arr.push(task);
  }

  if (linkNode(item)) {
    const task = {};
    task.type = "attribute";
    task.el = `#${item.parentNode.id} ${item.localName}`;
    task.test = { item: "a", value: item.className };
    task.instructions = `Add the text "${item.firstChild.textContent.trim()}" to the "${item.localName}" tag.`;
    arr.push(task);
  }

  return arr;
}

function mockHTML(item) {
  return escapeHTML(`<${item.localName.toLowerCase()}></${item.localName.toLowerCase()}>`);
}

function escapeHTML(item) {
  const safe = item
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
  return safe;
}

function hasID(item) {
  return item.id != "";
}

function hasClass(item) {
  return item.className != "";
}

function textNode(item) {
  const local = item.localName.toLowerCase();
  const types = ["h1", "h2", "h3", "h4", "h5", "h6", "span", "p", "i", "strong", "bold", "em"];
  return types.some(t => t == local);
}

function hasText(item) {
  return item.innerText != "";
}

function linkNode(item) {
  const local = item.localName.toLowerCase();
  const types = ["a"];
  return types.some(t => t == local);
}

/// Build final steps
/**
  {
    desc: '',
    code: ``,
    tasks: [
      {
        type: "children || attribute",
        el: "", defaults to wrapper
        test: { item: "div", value: 1 },
        instructions: "Create a &lt;div&gt;&lt;/div&gt; inside wrapper",
        hint: "Add &lt;div&gt;&lt;/div&gt;",
      }
    ]
  }
 */
