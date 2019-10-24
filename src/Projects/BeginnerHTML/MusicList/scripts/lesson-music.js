const start = {
  desc: "We need to create a couple of container divs to hold our header information and our main body content",
  example: `&lt;div class=&quot;header&quot;&gt;
  &lt;h1&gt;Welcome to my Music List&lt;/h1&gt;
&lt;/div&gt;
&lt;div class=&quot;artists&quot;&gt;&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: "",
      test: { item: "div", value: 1 },
      instructions: "Create a &lt;div&gt;&lt/div&gt; inside wrapper",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: ".header",
      test: { item: "className", value: "header" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'header'",
      hint: "Add class=&quot;header&quot; to the &lt;div&gt;",
    },
    {
      type: "children",
      el: ".header",
      test: { item: "h1", value: 1 },
      instructions: "Create an &lt;h1&gt;&lt;/h1&gt; tag inside the header &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;h1&gt;&lt;/h1&gt; inside header",
    },
    {
      type: "attribute",
      el: ".header h1",
      test: { item: "innerText", value: "Welcome to my Music List" },
      instructions: "Make the text say 'Welcome to my Music List'",
      hint: "Add 'Welcome to my Music List' between the h1 tags",
    },
    {
      type: "children",
      el: "",
      test: { item: "div", value: 2 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; next to the header &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: ".artists",
      test: { item: "className", value: "artists" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of artists",
      hint: "Add class=&quot;artists&quot; to the &lt;div&gt;",
    },
  ],
};

const lukas = {
  desc: "We need to lay down some html and assign some classes to get this artist's image on the screen.",
  example: `&lt;div id=&quot;LukasGraham&quot; class=&quot;artist&quot;
  style=&quot;background-image: url(&apos;images/lukas_graham.jpg&apos;);&quot;&gt;
  &lt;h2 class=&quot;artist_name&quot;&gt;
      &lt;a href=&quot;#&quot;&gt;Lukas Graham&lt;/a&gt;
  &lt;/h2&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".artists",
      test: { item: "div", value: 1 },
      instructions: "Create a new &lt;div&gt;&lt/div&gt; inside the artists ",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#LukasGraham",
      test: { item: "id", value: "LukasGraham" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of LukasGraham",
      hint: "Add id=&quot;LukasGraham&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "attribute",
      el: "#LukasGraham",
      test: { item: "className", value: "artist" },
      instructions: "Also, Give that new &lt;div&gt;&lt;/div&gt; a class of artist",
      hint: "Add class=&quot;artist&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "inlineStyles",
      el: "#LukasGraham",
      test: { item: "backgroundImage", value: "url(\"images/lukas_graham.jpg\")" },
      instructions: "Add url(&apos;images/lukas_graham.jpg&apos;) to background-image attribute",
      hint: "style=&quot;background-image: url(&apos;images/lukas_graham.jpg&apos;);&quot;",
    },
    {
      type: "children",
      el: "#LukasGraham",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;h2&gt;&lt;/h2&gt;",
    },
    {
      type: "attribute",
      el: "#LukasGraham h2",
      test: { item: "className", value: "artist_name" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'artist_name'",
      hint: "Add &lt;h2 class=&quot;artist_name&quot;&gt;&lt;/h2&gt;",
    },
    {
      type: "children",
      el: "#LukasGraham h2",
      test: { item: "a", value: 1 },
      instructions: "Inside the &lt;h2&gt;&lt;/h2&gt; create an &lt;a href=&quot;&quot;&gt;&lt;/a&gt; tag",
      hint: "Add &lt;a href=&quot;#&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#LukasGraham h2 a",
      test: { item: "innerText", value: "Lukas Graham" },
      instructions: "Make sure Lukas Graham is in the anchor",
      hint: "Add Lukas Graham inside the new anchor",
    },
  ],
};

