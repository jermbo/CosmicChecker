console.clear();
const wrapper = document.querySelector(".wrapper");
const rootElem = wrapper.children[0];
let lessonOutline = [];
let finalLesson = [];

/**
 * if element has children
 *  -- create new array index and add its children
 *
 * if element does not have children, and its not a part of an index,
 *   -- make new index and go to the next one.
 */

// function createSteps(elem, arr = [], isRoot = true) {
//   if (isRoot) {
//     const children = [...elem.children].map(c => [c]);
//     arr.push(...children);
//     console.log(arr);
//     createSteps(elem, arr, false);
//     return;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     //   if (arr[i].children > 0) {
//     //     console.log(arr[i].className + " has children");
//     //   }
//   }

//   return arr;
// }

function createSteps(parent) {
  console.log(parent);
  let list = [];
  let node = parent.firstElementChild;
  while (node) {
    if (node.nodeType == 1) {
      list.push(createSteps(node));
    }
    node = node.nextSibling;
  }

  if (list.length == 0) {
    list = parent;
  }

  return list;
}

finalLesson = createSteps(rootElem);
console.log(finalLesson);

// console.dir(rootElem.children);

// lessonOutline.push([rootElem]);

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
