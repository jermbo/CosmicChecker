console.clear();
const wrapper = document.querySelector(".wrapper");
let domOutline = [];
let finalArr = [];

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
console.log(domOutline);

function buildLesson() {
  for (let i = 0; i < domOutline.length; i++) {
    const currentRow = domOutline[i];
    const len = finalArr.push([]);
    for (let j = 0; j < currentRow.length; j++) {
      const currentColumn = currentRow[j];
      finalArr[len - 1].push(...step(currentColumn));
    }
  }
}

buildLesson();
console.log(finalArr);

function step(item) {
  const arr = [];
  arr.push(`Create "${mockHTML(item)}" inside of ${item.parentNode.className}`);

  if (hasID(item)) {
    // console.log("has id name");
    arr.push(`Give that "${mockHTML(item)}" a id attribute of ${item.id}`);
  }

  if (hasClass(item)) {
    // console.log("has class name");
    arr.push(`Give that "${mockHTML(item)}" a class attribute of ${item.className}`);
  }

  if (textNode(item) && hasText(item)) {
    // console.log("this should hold text");
    arr.push(`Add the text "${item.firstChild.textContent.trim()}" to ${item.localName}`);
  }

  if (linkNode(item)) {
    // console.log("this should hold link");
    arr.push(`Give the link an href "${item.href}"`);
    arr.push(`Add the text "${item.firstChild.textContent.trim()}" to ${item.localName}`);
  }

  return arr;
}

function mockHTML(item) {
  return `<${item.localName.toLowerCase()}></${item.localName.toLowerCase()}>`;
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
