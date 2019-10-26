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

const boxes = {
  desc: "HTML is made up of boxes. Let's add some styles to various boxes",
  example: `.boxes {
  background: #cce3fc;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.box1 {
  width: 100px;
  height: 100px;
  background: #ffffff;
  text-align: center;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".boxes",
      test: { item: "background", value: "#cce3fc" },
      instructions: "Give '.boxes' a 'background' of #cce3fc",
      hint: "background: #cce3fc;",
    },
    {
      type: "externalStyles",
      el: ".boxes",
      test: { item: "padding", value: "20px" },
      instructions: "Give '.boxes' a 'padding' of 20px",
      hint: "padding: 20px;",
    },
    {
      type: "externalStyles",
      el: ".boxes",
      test: { item: "display", value: "flex" },
      instructions: "Give '.boxes' a 'display' of flex",
      hint: "display: flex;",
    },
    {
      type: "externalStyles",
      el: ".boxes",
      test: { item: "justifyContent", value: "space-between" },
      instructions: "Give '.boxes' a 'justify-content' of space-between",
      hint: "justify-content: space-between;",
    },
    {
      type: "externalStyles",
      el: ".box1",
      test: { item: "width", value: "100px" },
      instructions: "Give '.box1' a 'width' of 100px",
      hint: "width: 100px;",
    },
    {
      type: "externalStyles",
      el: ".box1",
      test: { item: "height", value: "100px" },
      instructions: "Give '.box1' a 'height' of 100px",
      hint: "height: 100px;",
    },
    {
      type: "externalStyles",
      el: ".box1",
      test: { item: "background", value: "#ffffff" },
      instructions: "Give '.box1' a 'background' of #ffffff",
      hint: "background: #ffffff;",
    },
    {
      type: "externalStyles",
      el: ".box1",
      test: { item: "textAlign", value: "center" },
      instructions: "Give '.box1' a 'text-align' of center",
      hint: "text-align: center;",
    },
  ],
};

const boxes2 = {
  desc: "HTML is made up of boxes. Let's add some styles to various boxes",
  example: `.box2 {
  width: 150px;
  height: 150px;
  padding: 10px;
  background: #13987d;
  border-radius: 10px;
}

.box3 {
  width: 75px;
  height: 75px;
  padding: 15px;
  border-radius: 50px;
  background: #ae2c6b;
  color: #fa85bc;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".box2",
      test: { item: "width", value: "150px" },
      instructions: "Give '.box2' a 'width' of 150px",
      hint: "width: 150px;",
    },
    {
      type: "externalStyles",
      el: ".box2",
      test: { item: "height", value: "150px" },
      instructions: "Give '.box2' a 'height' of 150px",
      hint: "height: 150px;",
    },
    {
      type: "externalStyles",
      el: ".box2",
      test: { item: "padding", value: "10px" },
      instructions: "Give '.box2' a 'padding' of 10px",
      hint: "padding: 10px;",
    },
    {
      type: "externalStyles",
      el: ".box2",
      test: { item: "background", value: "#13987d" },
      instructions: "Give '.box2' a 'background' of #13987d",
      hint: "background: #13987d;",
    },

    {
      type: "externalStyles",
      el: ".box3",
      test: { item: "width", value: "75px" },
      instructions: "Give '.box3' a 'width' of 75px",
      hint: "width: 75px;",
    },
    {
      type: "externalStyles",
      el: ".box3",
      test: { item: "height", value: "75px" },
      instructions: "Give '.box3' a 'height' of 75px",
      hint: "height: 75px;",
    },
    {
      type: "externalStyles",
      el: ".box3",
      test: { item: "padding", value: "15px" },
      instructions: "Give '.box3' a 'padding' of 15px",
      hint: "padding: 15px;",
    },
    {
      type: "externalStyles",
      el: ".box3",
      test: { item: "borderRadius", value: "50px" },
      instructions: "Give '.box3' a 'border-radius' of 15px",
      hint: "border-radius: 15px;",
    },
    {
      type: "externalStyles",
      el: ".box3",
      test: { item: "background", value: "#ae2c6b" },
      instructions: "Give '.box3' a 'background' of #ae2c6b",
      hint: "background: #ae2c6b;",
    },
    {
      type: "externalStyles",
      el: ".box3",
      test: { item: "color", value: "#fa85bc" },
      instructions: "Give '.box3' a 'color' of #fa85bc",
      hint: "color: #fa85bc;",
    },
  ],
};

