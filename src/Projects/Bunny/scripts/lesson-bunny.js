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

const head = {
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
      test: { item: "div", value: 2 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside of bunny",
      hint: "Add &lt;div&gt;&lt;/div&gt; inside of bunny",
    },
    {
      type: "attribute",
      el: ".head",
      test: { item: "className", value: "head" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'head'",
      hint: "Add class=&quot;head&quot; to the &lt;div&gt;",
    },
    {
      type: "children",
      el: ".head",
      test: { item: "div", value: 1 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside of head",
      hint: "Add &lt;div&gt;&lt;/div&gt; inside of head",
    },
    {
      type: "attribute",
      el: ".eyes",
      test: { item: "className", value: "eyes" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'eyes'",
      hint: "Add class=&quot;eyes&quot; to the &lt;div&gt;",
    },
    {
      type: "children",
      el: ".eyes",
      test: { item: "div", value: 1 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside of eyes",
      hint: "Add &lt;div&gt;&lt;/div&gt; inside of eyes",
    },
    {
      type: "attribute",
      el: ".eye-left",
      test: { item: "className", value: "eye-left" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'eye-left'",
      hint: "Add class=&quot;eye-left&quot; to the &lt;div&gt;",
    },
    {
      type: "children",
      el: ".eyes",
      test: { item: "div", value: 2 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside of eyes",
      hint: "Add &lt;div&gt;&lt;/div&gt; inside of eyes",
    },
    {
      type: "attribute",
      el: ".eye-right",
      test: { item: "className", value: "eye-right" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'eye-right'",
      hint: "Add class=&quot;eye-right&quot; to the &lt;div&gt;",
    },
    {
      type: "children",
      el: ".head",
      test: { item: "div", value: 2 },
      instructions: "Create another &lt;div&gt;&lt;/div&gt; inside of head",
      hint: "Add &lt;div&gt;&lt;/div&gt; inside of head",
    },
    {
      type: "attribute",
      el: ".mouth",
      test: { item: "className", value: "mouth" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'mouth'",
      hint: "Add class=&quot;mouth&quot; to the &lt;div&gt;",
    },
  ],
};

const body = {
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
      test: { item: "div", value: 3 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside of bunny",
      hint: "Add &lt;div&gt;&lt;/div&gt; inside of bunny",
    },
    {
      type: "attribute",
      el: ".body",
      test: { item: "className", value: "body" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'body'",
      hint: "Add class=&quot;body&quot; to the &lt;div&gt;",
    },
    {
      type: "children",
      el: ".body",
      test: { item: "div", value: 1 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside of body",
      hint: "Add &lt;div&gt;&lt;/div&gt; inside of body",
    },
    {
      type: "attribute",
      el: ".arms",
      test: { item: "className", value: "arms" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'arms'",
      hint: "Add class=&quot;arms&quot; to the &lt;div&gt;",
    },
    {
      type: "children",
      el: ".arms",
      test: { item: "div", value: 1 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside of arms",
      hint: "Add &lt;div&gt;&lt;/div&gt; inside of arms",
    },
    {
      type: "attribute",
      el: ".arm-left",
      test: { item: "className", value: "arm-left" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'arm-left'",
      hint: "Add class=&quot;arm-left&quot; to the &lt;div&gt;",
    },
    {
      type: "children",
      el: ".arms",
      test: { item: "div", value: 2 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside of arms",
      hint: "Add &lt;div&gt;&lt;/div&gt; inside of arms",
    },
    {
      type: "attribute",
      el: ".arm-right",
      test: { item: "className", value: "arm-right" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'arm-right'",
      hint: "Add class=&quot;arm-right&quot; to the &lt;div&gt;",
    },

    {
      type: "children",
      el: ".body",
      test: { item: "div", value: 2 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside of body",
      hint: "Add &lt;div&gt;&lt;/div&gt; inside of body",
    },
    {
      type: "attribute",
      el: ".feet",
      test: { item: "className", value: "feet" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'feet'",
      hint: "Add class=&quot;feet&quot; to the &lt;div&gt;",
    },
    {
      type: "children",
      el: ".feet",
      test: { item: "div", value: 1 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside of feet",
      hint: "Add &lt;div&gt;&lt;/div&gt; inside of feet",
    },
    {
      type: "attribute",
      el: ".foot-left",
      test: { item: "className", value: "foot-left" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'foot-left'",
      hint: "Add class=&quot;foot-left&quot; to the &lt;div&gt;",
    },
    {
      type: "children",
      el: ".feet",
      test: { item: "div", value: 2 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside of feet",
      hint: "Add &lt;div&gt;&lt;/div&gt; inside of feet",
    },
    {
      type: "attribute",
      el: ".foot-right",
      test: { item: "className", value: "foot-right" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'foot-right'",
      hint: "Add class=&quot;foot-right&quot; to the &lt;div&gt;",
    },
  ],
};

const steps = [wrapper, ears, head, body];
// Pass the rules into this function and let the magic happen in the object
window.load = Checker.loadTests(steps);
