const body = {
  desc:
    "It's important to set a proper container around your content. This gives you control to move entire chucks of you website exactly where you want it to go. In this case, we want to give it a specific width and center it to the screen.",
  example: `.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  color: #ffffff;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".container",
      test: { item: "maxWidth", value: "1000px" },
      instructions: "Give the .container a 'max-width' of 1000px",
      hint: "max-width: 1000px;",
    },
    {
      type: "externalStyles",
      el: ".container",
      test: { item: "marginLeft", value: "auto" },
      instructions: "Give the .container a 'margin-left' of auto",
      hint: "margin-left: auto;",
    },
    {
      type: "externalStyles",
      el: ".container",
      test: { item: "marginRight", value: "auto" },
      instructions: "Give the .container a 'margin-right' of auto",
      hint: "margin-right: auto;",
    },
    {
      type: "externalStyles",
      el: ".container",
      test: { item: "padding", value: "20px" },
      instructions: "Give the .container a 'padding' of 20px",
      hint: "padding: 20px;",
    },
    {
      type: "externalStyles",
      el: ".container",
      test: { item: "backgroundColor", value: "rgba(0, 0, 0, 0.5)" },
      instructions: "Give the .container a 'background' of rgba(0, 0, 0, 0.5)",
      hint: "background: rgba(0, 0, 0, 0.5);",
    },
  ],
};

const bgImages = {
  desc: "Let's decorate our page with a couple of images to be placed in different fixed locations",
  example: `.ralph {
  position: fixed;
  width: 250px;
  bottom: 0;
  right: 0;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".ralph",
      test: { item: "position", value: "fixed" },
      instructions: "Give .ralph a 'position' of fixed",
      hint: "position: fixed;",
    },
    {
      type: "externalStyles",
      el: ".ralph",
      test: { item: "width", value: "250px" },
      instructions: "Give .ralph a 'width' of 250px",
      hint: "width: 250px;",
    },
    {
      type: "externalStyles",
      el: ".ralph",
      test: { item: "bottom", value: "0px" },
      instructions: "Give .ralph a 'bottom' of 0px",
      hint: "bottom: 0px;",
    },
    {
      type: "externalStyles",
      el: ".ralph",
      test: { item: "right", value: "0px" },
      instructions: "Give .ralph a 'right' of 0px",
      hint: "right: 0px;",
    },
  ],
};

const content = {
  desc: "Now we need to make sure our content is readable.",
  example: `.title {
  margin: 0px;
  padding-right: 5%;
  display: inline-block;
}
.description {
  font-size: 20px;
  line-height: 30px;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".title",
      test: { item: "margin", value: "0px" },
      instructions: "Give .title a 'margin' of 0px",
      hint: "margin: 0px;",
    },
    {
      type: "externalStyles",
      el: ".title",
      test: { item: "paddingRight", value: "5%" },
      instructions: "Give .title a 'padding-right' of 5%",
      hint: "padding-right: 5%;",
    },
    {
      type: "externalStyles",
      el: ".title",
      test: { item: "display", value: "inline" },
      instructions: "Give .title a 'display' of inline",
      hint: "display: inline;",
    },
    {
      type: "externalStyles",
      el: ".description",
      test: { item: "fontSize", value: "22px" },
      instructions: "Give .description a 'font-size' of 22px",
      hint: "font-size: 22px;",
    },
    {
      type: "externalStyles",
      el: ".description",
      test: { item: "lineHeight", value: "2rem" },
      instructions: "Give .description a 'line-height' of 2rem",
      hint: "line-height: 2rem;",
    },
  ],
};

const button = {
  desc: "We can change what the default link looks like to anything we want!",
  example: `.button {
  background: #075c76;
  color: #1bb8e8;
  padding: 10px;
  text-decoration: none;
}
button:hover {
  background: #1bb8e8;
  color: #075c76;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".button",
      test: { item: "background", value: "#075c76" },
      instructions: "Give .button a 'background' of #075c76",
      hint: "background: #075c76;",
    },
    {
      type: "externalStyles",
      el: ".button",
      test: { item: "color", value: "#1bb8e8" },
      instructions: "Give .button a 'color' of #1bb8e8",
      hint: "color: #1bb8e8;",
    },
    {
      type: "externalStyles",
      el: ".button",
      test: { item: "padding", value: "10px" },
      instructions: "Give .button a 'padding' of 10px",
      hint: "padding: 10px;",
    },
    {
      type: "externalStyles",
      el: ".button",
      test: { item: "textDecoration", value: "none" },
      instructions: "Give .button a 'text-decoration' of none",
      hint: "text-decoration: none;",
    },
    {
      type: "externalStyles",
      el: ".button:hover",
      test: { item: "background", value: "#1bb8e8" },
      instructions: "Give .button:hover a 'background' of #1bb8e8",
      hint: "background: #1bb8e8;",
    },
    {
      type: "externalStyles",
      el: ".button:hover",
      test: { item: "color", value: "#075c76" },
      instructions: "Give .button:hover a 'color' of #075c76",
      hint: "color: #075c76;",
    },
  ],
};

const gallery = {
  desc: "Let's clean make the gallery look good",
  example: `.gallery-wrapper {
  margin-bottom: 5vh;
}
.gallery-title {
  margin: 0;
  padding-right: 10px;
  display: inline-block;
}
.gallery {
  display: flex;
}
.gallery img {
  flex: 1;
  object-fit: contain;
  width: 25%;
}
`,
  tasks: [
    {
      type: "externalStyles",
      el: ".gallery-wrapper",
      test: { item: "marginBottom", value: "5vh" },
      instructions: "Give .gallery-wrapper a 'margin-bottom' of 5vh",
      hint: "margin-bottom: 5vh;",
    },
    {
      type: "externalStyles",
      el: ".gallery-title",
      test: { item: "margin", value: "0px" },
      instructions: "Give .gallery-title a 'margin' of 0px",
      hint: "margin: 0px;",
    },
    {
      type: "externalStyles",
      el: ".gallery-title",
      test: { item: "paddingRight", value: "10px" },
      instructions: "Give .gallery-title a 'padding-right' of 10px",
      hint: "padding-right: 10px;",
    },
    {
      type: "externalStyles",
      el: ".gallery-title",
      test: { item: "display", value: "inline-block" },
      instructions: "Give .gallery-title a 'display' of inline-block",
      hint: "display: inline-block;",
    },
    {
      type: "externalStyles",
      el: ".gallery",
      test: { item: "display", value: "flex" },
      instructions: "Give .gallery a 'display' of flex",
      hint: "display: flex;",
    },
    {
      type: "externalStyles",
      el: ".gallery img",
      test: { item: "objectFit", value: "contain" },
      instructions: "Give .gallery img a 'object-fit' of contain",
      hint: "object-fit: contain;",
    },
    {
      type: "externalStyles",
      el: ".gallery img",
      test: { item: "width", value: "25%" },
      instructions: "Give .gallery img a 'width' of 25%",
      hint: "width: 25%;",
    },
  ],
};

const steps = [body, bgImages, content, button, gallery];
// Pass the rules into this function and let the magic happen
window.load = Checker.loadTests(steps);
