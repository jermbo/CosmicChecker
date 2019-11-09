const rows = {
  desc: "We need to set up our characters rows",
  example: `.characters {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.row {
  position: relative;
  display: flex;
  justify-content: space-between;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".characters",
      test: { item: "height", value: "90%" },
      instructions: "Give .characters 'height' of 90%",
      hint: "height: 90%",
    },
    {
      type: "externalStyles",
      el: ".characters",
      test: { item: "display", value: "flex" },
      instructions: "Give .characters 'display' of flex",
      hint: "display: flex",
    },
    {
      type: "externalStyles",
      el: ".characters",
      test: { item: "flexDirection", value: "column" },
      instructions: "Give .characters 'flex-direction' of column",
      hint: "flex-direction: column",
    },
    {
      type: "externalStyles",
      el: ".characters",
      test: { item: "justifyContent", value: "space-around" },
      instructions: "Give .characters 'justify-content' of space-around",
      hint: "justify-content: space-around",
    },
    {
      type: "externalStyles",
      el: ".row",
      test: { item: "position", value: "relative" },
      instructions: "Give .row 'position' of relative",
      hint: "position: relative",
    },
    {
      type: "externalStyles",
      el: ".row",
      test: { item: "display", value: "flex" },
      instructions: "Give .row 'display' of flex",
      hint: "display: flex",
    },
    {
      type: "externalStyles",
      el: ".row",
      test: { item: "justifyContent", value: "space-between" },
      instructions: "Give .row 'justify-content' of space-between",
      hint: "justify-content: space-between",
    },
  ],
};

const characters = {
  desc: "Each character have things in common that we need to address with a single css class.",
  example: `.character {
  background-repeat: no-repeat;
  width: 224px;
  height: 145px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.character-title {
  text-align: center;
  position: relative;
  bottom: -50px;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".character",
      test: { item: "backgroundRepeat", value: "no-repeat" },
      instructions: "Give .character 'background-repeat' of no-repeat",
      hint: "background-repeat: no-repeat",
    },
    {
      type: "externalStyles",
      el: ".character",
      test: { item: "width", value: "224px" },
      instructions: "Give .character 'width' of 224px",
      hint: "width: 224px",
    },
    {
      type: "externalStyles",
      el: ".character",
      test: { item: "height", value: "145px" },
      instructions: "Give .character 'height' of 145px",
      hint: "height: 145px",
    },
    {
      type: "externalStyles",
      el: ".character",
      test: { item: "display", value: "flex" },
      instructions: "Give .character 'display' of flex",
      hint: "display: flex",
    },
    {
      type: "externalStyles",
      el: ".character",
      test: { item: "flexDirection", value: "column" },
      instructions: "Give .character 'flex-direction' of column",
      hint: "flex-direction: column",
    },
    {
      type: "externalStyles",
      el: ".character",
      test: { item: "justifyContent", value: "flex-end" },
      instructions: "Give .character 'justify-content' of flex-end",
      hint: "justify-content: flex-end",
    },
    {
      type: "externalStyles",
      el: ".character-title",
      test: { item: "textAlign", value: "center" },
      instructions: "Give .character-title 'text-align' of center",
      hint: "text-align: center",
    },
    {
      type: "externalStyles",
      el: ".character-title",
      test: { item: "position", value: "relative" },
      instructions: "Give .character-title 'position' of relative",
      hint: "position: relative",
    },
    {
      type: "externalStyles",
      el: ".character-title",
      test: { item: "bottom", value: "-50px" },
      instructions: "Give .character-title 'bottom' of -50px",
      hint: "bottom: -50px",
    },
  ],
};

