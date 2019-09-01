const wrapper = {
  desc: "Nesting is an important part of web development. Let's learn about it by building a bunny.",
  example: `
&lt;div class=&quot;wrapper&quot;&gt;
  &lt;div class=&quot;bunny&quot;&gt;
    &lt;div class=&quot;ears&quot;&gt;
      &lt;div class=&quot;ear-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;ear-right&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;head&quot;&gt;
      &lt;div class=&quot;eyes&quot;&gt;
        &lt;div class=&quot;eye-left&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;eye-right&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;mouth&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;body&quot;&gt;
      &lt;div class=&quot;arms&quot;&gt;
        &lt;div class=&quot;arm-left&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;arm-right&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;feet&quot;&gt;
        &lt;div class=&quot;foot-left&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;foot-right&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: "",
      test: { item: "div", value: 1 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside of wrapper",
      hint: "Add &lt;div&gt;&lt;/div&gt; inside of wrapper",
    },
    {
      type: "attribute",
      el: ".bunny",
      test: { item: "className", value: "bunny" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'bunny'",
      hint: "Add class=&quot;bunny&quot; to the &lt;div&gt;",
    },
  ],
};

const ears = {
  desc: "Now that we have our bunny container, let's start at the top with the ears.",
  example: `
&lt;div class=&quot;wrapper&quot;&gt;
  &lt;div class=&quot;bunny&quot;&gt;
    &lt;div class=&quot;ears&quot;&gt;
      &lt;div class=&quot;ear-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;ear-right&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;head&quot;&gt;
      &lt;div class=&quot;eyes&quot;&gt;
        &lt;div class=&quot;eye-left&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;eye-right&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;mouth&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;body&quot;&gt;
      &lt;div class=&quot;arms&quot;&gt;
        &lt;div class=&quot;arm-left&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;arm-right&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;feet&quot;&gt;
        &lt;div class=&quot;foot-left&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;foot-right&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".bunny",
      test: { item: "div", value: 1 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside of bunny",
      hint: "Add &lt;div&gt;&lt;/div&gt; inside of bunny",
    },
    {
      type: "attribute",
      el: ".ears",
      test: { item: "className", value: "ears" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'ears'",
      hint: "Add class=&quot;ears&quot; to the &lt;div&gt;",
    },
    {
      type: "children",
      el: ".ears",
      test: { item: "div", value: 1 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside of ears",
      hint: "Add &lt;div&gt;&lt;/div&gt; inside of ears",
    },
    {
      type: "attribute",
      el: ".ears > .ear-left",
      test: { item: "className", value: "ear-left" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'ear-left'",
      hint: "Add class=&quot;ear-left&quot; to the &lt;div&gt;",
    },
    {
      type: "children",
      el: ".ears",
      test: { item: "div", value: 2 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside of ears",
      hint: "Add &lt;div&gt;&lt;/div&gt; inside of ears",
    },
    {
      type: "attribute",
      el: ".ears > .ear-right",
      test: { item: "className", value: "ear-right" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'ear-right'",
      hint: "Add class=&quot;ear-right&quot; to the &lt;div&gt;",
    },
  ],
};

const steps = [wrapper, ears];
// Pass the rules into this function and let the magic happen in the object
window.load = Checker.loadTests(steps);