const demi = {
  desc: "We are going to need a lot of the same mark up as before. Can you spot the differences?",
  example: `&lt;div id=&quot;DemiLovato&quot; class=&quot;artist&quot;
  style=&quot;background-image: url(&apos;images/demi_lovato.jpg&apos;);&quot;&gt;
  &lt;h2 class=&quot;artist_name&quot;&gt;
      &lt;a href=&quot;#&quot;&gt;Demi Lovato&lt;/a&gt;
  &lt;/h2&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".artists",
      test: { item: "div", value: 2 },
      instructions: "Create a new &lt;div&gt;&lt/div&gt; inside the artists ",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#DemiLovato",
      test: { item: "id", value: "DemiLovato" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of DemiLovato",
      hint: "Add id=&quot;DemiLovato&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "attribute",
      el: "#DemiLovato",
      test: { item: "className", value: "artist" },
      instructions: "Also, Give that new &lt;div&gt;&lt;/div&gt; a class of artist",
      hint: "Add class=&quot;artist&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "inlineStyles",
      el: "#DemiLovato",
      test: { item: "backgroundImage", value: "url(\"images/demi_lovato.jpg\")" },
      instructions: "Add url('images/demi_lovato.jpg') to background-image attribute",
      hint: "style=&quot;background-image: url(&apos;images/demi_lovato.jpg&apos;);&quot;",
    },
    {
      type: "children",
      el: "#DemiLovato",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;h2&gt;&lt;/h2&gt;",
    },
    {
      type: "attribute",
      el: "#DemiLovato h2",
      test: { item: "className", value: "artist_name" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'artist_name'",
      hint: "Add &lt;h2 class=&quot;artist_name&quot;&gt;&lt;/h2&gt;",
    },
    {
      type: "children",
      el: "#DemiLovato h2",
      test: { item: "a", value: 1 },
      instructions: "Inside the &lt;h2&gt;&lt;/h2&gt; create an &lt;a href=&quot;&quot;&gt;&lt;/a&gt; tag",
      hint: "Add &lt;a href=&quot;#&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#DemiLovato h2 a",
      test: { item: "innerText", value: "Demi Lovato" },
      instructions: "Make sure Demi Lovato is in the anchor",
      hint: "Add Demi Lovato inside the new anchor",
    },
  ],
};

const bruno = {
  desc: "We are going to need a lot of the same mark up as before. Can you spot the differences?",
  example: `&lt;div id=&quot;BrunoMars&quot; class=&quot;artist&quot;
  style=&quot;background-image: url(&apos;images/bruno_mars.jpg&apos;);&quot;&gt;
  &lt;h2 class=&quot;artist_name&quot;&gt;
      &lt;a href=&quot;#&quot;&gt;Bruno Mars&lt;/a&gt;
  &lt;/h2&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".artists",
      test: { item: "div", value: 3 },
      instructions: "Create a new &lt;div&gt;&lt/div&gt; inside the artists ",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#BrunoMars",
      test: { item: "id", value: "BrunoMars" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of BrunoMars",
      hint: "Add id=&quot;BrunoMars&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "attribute",
      el: "#BrunoMars",
      test: { item: "className", value: "artist" },
      instructions: "Also, Give that new &lt;div&gt;&lt;/div&gt; a class of artist",
      hint: "Add class=&quot;artist&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "inlineStyles",
      el: "#BrunoMars",
      test: { item: "backgroundImage", value: "url(\"images/bruno_mars.jpg\")" },
      instructions: "Add url('images/bruno_mars.jpg') to background-image attribute",
      hint: "style=&quot;background-image: url(&apos;images/bruno_mars.jpg&apos;);&quot;",
    },
    {
      type: "children",
      el: "#BrunoMars",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;h2&gt;&lt;/h2&gt;",
    },
    {
      type: "attribute",
      el: "#BrunoMars h2",
      test: { item: "className", value: "artist_name" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'artist_name'",
      hint: "Add &lt;h2 class=&quot;artist_name&quot;&gt;&lt;/h2&gt;",
    },
    {
      type: "children",
      el: "#BrunoMars h2",
      test: { item: "a", value: 1 },
      instructions: "Inside the &lt;h2&gt;&lt;/h2&gt; create an &lt;a href=&quot;&quot;&gt;&lt;/a&gt; tag",
      hint: "Add &lt;a href=&quot;#&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#BrunoMars h2 a",
      test: { item: "innerText", value: "Bruno Mars" },
      instructions: "Make sure Bruno Mars is in the anchor",
      hint: "Add Bruno Mars inside the new anchor",
    },
  ],
};

