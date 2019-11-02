const body = {
  desc:
    "It's important to set a proper container around your content. This gives you control to move entire chucks of you website exactly where you want it to go. In this case, we want to give it a specific width and center it to the screen.",
  example: `.container {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  color: #e5e5e5;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".container",
      test: { item: "maxWidth", value: "500px" },
      instructions: "Give the .container a 'max-width' of 500px",
      hint: "max-width: 500px;",
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
      test: { item: "color", value: "#e5e5e5" },
      instructions: "Give the .container a 'color' of #e5e5e5",
      hint: "color: #e5e5e5;",
    },
  ],
};

const content = {
  desc: "Now we need to make sure our content is readable.",
  example: `.title {
  margin: 0;
  padding-right: 2vw;
  display: inline;
}
.description {
  font-size: 18px;
  line-height: 1.75rem;
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
      test: { item: "paddingRight", value: "2vw" },
      instructions: "Give .title a 'padding-right' of 2vw",
      hint: "padding-right: 2vw;",
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
      test: { item: "fontSize", value: "18px" },
      instructions: "Give .description a 'font-size' of 18px",
      hint: "font-size: 18px;",
    },
    {
      type: "externalStyles",
      el: ".description",
      test: { item: "lineHeight", value: "1.75rem" },
      instructions: "Give .description a 'line-height' of 1.75rem",
      hint: "line-height: 1.75rem;",
    },
  ],
};

const button = {
  desc: "We can change what the default link looks like to anything we want!",
  example: `.button {
  background: #e9cd29;
  color: #a36d1a;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  padding-left: 30px;
  text-decoration: none;
}
button:hover {
  background: #a36d1a;
  color: #e9cd29;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".button",
      test: { item: "background", value: "#e9cd29" },
      instructions: "Give .button a 'background' of #e9cd29",
      hint: "background: #e9cd29;",
    },
    {
      type: "externalStyles",
      el: ".button",
      test: { item: "color", value: "#a36d1a" },
      instructions: "Give .button a 'color' of #a36d1a",
      hint: "color: #a36d1a;",
    },
    {
      type: "externalStyles",
      el: ".button",
      test: { item: "paddingTop", value: "10px" },
      instructions: "Give .button a 'padding-top' of 10px",
      hint: "padding-top: 10px;",
    },
    {
      type: "externalStyles",
      el: ".button",
      test: { item: "paddingBottom", value: "10px" },
      instructions: "Give .button a 'padding-bottom' of 10px",
      hint: "padding-bottom: 10px;",
    },
    {
      type: "externalStyles",
      el: ".button",
      test: { item: "paddingRight", value: "30px" },
      instructions: "Give .button a 'padding-right' of 30px",
      hint: "padding-right: 30px;",
    },
    {
      type: "externalStyles",
      el: ".button",
      test: { item: "paddingLeft", value: "30px" },
      instructions: "Give .button a 'padding-left' of 30px",
      hint: "padding-left: 30px;",
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
      test: { item: "background", value: "#a36d1a" },
      instructions: "Give .button:hover a 'background' of #a36d1a",
      hint: "background: #a36d1a;",
    },
    {
      type: "externalStyles",
      el: ".button:hover",
      test: { item: "color", value: "#e9cd29" },
      instructions: "Give .button:hover a 'color' of #e9cd29",
      hint: "color: #e9cd29;",
    },
  ],
};

const gallery = {
  desc: "Let's clean make the gallery look good",
  example: `.gallery-wrapper {
  margin-bottom: 10vh;
}
.gallery-title {
  margin: 0;
  padding-right: 10%;
  display: inline;
}
.gallery {
  display: flex;
  flex-wrap: wrap;
}
.gallery img {
  flex: 1;
  object-fit: contain;
  width: 100%;
  margin-top: 20px;
}`,
  tasks: [
    {
      type: "externalStyles",
      el: ".gallery-wrapper",
      test: { item: "marginBottom", value: "10vh" },
      instructions: "Give .gallery-wrapper a 'margin-bottom' of 10vh",
      hint: "margin-bottom: 10vh;",
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
      test: { item: "paddingRight", value: "10%" },
      instructions: "Give .gallery-title a 'padding-right' of 10%",
      hint: "padding-right: 10%;",
    },
    {
      type: "externalStyles",
      el: ".gallery-title",
      test: { item: "display", value: "inline" },
      instructions: "Give .gallery-title a 'display' of inline",
      hint: "display: inline;",
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
      el: ".gallery",
      test: { item: "flexWrap", value: "wrap" },
      instructions: "Give .gallery a 'flex-wrap' of wrap",
      hint: "flex-wrap: wrap;",
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
      test: { item: "width", value: "100%" },
      instructions: "Give .gallery img a 'width' of 100%",
      hint: "width: 100%;",
    },
    {
      type: "externalStyles",
      el: ".gallery img",
      test: { item: "marginTop", value: "20px" },
      instructions: "Give .gallery img a 'margin-top' of 20px",
      hint: "margin-top: 20px;",
    },
  ],
};

const steps = [body, content, button, gallery];
// Pass the rules into this function and let the magic happen
window.load = Checker.loadTests(steps);
