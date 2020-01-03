console.clear();
const wrapper = document.querySelector(".wrapper");
let domOutline = [];
let finalLesson = [];

function createDOMOutline(parent) {
  let list = [parent];
  let node = parent.firstElementChild;
  while (node) {
    if (node.nodeType == 1) {
      list.push(createDOMOutline(node));
    }
    node = node.nextSibling;
  }

  if (list.length == 0) {
    list = parent;
  }
  return list;
}

domOutline = createDOMOutline(wrapper);

finalLesson = createLessonSteps(domOutline);
console.log(finalLesson);

function createLessonSteps(outline) {
  const domArr = outline.filter((o, i) => i > 0).flatMap(x => x);
  const output = [];

  for (let i = 0; i < domArr.length; i++) {
    if (Array.isArray(domArr[i])) {
      output.push(domArr[i].flat(Infinity));
    } else {
      output.push([domArr[i]]);
    }
  }

  return output;
}

// for (let i = 0; i < rootElem.children.length; i++) {
//   // console.dir(rootElem.children[i].tagName);
//   lessonOutline.push([rootElem.children[i]]);

//   if (rootElem.children[i].children.length) {
//     for (let j = 0; j < rootElem.children.length - 1; j++) {
//       lessonOutline[i].push(rootElem.children[i].children[j]);
//     }
//   }
// }

// // console.log(lessonOutline);

// for (let i = 0; i < lessonOutline.length; i++) {
//   const lesson = lessonOutline[i];
//   finalLesson.push([]);
//   for (let j = 0; j < lesson.length; j++) {
//     // console.log(`${i}`, lesson[j]);
//     finalLesson[i].push(`Create a "${lesson[j].localName}" inside of "${getParentElem(lesson[j])}".`);
//     finalLesson[i].push(`Give that new "${lesson[j].localName}" a class name of "${lesson[j].className}".`);
//   }
// }

// function getParentElem(elem) {
//   return `${elem.parentElement.localName}.${elem.parentElement.className}`;
// }

// console.log("Final Lesson ----------");
// console.log(finalLesson);

// const CreateLessons = function(parent = ".wrapper") {
//   const wrapper = document.querySelector(parent);
//   const rootElem = wrapper.children[0];

//   let lessonOutline = [];
//   let finalLessons = [];

//   function init() {
//     console.log("asd");
//   }

//   function getLessons() {
//     return finalLessons;
//   }

//   init();

//   return {
//     getLessons,
//   };
// };

// const robot = CreateLessons();
// console.log(robot.getLessons());