const ariana = {
  desc: "We are going to need a lot of the same mark up as before. Can you spot the differences?",
  example: `&lt;div id=&quot;ArianaGrande&quot; class=&quot;artist&quot;
  style=&quot;background-image: url(&apos;images/ariana_grande.jpg&apos;);&quot;&gt;
  &lt;h2 class=&quot;artist_name&quot;&gt;
      &lt;a href=&quot;#&quot;&gt;Ariana Grande&lt;/a&gt;
  &lt;/h2&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".artists",
      test: { item: "div", value: 4 },
      instructions: "Create a new &lt;div&gt;&lt/div&gt; inside the artists ",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#ArianaGrande",
      test: { item: "id", value: "ArianaGrande" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of ArianaGrande",
      hint: "Add id=&quot;ArianaGrande&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "attribute",
      el: "#ArianaGrande",
      test: { item: "className", value: "artist" },
      instructions: "Also, Give that new &lt;div&gt;&lt;/div&gt; a class of artist",
      hint: "Add class=&quot;artist&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "inlineStyles",
      el: "#ArianaGrande",
      test: { item: "backgroundImage", value: "url(\"images/ariana_grande.jpg\")" },
      instructions: "Add url('images/ariana_grande.jpg') to background-image attribute",
      hint: "style=&quot;background-image: url(&apos;images/ariana_grande.jpg&apos;);&quot;",
    },
    {
      type: "children",
      el: "#ArianaGrande",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;h2&gt;&lt;/h2&gt;",
    },
    {
      type: "attribute",
      el: "#ArianaGrande h2",
      test: { item: "className", value: "artist_name" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'artist_name'",
      hint: "Add &lt;h2 class=&quot;artist_name&quot;&gt;&lt;/h2&gt;",
    },
    {
      type: "children",
      el: "#ArianaGrande h2",
      test: { item: "a", value: 1 },
      instructions: "Inside the &lt;h2&gt;&lt;/h2&gt; create an &lt;a href=&quot;&quot;&gt;&lt;/a&gt; tag",
      hint: "Add &lt;a href=&quot;#&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#ArianaGrande h2 a",
      test: { item: "innerText", value: "Ariana Grande" },
      instructions: "Make sure Ariana Grande is in the anchor",
      hint: "Add Ariana Grande inside the new anchor",
    },
  ],
};

const adele = {
  desc: "We are going to need a lot of the same mark up as before. Can you spot the differences?",
  example: `&lt;div id=&quot;Adele&quot; class=&quot;artist&quot;
  style=&quot;background-image: url(&apos;images/adele.jpg&apos;);&quot;&gt;
  &lt;h2 class=&quot;artist_name&quot;&gt;
      &lt;a href=&quot;#&quot;&gt;Adele&lt;/a&gt;
  &lt;/h2&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".artists",
      test: { item: "div", value: 5 },
      instructions: "Create a new &lt;div&gt;&lt/div&gt; inside the artists ",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#Adele",
      test: { item: "id", value: "Adele" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of Adele",
      hint: "Add id=&quot;Adele&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "attribute",
      el: "#Adele",
      test: { item: "className", value: "artist" },
      instructions: "Also, Give that new &lt;div&gt;&lt;/div&gt; a class of artist",
      hint: "Add class=&quot;artist&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "inlineStyles",
      el: "#Adele",
      test: { item: "backgroundImage", value: "url(\"images/adele.jpg\")" },
      instructions: "Add url('images/adele.jpg') to background-image attribute",
      hint: "style=&quot;background-image: url(&apos;images/adele.jpg&apos;);&quot;",
    },
    {
      type: "children",
      el: "#Adele",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;h2&gt;&lt;/h2&gt;",
    },
    {
      type: "attribute",
      el: "#Adele h2",
      test: { item: "className", value: "artist_name" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'artist_name'",
      hint: "Add &lt;h2 class=&quot;artist_name&quot;&gt;&lt;/h2&gt;",
    },
    {
      type: "children",
      el: "#Adele h2",
      test: { item: "a", value: 1 },
      instructions: "Inside the &lt;h2&gt;&lt;/h2&gt; create an &lt;a href=&quot;&quot;&gt;&lt;/a&gt; tag",
      hint: "Add &lt;a href=&quot;#&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#Adele h2 a",
      test: { item: "innerText", value: "Adele" },
      instructions: "Make sure Adele is in the anchor",
      hint: "Add Adele inside the new anchor",
    },
  ],
};

