const start = {
  desc: "PUT DESCRIPTION HERE",
  example: "&lt;h1&gt;asdsa&lt;/h1&gt;",
  tasks: [
    {
      type: "element",
      el: "h1",
      test: { item: "h1", value: "exist" },
      instructions: "Create a H1",
      hint: "Add <h1></h1>"
    },
    {
      type: "attribute",
      el: "h1",
      test: { item: "innerText", value: "Naruto!" },
      instructions: "Make the text say 'Naruto!'",
      hint: "Add 'Naruto!' between the h1 tags"
    }
  ]
};


const steps = [start];
// Pass the rules into this function and let the magic happen in the object
window.load = Checker.loadTests(steps);