const row1 = {
  desc: "Let's add the images for each character for row 1",
  example: `.bubbleman {
  background-image: url(../images/bubbleman.jpg);
}
.airman {
  background-image: url(../images/airman.jpg);
}
.quickman {
  background-image: url(../images/quickman.jpg);
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".bubbleman",
      test: { item: "backgroundImage", value: "url(\"../images/bubbleman.jpg\")" },
      instructions: "Give h1 'background-image' of url(\"../images/bubbleman.jpg\")",
      hint: "background-image: url(\"../images/bubbleman.jpg\")",
    },
    {
      type: "externalStyles",
      el: ".airman",
      test: { item: "backgroundImage", value: "url(\"../images/airman.jpg\")" },
      instructions: "Give h1 'background-image' of url(\"../images/airman.jpg\")",
      hint: "background-image: url(\"../images/airman.jpg\")",
    },
    {
      type: "externalStyles",
      el: ".quickman",
      test: { item: "backgroundImage", value: "url(\"../images/quickman.jpg\")" },
      instructions: "Give h1 'background-image' of url(\"../images/quickman.jpg\")",
      hint: "background-image: url(\"../images/quickman.jpg\")",
    },
  ],
};

const row2 = {
  desc: "Let's add the images for each character for row 2",
  example: `.heatman {
  background-image: url(../images/heatman.jpg);
}
.drwily {
  background-image: url(../images/drwily.jpg);
}
.woodman {
  background-image: url(../images/woodman.jpg);
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".heatman",
      test: { item: "backgroundImage", value: "url(\"../images/heatman.jpg\")" },
      instructions: "Give .heatman 'background-image' of url(\"../images/heatman.jpg\")",
      hint: "background-image: url(\"../images/heatman.jpg\")",
    },
    {
      type: "externalStyles",
      el: ".drwily",
      test: { item: "backgroundImage", value: "url(\"../images/drwily.jpg\")" },
      instructions: "Give .drwily 'background-image' of url(\"../images/drwily.jpg\")",
      hint: "background-image: url(\"../images/drwily.jpg\")",
    },
    {
      type: "externalStyles",
      el: ".woodman",
      test: { item: "backgroundImage", value: "url(\"../images/woodman.jpg\")" },
      instructions: "Give .woodman 'background-image' of url(\"../images/woodman.jpg\")",
      hint: "background-image: url(\"../images/woodman.jpg\")",
    },
  ],
};

const row3 = {
  desc: "Let's add the images for each character for row 3",
  example: `.metalman {
  background-image: url(../images/metalman.jpg);
}
.flashman {
  background-image: url(../images/flashman.jpg);
}
.crashman {
  background-image: url(../images/crashman.jpg);
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".metalman",
      test: { item: "backgroundImage", value: "url(\"../images/metalman.jpg\")" },
      instructions: "Give .metalman 'background-image' of url(\"../images/metalman.jpg\")",
      hint: "background-image: url(\"../images/metalman.jpg\")",
    },
    {
      type: "externalStyles",
      el: ".flashman",
      test: { item: "backgroundImage", value: "url(\"../images/flashman.jpg\")" },
      instructions: "Give .flashman 'background-image' of url(\"../images/flashman.jpg\")",
      hint: "background-image: url(\"../images/flashman.jpg\")",
    },
    {
      type: "externalStyles",
      el: ".crashman",
      test: { item: "backgroundImage", value: "url(\"../images/crashman.jpg\")" },
      instructions: "Give .crashman 'background-image' of url(\"../images/crashman.jpg\")",
      hint: "background-image: url(\"../images/crashman.jpg\")",
    },
  ],
};

const selectedArea = {
  desc: "Let's add the images for each character for row 3",
  example: `.selected-area {
  text-align: center;
  position: relative;
  color: #000;
  padding: 20px;
  margin-top: 10px;
}
.selected-area p {
  margin: 0;
}
.selected-display {
  margin: 0;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".selected-area",
      test: { item: "textAlign", value: "center" },
      instructions: "Give .selected-area 'text-align' of center",
      hint: "text-align: center",
    },
    {
      type: "externalStyles",
      el: ".selected-area",
      test: { item: "position", value: "relative" },
      instructions: "Give .selected-area 'position' of relative",
      hint: "position: relative",
    },
    {
      type: "externalStyles",
      el: ".selected-area",
      test: { item: "color", value: "#000000" },
      instructions: "Give .selected-area 'color' of #000000",
      hint: "color: #000000",
    },
    {
      type: "externalStyles",
      el: ".selected-area",
      test: { item: "padding", value: "20px" },
      instructions: "Give .selected-area 'padding' of 20px",
      hint: "padding: 20px",
    },
    {
      type: "externalStyles",
      el: ".selected-area",
      test: { item: "marginTop", value: "10px" },
      instructions: "Give .selected-area 'margin-top' of 10px",
      hint: "margin-top: 10px",
    },
    {
      type: "externalStyles",
      el: ".selected-area p",
      test: { item: "margin", value: "0px" },
      instructions: "Give .selected-area 'margin' of 0px",
      hint: "margin: 0px",
    },
    {
      type: "externalStyles",
      el: ".selected-display",
      test: { item: "margin", value: "0px" },
      instructions: "Give .selected-area 'margin' of 0px",
      hint: "margin: 0px",
    },
  ],
};

const steps = [rows, characters, row1, row2, row3, selectedArea];
// Pass the rules into this function and let the magic happen
window.load = Checker.loadTests(steps);
