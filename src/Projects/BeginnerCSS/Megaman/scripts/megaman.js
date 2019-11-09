const heading = {
  desc: "One of first things to style are fonts. Let's learn about some ways we can make fonts look really good.",
  example: `h1 {
  color: #1c77c3;
  background: #7fc6ff;
  font-family: Helvetica;
  text-align: center;
  margin: 0px;
  padding: 20px;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: "h1",
      test: { item: "color", value: "#1c77c3" },
      instructions: "Give h1 'color' of #1c77c3",
      hint: "color: #1c77c3;",
    },
    {
      type: "externalStyles",
      el: "h1",
      test: { item: "fontFamily", value: "Helvetica" },
      instructions: "Change default 'font-family' to Helvetica",
      hint: "font-family: Helvetica;",
    },
    {
      type: "externalStyles",
      el: "h1",
      test: { item: "textAlign", value: "center" },
      instructions: "Center text with 'text-align'",
      hint: "text-align: center;",
    },
    {
      type: "externalStyles",
      el: "h1",
      test: { item: "margin", value: "0px" },
      instructions: "Remove extra margin. Set 'margin' to 0px",
      hint: "margin: 0px;",
    },
    {
      type: "externalStyles",
      el: "h1",
      test: { item: "padding", value: "20px" },
      instructions: "Set 'padding' to 20px",
      hint: "padding: 20px;",
    },
    {
      type: "externalStyles",
      el: "h1",
      test: { item: "background", value: "#7fc6ff" },
      instructions: "Set 'background' to #7fc6ff;",
      hint: "background: #7fc6ff;",
    },
  ],
};

const steps = [heading];
// Pass the rules into this function and let the magic happen
window.load = Checker.loadTests(steps);
