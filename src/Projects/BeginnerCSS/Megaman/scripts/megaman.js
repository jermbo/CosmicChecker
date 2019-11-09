const row1 = {
  desc: "Let's add the images for each character",
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
  desc: "Let's add the images for each character",
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
      instructions: "Give h1 'background-image' of url(\"../images/heatman.jpg\")",
      hint: "background-image: url(\"../images/heatman.jpg\")",
    },
    {
      type: "externalStyles",
      el: ".drwily",
      test: { item: "backgroundImage", value: "url(\"../images/drwily.jpg\")" },
      instructions: "Give h1 'background-image' of url(\"../images/drwily.jpg\")",
      hint: "background-image: url(\"../images/drwily.jpg\")",
    },
    {
      type: "externalStyles",
      el: ".woodman",
      test: { item: "backgroundImage", value: "url(\"../images/woodman.jpg\")" },
      instructions: "Give h1 'background-image' of url(\"../images/woodman.jpg\")",
      hint: "background-image: url(\"../images/woodman.jpg\")",
    },
  ],
};

const row3 = {
  desc: "Let's add the images for each character",
  example: `
.metalman {
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
      instructions: "Give h1 'background-image' of url(\"../images/metalman.jpg\")",
      hint: "background-image: url(\"../images/metalman.jpg\")",
    },
    {
      type: "externalStyles",
      el: ".flashman",
      test: { item: "backgroundImage", value: "url(\"../images/flashman.jpg\")" },
      instructions: "Give h1 'background-image' of url(\"../images/flashman.jpg\")",
      hint: "background-image: url(\"../images/flashman.jpg\")",
    },
    {
      type: "externalStyles",
      el: ".crashman",
      test: { item: "backgroundImage", value: "url(\"../images/crashman.jpg\")" },
      instructions: "Give h1 'background-image' of url(\"../images/crashman.jpg\")",
      hint: "background-image: url(\"../images/crashman.jpg\")",
    },
  ],
};

const steps = [row1, row2, row3];
// Pass the rules into this function and let the magic happen
window.load = Checker.loadTests(steps);
