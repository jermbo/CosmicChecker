const wrapper = {
  desc: "Testing CSS",
  example: "test",
  tasks: [
    {
      type: "externalStyles",
      el: "h1",
      test: { item: "color", value: "#4e9e05" },
      instructions: "do some css",
      hint: "do some css",
    },
    {
      type: "externalStyles",
      el: "h1",
      test: { item: "fontFamily", value: "Helvetica" },
      instructions: "do some font family",
      hint: "do some css",
    },
  ],
};

const steps = [wrapper];
// Pass the rules into this function and let the magic happen in the object
window.load = Checker.loadTests(steps);