const zedd = {
  desc: "We are going to need a lot of the same mark up as before. Can you spot the differences?",
  example: `&lt;div id=&quot;Zedd&quot; class=&quot;artist&quot;
  style=&quot;background-image: url(&apos;images/zedd.jpg&apos;);&quot;&gt;
  &lt;h2 class=&quot;artist_name&quot;&gt;
      &lt;a href=&quot;#&quot;&gt;Zedd&lt;/a&gt;
  &lt;/h2&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".artists",
      test: { item: "div", value: 6 },
      instructions: "Create a new &lt;div&gt;&lt/div&gt; inside the artists ",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#Zedd",
      test: { item: "id", value: "Zedd" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of Zedd",
      hint: "Add id=&quot;Zedd&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "attribute",
      el: "#Zedd",
      test: { item: "className", value: "artist" },
      instructions: "Also, Give that new &lt;div&gt;&lt;/div&gt; a class of artist",
      hint: "Add class=&quot;artist&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "inlineStyles",
      el: "#Zedd",
      test: { item: "backgroundImage", value: "url(\"images/zedd.jpg\")" },
      instructions: "Add url('images/zedd.jpg') to background-image attribute",
      hint: "style=&quot;background-image: url(&apos;images/zedd.jpg&apos;);&quot;",
    },
    {
      type: "children",
      el: "#Zedd",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;h2&gt;&lt;/h2&gt;",
    },
    {
      type: "attribute",
      el: "#Zedd h2",
      test: { item: "className", value: "artist_name" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'artist_name'",
      hint: "Add &lt;h2 class=&quot;artist_name&quot;&gt;&lt;/h2&gt;",
    },
    {
      type: "children",
      el: "#Zedd h2",
      test: { item: "a", value: 1 },
      instructions: "Inside the &lt;h2&gt;&lt;/h2&gt; create an &lt;a href=&quot;&quot;&gt;&lt;/a&gt; tag",
      hint: "Add &lt;a href=&quot;#&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#Zedd h2 a",
      test: { item: "innerText", value: "Zedd" },
      instructions: "Make sure Zedd is in the anchor",
      hint: "Add Zedd inside the new anchor",
    },
  ],
};

const sia = {
  desc: "We are going to need a lot of the same mark up as before. Can you spot the differences?",
  example: `&lt;div id=&quot;Sia&quot; class=&quot;artist&quot;
  style=&quot;background-image: url(&apos;images/sia.jpg&apos;);&quot;&gt;
  &lt;h2 class=&quot;artist_name&quot;&gt;
      &lt;a href=&quot;#&quot;&gt;Sia&lt;/a&gt;
  &lt;/h2&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".artists",
      test: { item: "div", value: 7 },
      instructions: "Create a new &lt;div&gt;&lt/div&gt; inside the artists ",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#Sia",
      test: { item: "id", value: "Sia" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of Sia",
      hint: "Add id=&quot;Sia&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "attribute",
      el: "#Sia",
      test: { item: "className", value: "artist" },
      instructions: "Also, Give that new &lt;div&gt;&lt;/div&gt; a class of artist",
      hint: "Add class=&quot;artist&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "inlineStyles",
      el: "#Sia",
      test: { item: "backgroundImage", value: "url(\"images/sia.jpg\")" },
      instructions: "Add url('images/sia.jpg') to background-image attribute",
      hint: "style=&quot;background-image: url(&apos;images/sia.jpg&apos;);&quot;",
    },
    {
      type: "children",
      el: "#Sia",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;h2&gt;&lt;/h2&gt;",
    },
    {
      type: "attribute",
      el: "#Sia h2",
      test: { item: "className", value: "artist_name" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'artist_name'",
      hint: "Add &lt;h2 class=&quot;artist_name&quot;&gt;&lt;/h2&gt;",
    },
    {
      type: "children",
      el: "#Sia h2",
      test: { item: "a", value: 1 },
      instructions: "Inside the &lt;h2&gt;&lt;/h2&gt; create an &lt;a href=&quot;&quot;&gt;&lt;/a&gt; tag",
      hint: "Add &lt;a href=&quot;#&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#Sia h2 a",
      test: { item: "innerText", value: "Sia" },
      instructions: "Make sure Sia is in the anchor",
      hint: "Add Sia inside the new anchor",
    },
  ],
};

