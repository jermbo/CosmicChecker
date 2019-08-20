const wrapper = {
  desc:
    "Nesting is important. Let's start by putting out foundation tags in place. A div with a class of wrapper is already there for you. Go a head and create the div with a class of robot",
  example: `&lt;div class=&quot;wrapper&quot;&gt;
  &lt;div class=&quot;robot&quot;&gt;
    &lt;div class=&quot;antenna&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;head&quot;&gt;
      &lt;div class=&quot;eye-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;eye-right&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;mouth&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;body&quot;&gt;
      &lt;div class=&quot;arm-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;arm-right&quot;&gt;&lt;/div&gt;
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
      &lt;div class=&quot;eye-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;eye-right&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;mouth&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;body&quot;&gt;
      &lt;div class=&quot;arm-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;arm-right&quot;&gt;&lt;/div&gt;
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
      &lt;div class=&quot;eye-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;eye-right&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;mouth&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;body&quot;&gt;
      &lt;div class=&quot;arm-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;arm-right&quot;&gt;&lt;/div&gt;
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
      test: { item: "div", value: 1 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside head",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: ".eye-left",
      test: { item: "className", value: "eye-left" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'eye-left'",
      hint: "Add class=&quot;eye-left&quot; to the <div>",
    },
    {
      type: "children",
      el: ".head",
      test: { item: "div", value: 2 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside head",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: ".eye-right",
      test: { item: "className", value: "eye-right" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'eye-right'",
      hint: "Add class=&quot;eye-right&quot; to the <div>",
    },
    {
      type: "children",
      el: ".head",
      test: { item: "div", value: 3 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside head",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: ".mouth",
      test: { item: "className", value: "mouth" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'mouth'",
      hint: "Add class=&quot;mouth&quot; to the <div>",
    },
  ],
};

const body = {
  desc: "Now we got to give this bot a body.",
  example: `&lt;div class=&quot;wrapper&quot;&gt;
  &lt;div class=&quot;robot&quot;&gt;
    &lt;div class=&quot;antenna&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;head&quot;&gt;
      &lt;div class=&quot;eye-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;eye-right&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;mouth&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;body&quot;&gt;
      &lt;div class=&quot;arm-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;arm-right&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;bolt&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;bottom&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".robot",
      test: { item: "div", value: 3 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside robot",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: ".body",
      test: { item: "className", value: "body" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'body'",
      hint: "Add class=&quot;body&quot; to the <div>",
    },
    {
      type: "children",
      el: ".body",
      test: { item: "div", value: 1 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside body",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: ".arm-left",
      test: { item: "className", value: "arm-left" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'arm-left'",
      hint: "Add class=&quot;arm-left&quot; to the <div>",
    },
    {
      type: "children",
      el: ".body",
      test: { item: "div", value: 2 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside body",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: ".arm-right",
      test: { item: "className", value: "arm-right" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'arm-right'",
      hint: "Add class=&quot;arm-right&quot; to the <div>",
    },
    {
      type: "children",
      el: ".body",
      test: { item: "div", value: 3 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside body",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: ".bolt",
      test: { item: "className", value: "bolt" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'bolt'",
      hint: "Add class=&quot;bolt&quot; to the <div>",
    },
  ],
};

const bottom = {
  desc: "Finally, let's give this bot a bottom.",
  example: `&lt;div class=&quot;wrapper&quot;&gt;
  &lt;div class=&quot;robot&quot;&gt;
    &lt;div class=&quot;antenna&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;head&quot;&gt;
      &lt;div class=&quot;eye-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;eye-right&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;mouth&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;body&quot;&gt;
      &lt;div class=&quot;arm-left&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;arm-right&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;bolt&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;bottom&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".robot",
      test: { item: "div", value: 4 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside robot",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: ".bottom",
      test: { item: "className", value: "bottom" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'bottom'",
      hint: "Add class=&quot;bottom&quot; to the <div>",
    },
  ],
};

const steps = [wrapper, antenna, head, body, bottom];
// Pass the rules into this function and let the magic happen in the object
window.load = Checker.loadTests(steps);