const buttons = {
  desc: "We navigate around pages by clicking buttons. Let's style some buttons.",
  example: `.buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #d0e3f8;
  padding: 50px;
}

.button1 {
  color: #1430cb;
  font-size: 20px;
}
.button1:hover {
  color: #b62020;
  text-decoration: none;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".buttons",
      test: { item: "display", value: "flex" },
      instructions: "Give '.buttons' a 'display' of flex",
      hint: "display: flex;",
    },
    {
      type: "externalStyles",
      el: ".buttons",
      test: { item: "justifyContent", value: "space-around" },
      instructions: "Give '.buttons' a 'justify-content' of space-around",
      hint: "justify-content: space-around;",
    },
    {
      type: "externalStyles",
      el: ".buttons",
      test: { item: "alignItems", value: "center" },
      instructions: "Give '.buttons' a 'align-items' of center",
      hint: "align-items: center;",
    },
    {
      type: "externalStyles",
      el: ".buttons",
      test: { item: "background", value: "#d0e3f8" },
      instructions: "Give '.buttons' a 'background' of #d0e3f8",
      hint: "background: #d0e3f8;",
    },
    {
      type: "externalStyles",
      el: ".buttons",
      test: { item: "padding", value: "50px" },
      instructions: "Give '.buttons' a 'padding' of 50px",
      hint: "padding: 50px;",
    },
    {
      type: "externalStyles",
      el: ".button1",
      test: { item: "color", value: "#1430cb" },
      instructions: "Give '.button1' a 'color' of #1430cb",
      hint: "color: #1430cb;",
    },
    {
      type: "externalStyles",
      el: ".button1",
      test: { item: "fontSize", value: "20px" },
      instructions: "Give '.button1' a 'font-size' of 20px",
      hint: "font-size: 20px;",
    },
    {
      type: "externalStyles",
      el: ".button1:hover",
      test: { item: "color", value: "#b62020" },
      instructions: "Give '.button1' hover a 'color' of #b62020",
      hint: "color: #b62020;",
    },
    {
      type: "externalStyles",
      el: ".button1:hover",
      test: { item: "textDecoration", value: "none" },
      instructions: "Give '.button1' hover a 'text-decoration' of none",
      hint: "text-decoration: none;",
    },
  ],
};

const buttons2 = {
  desc: "We navigate around pages by clicking buttons. Let's style some buttons.",
  example: `.button2 {
  background: #82263a;
  color: #ff97af;
  cursor: zoom-in;
  padding: 18px;
  border-radius: 70px;
  text-decoration: none;
}
.button2:hover {
  color: #ffbfce;
  background: #501723;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".button2",
      test: { item: "background", value: "#82263a" },
      instructions: "Give '.button2' a 'background' of #82263a",
      hint: "background: #82263a;",
    },
    {
      type: "externalStyles",
      el: ".button2",
      test: { item: "color", value: "#ff97af" },
      instructions: "Give '.button2' a 'color' of #ff97af",
      hint: "color: #ff97af;",
    },
    {
      type: "externalStyles",
      el: ".button2",
      test: { item: "cursor", value: "zoom-in" },
      instructions: "Give '.button2' a 'cursor' of zoom-in",
      hint: "cursor: zoom-in;",
    },
    {
      type: "externalStyles",
      el: ".button2",
      test: { item: "padding", value: "18px" },
      instructions: "Give '.button2' a 'padding' of 18px",
      hint: "padding: 18px;",
    },
    {
      type: "externalStyles",
      el: ".button2",
      test: { item: "borderRadius", value: "70px" },
      instructions: "Give '.button2' a 'border-radius' of 70px",
      hint: "border-radius: 70px;",
    },
    {
      type: "externalStyles",
      el: ".button2",
      test: { item: "textDecoration", value: "none" },
      instructions: "Give '.button2' a 'text-decoration' of none",
      hint: "text-decoration: none;",
    },
    {
      type: "externalStyles",
      el: ".button2:hover",
      test: { item: "color", value: "#ffbfce" },
      instructions: "Give '.button2' a 'color' of #ffbfce",
      hint: "color: #ffbfce;",
    },
    {
      type: "externalStyles",
      el: ".button2:hover",
      test: { item: "background", value: "#501723" },
      instructions: "Give '.button2' a 'background' of #501723",
      hint: "background: #501723;",
    },
  ],
};

const text = {
  desc: "There is a lot more text to be styles. ",
  example: `.texts {
  background: #d0e3f8;
  padding: 30px;
}

.text1 {
  letter-spacing: 5px;
  text-transform: uppercase;
  font-family: Verdana;
  font-weight: 900;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".texts",
      test: { item: "background", value: "#d0e3f8" },
      instructions: "Give '.texts' a 'background' of #d0e3f8",
      hint: "background: #d0e3f8;",
    },
    {
      type: "externalStyles",
      el: ".texts",
      test: { item: "padding", value: "30px" },
      instructions: "Give '.texts' a 'padding' of 30px",
      hint: "padding: 30px;",
    },
    {
      type: "externalStyles",
      el: ".text1",
      test: { item: "letterSpacing", value: "5px" },
      instructions: "Give '.text1' a 'letter-spacing' of 5px",
      hint: "letter-spacing: 5px;",
    },
    {
      type: "externalStyles",
      el: ".text1",
      test: { item: "textTransform", value: "uppercase" },
      instructions: "Give '.text1' a 'text-transform' of uppercase",
      hint: "text-transform: uppercase;",
    },
    {
      type: "externalStyles",
      el: ".text1",
      test: { item: "fontFamily", value: "Verdana" },
      instructions: "Give '.text1' a 'font-family' of Verdana",
      hint: "font-family: Verdana;",
    },
    {
      type: "externalStyles",
      el: ".text1",
      test: { item: "fontWeight", value: "900" },
      instructions: "Give '.text1' a 'font-weight' of 900",
      hint: "font-weight: 900;",
    },
  ],
};

const steps = [heading, boxes, boxes2, buttons, buttons2, text];
// Pass the rules into this function and let the magic happen
window.load = Checker.loadTests(steps);
