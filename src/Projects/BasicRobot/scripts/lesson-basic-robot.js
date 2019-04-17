const wrapper = {
  desc:
    "Nesting is important. Let's start by putting out foundation tags in place. A div with a class of wrapper is already there for you. Go a head and create the div with a class of robot",
  example: `&lt;div class=&quot;wrapper&quot;&gt;
  &lt;div class=&quot;robot&quot;&gt;
    &lt;div class=&quot;antenna&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;head&quot;&gt;
      &lt;div class=&quot;eye eye-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;eye eye-right&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;mouth&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;body&quot;&gt;
      &lt;div class=&quot;arm arm-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;arm arm-right&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;bolt&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;bottom&quot;&gt;&lt;/div&gt;
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
      el: ".robot",
      test: { item: "className", value: "robot" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'robot'",
      hint: "Add class=&quot;robot&quot; to the <div>",
    },
  ],
};

const antenna = {
  desc: "Now that we have our robot container, let start at the top with the antenna.",
  example: `&lt;div class=&quot;wrapper&quot;&gt;
  &lt;div class=&quot;robot&quot;&gt;
    &lt;div class=&quot;antenna&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;head&quot;&gt;
      &lt;div class=&quot;eye eye-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;eye eye-right&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;mouth&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;body&quot;&gt;
      &lt;div class=&quot;arm arm-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;arm arm-right&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;bolt&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;bottom&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".robot",
      test: { item: "div", value: 1 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside robot",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: ".antenna",
      test: { item: "className", value: "antenna" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'antenna'",
      hint: "Add class=&quot;antenna&quot; to the <div>",
    },
  ],
};

const head = {
  desc: "Next we can move onto the head. This is where we will nest even more div's for the eyes and mouth.",
  example: `&lt;div class=&quot;wrapper&quot;&gt;
  &lt;div class=&quot;robot&quot;&gt;
    &lt;div class=&quot;antenna&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;head&quot;&gt;
      &lt;div class=&quot;eye eye-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;eye eye-right&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;mouth&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;body&quot;&gt;
      &lt;div class=&quot;arm arm-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;arm arm-right&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;bolt&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;bottom&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".robot",
      test: { item: "div", value: 2 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside robot",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: ".head",
      test: { item: "className", value: "head" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'head'",
      hint: "Add class=&quot;head&quot; to the <div>",
    },
    {
      type: "children",
      el: ".head",
      test: { item: "className", value: "head" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'head'",
      hint: "Add class=&quot;head&quot; to the <div>",
    },
  ],
};

const body = {};

const bottom = {};

const steps = [wrapper, antenna, head, body, bottom];
// Pass the rules into this function and let the magic happen in the object
window.load = Checker.loadTests(steps);
