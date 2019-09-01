const wrapper = {
  desc:
    "Nesting is important. Let's start by putting out foundation tags in place. A div with a class of wrapper is already there for you. Go a head and create the div with a class of owl",
  example: `&lt;div class=&quot;wrapper&quot;&gt;
  &lt;div class=&quot;owl&quot;&gt;
    &lt;div class=&quot;ear-left&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;ear-right&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;eyes&quot;&gt;
      &lt;div class=&quot;eye eye-left&quot;&gt;
        &lt;div class=&quot;eye-inner&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;eye eye-right&quot;&gt;
        &lt;div class=&quot;eye-inner&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;beak&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;body&quot;&gt;
      &lt;div class=&quot;dot-1&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;dot-2&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;dot-3&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;dot-4&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;dot-5&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;feet&quot;&gt;
      &lt;div class=&quot;foot-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;foot-right&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;shadow&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: "",
      test: { item: "div", value: 1 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside wrapper",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: ".owl",
      test: { item: "className", value: "owl" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'owl'",
      hint: "Add class=&quot;owl&quot; to the &lt;div&gt;",
    },
  ],
};

const ears = {
  desc: "Knocking out the ears would be a good place to start.",
  example: `&lt;div class=&quot;wrapper&quot;&gt;
  &lt;div class=&quot;owl&quot;&gt;
    &lt;div class=&quot;ear-left&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;ear-right&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;eyes&quot;&gt;
      &lt;div class=&quot;eye eye-left&quot;&gt;
        &lt;div class=&quot;eye-inner&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;eye eye-right&quot;&gt;
        &lt;div class=&quot;eye-inner&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;beak&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;body&quot;&gt;
      &lt;div class=&quot;dot-1&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;dot-2&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;dot-3&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;dot-4&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;dot-5&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;feet&quot;&gt;
      &lt;div class=&quot;foot-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;foot-right&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;shadow&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".owl",
      test: { item: "div", value: 1 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside owl",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: ".ear-left",
      test: { item: "className", value: "ear-left" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'ear-left'",
      hint: "Add class=&quot;ear-left&quot; to the &lt;div&gt;",
    },
    {
      type: "children",
      el: ".owl",
      test: { item: "div", value: 2 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside owl",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: ".ear-right",
      test: { item: "className", value: "ear-right" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'ear-right'",
      hint: "Add class=&quot;ear-right&quot; to the &lt;div&gt;",
    },
  ],
};

const steps = [wrapper, ears];
// Pass the rules into this function and let the magic happen in the object
window.load = Checker.loadTests(steps);
