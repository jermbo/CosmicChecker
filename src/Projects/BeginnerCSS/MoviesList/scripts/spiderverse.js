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
      test: { item: "color", value: "#ffffff" },
      instructions: "Give the .container a 'color' of #ffffff",
      hint: "color: #ffffff;",
    },
  ],
};

const bgImages = {
  desc: "Let's decorate our page with a couple of images to be placed in different fixed locations",
  example: `.miles {
  position: fixed;
  right: 0;
  width: 250px;
}
.gwen {
  position: fixed;
  left: 2%;
  bottom: 0;
  width: 350px;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".miles",
      test: { item: "position", value: "fixed" },
      instructions: "Give .miles a 'position' of fixed",
      hint: "position: fixed;",
    },
    {
      type: "externalStyles",
      el: ".miles",
      test: { item: "right", value: "0px" },
      instructions: "Give .miles a 'right' of 0px",
      hint: "right: 0px;",
    },
    {
      type: "externalStyles",
      el: ".miles",
      test: { item: "width", value: "250px" },
      instructions: "Give .miles a 'width' of 250px",
      hint: "width: 250px;",
    },
    {
      type: "externalStyles",
      el: ".gwen",
      test: { item: "position", value: "fixed" },
      instructions: "Give .gwen a 'position' of fixed",
      hint: "position: fixed;",
    },
    {
      type: "externalStyles",
      el: ".gwen",
      test: { item: "left", value: "2%" },
      instructions: "Give .gwen a 'left' of 2%",
      hint: "left: 2%;",
    },
    {
      type: "externalStyles",
      el: ".gwen",
      test: { item: "bottom", value: "0px" },
      instructions: "Give .gwen a 'bottom' of 0px",
      hint: "bottom: 0px;",
    },
    {
      type: "externalStyles",
      el: ".gwen",
      test: { item: "width", value: "350px" },
      instructions: "Give .gwen a 'width' of 350px",
      hint: "width: 350px;",
    },
  ],
};

const content = {
  desc: "Now we need to make sure our content is readable.",
  example: `.title {
  margin: 0;
  padding-right: 10px;
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
      test: { item: "paddingRight", value: "10px" },
      instructions: "Give .title a 'padding-right' of 10px",
      hint: "padding-right: 10px;",
    },
    {
      type: "externalStyles",
      el: ".title",
      test: { item: "display", value: "inline-block" },
      instructions: "Give .title a 'display' of inline-block",
      hint: "display: inline-block;",
    },
    {
      type: "externalStyles",
      el: ".description",
      test: { item: "fontSize", value: "20px" },
      instructions: "Give .description a 'font-size' of 20px",
      hint: "font-size: 20px;",
    },
    {
      type: "externalStyles",
      el: ".description",
      test: { item: "lineHeight", value: "30px" },
      instructions: "Give .description a 'line-height' of 30px",
      hint: "line-height: 30px;",
    },
  ],
};

const button = {
  desc: "We can change what the default link looks like to anything we want!",
  example: `.button {
  background: #fa3434;
  color: #850b0b;
  padding: 10px;
  text-decoration: none;
}
button:hover {
  background: #850b0b;
  color: #fa3434;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".button",
      test: { item: "background", value: "#fa3434" },
      instructions: "Give .button a 'background' of #fa3434",
      hint: "background: #fa3434;",
    },
    {
      type: "externalStyles",
      el: ".button",
      test: { item: "color", value: "#851b1b" },
      instructions: "Give .button a 'color' of #851b1b",
      hint: "color: #851b1b;",
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
      test: { item: "background", value: "#851b1b" },
      instructions: "Give .button:hover a 'background' of #851b1b",
      hint: "background: #851b1b;",
    },
    {
      type: "externalStyles",
      el: ".button:hover",
      test: { item: "color", value: "#fa3434" },
      instructions: "Give .button:hover a 'color' of #fa3434",
      hint: "color: #fa3434;",
    },
  ],
};

const gallery = {
  desc: "Let's clean make the gallery look good",
  example: `.gallery-wrapper {
  padding-bottom: 50px;
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
      test: { item: "paddingBottom", value: "50px" },
      instructions: "Give .gallery-wrapper a 'padding-bottom' of 50px",
      hint: "padding-bottom: 50px;",
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