const weeknd = {
  desc: "We are going to need a lot of the same mark up as before. Can you spot the differences?",
  example: `&lt;div id=&quot;TheWeeknd&quot; class=&quot;artist&quot;
  style=&quot;background-image: url(&apos;images/the_weeknd.jpg&apos;);&quot;&gt;
  &lt;h2 class=&quot;artist_name&quot;&gt;
      &lt;a href=&quot;#&quot;&gt;The Weeknd&lt;/a&gt;
  &lt;/h2&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".artists",
      test: { item: "div", value: 8 },
      instructions: "Create a new &lt;div&gt;&lt/div&gt; inside the artists ",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#TheWeeknd",
      test: { item: "id", value: "TheWeeknd" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of TheWeeknd",
      hint: "Add id=&quot;TheWeeknd&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "attribute",
      el: "#TheWeeknd",
      test: { item: "className", value: "artist" },
      instructions: "Also, Give that new &lt;div&gt;&lt;/div&gt; a class of artist",
      hint: "Add class=&quot;artist&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "inlineStyles",
      el: "#TheWeeknd",
      test: { item: "backgroundImage", value: "url(\"images/the_weeknd.jpg\")" },
      instructions: "Add url('images/the_weeknd.jpg') to background-image attribute",
      hint: "style=&quot;background-image: url(&apos;images/the_weeknd.jpg&apos;);&quot;",
    },
    {
      type: "children",
      el: "#TheWeeknd",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;h2&gt;&lt;/h2&gt;",
    },
    {
      type: "attribute",
      el: "#TheWeeknd h2",
      test: { item: "className", value: "artist_name" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'artist_name'",
      hint: "Add &lt;h2 class=&quot;artist_name&quot;&gt;&lt;/h2&gt;",
    },
    {
      type: "children",
      el: "#TheWeeknd h2",
      test: { item: "a", value: 1 },
      instructions: "Inside the &lt;h2&gt;&lt;/h2&gt; create an &lt;a href=&quot;&quot;&gt;&lt;/a&gt; tag",
      hint: "Add &lt;a href=&quot;#&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#TheWeeknd h2 a",
      test: { item: "innerText", value: "The Weeknd" },
      instructions: "Make sure The Weeknd is in the anchor",
      hint: "Add The Weeknd inside the new anchor",
    },
  ],
};

const steps = [start, lukas, demi, bruno, ariana, adele, zedd, sia, weeknd];
// Pass the rules into this function and let the magic happen in the object
window.load = Checker.loadTests(steps);
