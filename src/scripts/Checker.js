const Checker = (function() {
  const version = "0.9.1";
  const body = document.querySelector("body");
  const wrapper = document.querySelector(".wrapper");
  const styles = document.styleSheets;
  const interfaceStyles = document.createElement('style');
  let currentIndex, allTasks, statusBox, instructionsBox, prev, next;

  init();

  function getVersion() {
    return version;
  }

  function init() {
    setUIStyles();
    currentIndex = 0;
    createInstructions();
  }

  function setUIStyles() {
    document.body.appendChild(interfaceStyles);
    interfaceStyles.innerHTML += `*{ box-sizing: border-box; }
      .completed{ color: #004225; text-decoration: line-through; }
      .completed:after{ content: '\\2713'; display: inline-block; margin-left: 5px; }
      .instructionsBox p, .instructionsBox ul{ margin: 0; color: #0d0d0d; }
      .instructionsBox li{ cursor: help; margin-bottom: 5px; }`;
    interfaceStyles.innerHTML += `.instructionsBox {
        background: #e5e5e5;
        font-family: Arial;
        box-shadow: inset 5px 0 10px rgba(0,0,0,0.5);
        padding: 1vw;
        opacity: 0.75;
        position: fixed;
        bottom: 0;
        left: 0;
        top: 0;
        width: 35vw;
        min-width: 250px;
        overflow-x: auto;
      }`;
    interfaceStyles.innerHTML += `.wrapper {
        position: absolute;
        left: 35vw;
        width: 65vw;
      }`;
    console.log(interfaceStyles);
  }

  function checkUserProgress() {
    const previousCompleted = allTasks[currentIndex].tasks.every(
      task => task.completed
    );
    console.log(
      `currentIndex ${currentIndex} ::: previousCompleted ${previousCompleted}`
    );
    if (previousCompleted) {
      currentIndex++;

      if (currentIndex >= allTasks.length) {
        console.log("ALL DONE");
        return;
      }

      runTests();
    }
  }

  function loadTests(tasks) {
    console.log(tasks);
    if (!tasks || tasks.length < 1) {
      console.error("Please load tasks to complete");
      return;
    }
    allTasks = tasks;
    runTests();
  }

  function runTests() {
    allTasks[currentIndex].tasks.forEach(task => {
      task.completed = false;
      switch (task.type) {
        case "attribute":
          testAttribute(task);
          break;
        case "children":
          testChildren(task);
          break;
        case "element":
          testElement(task);
          break;
        case "externalStyles":
          testExternalStyles(task);
          break;
        case "inlineStyles":
          testInlineStyles(task);
          break;
      }
    });
    updateInstructions();
    checkUserProgress();
  }

  function testAttribute(obj) {
    const element = wrapper.querySelector(obj.el);
    if (!element) return;

    const attr = obj.test.item;
    const reg = new RegExp(obj.test.value, 'gi');

    if (element[attr].match(reg)) {
      console.log(`Added correct ${attr} to ${obj.el}`);
      obj.completed = true;
      return;
    }

    // Check for any text as the innerText
    if (obj.test.value == "anything" && element[attr] != "") {
      console.log(`Added a message of "${element[attr]}" to ${obj.el}`);
      obj.completed = true;
      return;
    }
  }

  function testChildren(obj) {
    const element = obj.el != "" ? wrapper.querySelector(obj.el) : wrapper;
    if (!element) return;

    const children = [...element.children];
    let total = 0;
    for (let i = 0; i < children.length; i++) {
      if (
        children[i].localName != undefined &&
        children[i].localName == obj.test.item
      ) {
        total++;
        if (total >= obj.test.value) {
          break;
        }
      }
    }

    if (total == obj.test.value) {
      console.log(`Added correct number of ${obj.test.item}'s to ${obj.el}`);
      obj.completed = true;
    }
  }

  function testElement(obj) {
    const element = wrapper.querySelector(obj.el);
    if (!element) return;

    console.log(`Added a ${obj.test.item} tag to the page`);
    obj.completed = true;
  }

  function testExternalStyles(obj) {
    const attr = obj.test.item;
    if (!element) return;

    const mainStyle = styles[0];
    const check = mainStyle.cssRules[0].style[attr];
    const element = wrapper.querySelector(obj.el);

    for (const item of mainStyle.cssRules) {
      if (item.selectorText == obj.el) {
        if (attr == "color" || attr == "background") {
          if (getHEX(check) == obj.test.value.toLowerCase()) {
            console.log(`Added correct ${attr} to ${obj.el}`);
            obj.completed = true;
          }
          return;
        }
        if (check == obj.test.value) {
          obj.completed = true;
        }
        return;
      }
    }
  }

  function testInlineStyles(obj) {
    const element = wrapper.querySelector(obj.el);
    if (!element) return;
    const attr = obj.test.item;
    const reg = new RegExp(obj.test.value, 'gi');

    if (attr == "color" || attr == "background") {
      if (getHEX(element.style[attr]) == obj.test.value.toLowerCase()) {
        console.log(`Added correct ${attr} to ${obj.el}`);
        obj.completed = true;
      }
      return;
    }
    console.log(element.style[attr])
    if (element.style[attr] == obj.test.value) {
      console.log(`Added correct ${attr} to ${obj.el}`);
      obj.completed = true;
    }
  }

  function createInstructions() {
    instructionsBox = document.createElement("div");
    instructionsBox.classList.add("instructionsBox");
    body.append(instructionsBox);
  }

  function updateInstructions() {
    instructionsBox.innerHTML = `
        <p><strong>Step ${parseInt(currentIndex) + 1} of ${allTasks.length}</strong></p>
        <p>${allTasks[currentIndex].desc}</p>
        <pre>${allTasks[currentIndex].example}</pre>
        <div class="actions">
            <a href="#" class="action -prev">Prev</a>
            <a href="#" class="action -next">Next</a>
        </div>
        <ol>
            ${allTasks[currentIndex].tasks
              .map(
                task =>
                  `<li title="${task.hint}" class="${
                    task.completed ? "completed" : "todo"
                  }">${task.instructions}.</li>`
              )
              .join("")}
        </ol>`;
    addEventListeners();
  }

  function addEventListeners() {
    prev = document.querySelector(".action.-prev");
    next = document.querySelector(".action.-next");

    prev.addEventListener("click", prevTasks);
    next.addEventListener("click", nextTasks);
  }

  function prevTasks(e) {
    e.preventDefault();
    if (currentIndex <= 0) {
      currentIndex = 0;
    } else {
      currentIndex--;
    }
    // currentIndex = (currentIndex <= 0) ? 0 : currentIndex--;
    console.log(currentIndex);
    removeEventListeners();
    updateInstructions();
  }

  function nextTasks(e) {
    e.preventDefault();
    if (currentIndex >= allTasks.length - 1) {
      currentIndex = allTasks.length - 1;
    } else {
      currentIndex++;
    }
    // currentIndex = (currentIndex > allTasks.length - 1) ? allTasks.length - 1 : currentIndex++;
    console.log(currentIndex);
    removeEventListeners();
    updateInstructions();
  }

  function removeEventListeners() {
    prev.removeEventListener("click", prevTasks);
    next.removeEventListener("click", nextTasks);
  }

  function getHEX(color) {
    var rgb = color.match(/\d+/g);
    var r = parseInt(rgb[0], 10);
    var g = parseInt(rgb[1], 10);
    var b = parseInt(rgb[2], 10);
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`.toLowerCase();
  }

  return {
    loadTests,
    getVersion
  };
})();
