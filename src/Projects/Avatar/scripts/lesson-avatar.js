const start = {
  desc: "We need to create a couple of container divs to hold our header information and our main body content",
  example: `&lt;div class="header"&gt;
  &lt;h1&gt;Avatar: The Last Airbender&lt;/h1&gt;
&lt;/div&gt;
&lt;div class="characters"&gt;&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: "",
      test: { item: "div", value: 1 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; inside wrapper",
      hint: "Add <div></div>"
    },
    {
      type: "attribute",
      el: ".header",
      test: { item: "className", value: "header" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of header",
      hint: "Add class=&quot;header&quot; to the div"
    },
    {
      type: "children",
      el: ".header",
      test: { item: "h1", value: 1 },
      instructions: "Create an &lt;h1&gt;&lt;/h1&gt; tag inside the header div",
      hint: "Add <h1></h1> inside header"
    },
    {
      type: "attribute",
      el: ".header h1",
      test: { item: "innerText", value: "Avatar: The Last Airbender" },
      instructions: "Make the text say 'Avatar: The Last Airbender'",
      hint: "Add 'Avatar: The Last Airbender' between the h1 tags"
    },
    {
      type: "children",
      el: "",
      test: { item: "div", value: 2 },
      instructions: "Create a &lt;div&gt;&lt;/div&gt; next to the header div",
      hint: "Add <div></div>"
    },
    {
      type: "attribute",
      el: ".characters",
      test: { item: "className", value: "characters" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'characters'",
      hint: "Add class=&quot;characters&quot; to the div"
    },
  ]
};

const aang = {
  desc: "We need to lay down some html and assign some classes to get this artist's image on the screen.",
  example: `&lt;div id="aang" class="character"&gt;
    &lt;a href="#"&gt;
        &lt;img src="images/aang.png" alt="" class="character_img"&gt;
    &lt;/a&gt;
    &lt;a href="#" class="character_name"&gt;Aang&lt;/a&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".characters",
      test: { item: "div", value: 1 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; inside the characters div",
      hint: "Add <div></div>"
    },
    {
      type: "attribute",
      el: "#aang",
      test: { item: "id", value: "aang" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; an id of 'aang'",
      hint: "Add id=&quot;aang&quot; to the div just created."
    },
    {
      type: "attribute",
      el: "#aang",
      test: { item: "className", value: "character" },
      instructions: "Also, give that same &lt;div&gt; a class of 'character'",
      hint: "Add class=&quot;character&quot; to the same div."
    },
    {
      type: "children",
      el: "#aang",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href=''&gt;&lt;/a&gt; tag inside the &lt;div&gt;",
      hint: "Add <a href=&quot;#&quot;></a>"
    },
    {
      type: "children",
      el: "#aang > a",
      test: { item: "img", value: 1 },
      instructions: "Add an &lt;img src='' /&gt; to that &lt;a href=''&gt;&lt;/a&gt; tag",
      hint: "Add <img src=&quot;&quot;/> inside the new anchor tag"
    },
    {
      type: "attribute",
      el: "#aang > a > img",
      test: { item: "src", value: "images/aang.png" },
      instructions: "Update the src attribute with 'images/aang.png'",
      hint: "Add the src=&quot;images/aang.png&quot;"
    },
    {
      type: "attribute",
      el: "#aang > a > img",
      test: { item: "className", value: "character_img" },
      instructions: "Give the new &lt;img src='' /&gt; tag a class of 'character_img'",
      hint: "Add class=&quot;character_img&quot;"
    },
    {
      type: "children",
      el: "#aang",
      test: { item: "a", value: 1 },
      instructions: "Add a new &lt;a href=''&gt;&lt;/a&gt; inside the &lt;div&gt;&lt;/div&gt;",
      hint: "Create another <a href=&quot;#&quot;></a>"
    },
    {
      type: "attribute",
      el: "#aang > a:last-child",
      test: { item: "className", value: "character_name" },
      instructions: "Give that new &lt;a href=''&gt;&lt;/a&gt; tag a class of 'character_name'",
      hint: "Add class=&quot;character_name&quot;"
    },
    {
      type: "attribute",
      el: "#aang > a:last-child",
      test: { item: "innerText", value: "Aang" },
      instructions: "Make sure 'Aang' is in the &lt;a&gt;&lt;/a&gt;",
      hint: "Add 'Aang' inside the new anchor"
    }
  ]
};

const katara = {
  desc: "We are going to need a lot of the same mark up as before. Can you spot the differences?",
  example: `&lt;div id="katara" class="character"&gt;
    &lt;a href="#"&gt;
        &lt;img src="images/katara.png" alt="" class="character_img"&gt;
    &lt;/a&gt;
    &lt;a href="#" class="character_name"&gt;Katara&lt;/a&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".characters",
      test: { item: "div", value: 2 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; inside the characters div",
      hint: "Add <div></div>"
    },
    {
      type: "attribute",
      el: "#katara",
      test: { item: "id", value: "katara" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; an id of 'katara'",
      hint: "Add id=&quot;katara&quot; to the div just created."
    },
    {
      type: "attribute",
      el: "#katara",
      test: { item: "className", value: "character" },
      instructions: "Also, give that same &lt;div&gt; a class of 'character'",
      hint: "Add class=&quot;character&quot; to the same div."
    },
    {
      type: "children",
      el: "#katara",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href=''&gt;&lt;/a&gt; tag inside the &lt;div&gt;",
      hint: "Add <a href=&quot;#&quot;></a>"
    },
    {
      type: "children",
      el: "#katara > a",
      test: { item: "img", value: 1 },
      instructions: "Add an &lt;img src='' /&gt; to that &lt;a href=''&gt;&lt;/a&gt; tag",
      hint: "Add <img src=&quot;&quot;/> inside the new anchor tag"
    },
    {
      type: "attribute",
      el: "#katara > a > img",
      test: { item: "src", value: "images/katara.png" },
      instructions: "Update the src attribute with 'images/katara.png'",
      hint: "Add the src=&quot;images/katara.png&quot;"
    },
    {
      type: "attribute",
      el: "#katara > a > img",
      test: { item: "className", value: "character_img" },
      instructions: "Give the new &lt;img src='' /&gt; tag a class of 'character_img'",
      hint: "Add class=&quot;character_img&quot;"
    },
    {
      type: "children",
      el: "#katara",
      test: { item: "a", value: 1 },
      instructions: "Add a new &lt;a href=''&gt;&lt;/a&gt; inside the &lt;div&gt;&lt;/div&gt;",
      hint: "Create another <a href=&quot;#&quot;></a>"
    },
    {
      type: "attribute",
      el: "#katara > a:last-child",
      test: { item: "className", value: "character_name" },
      instructions: "Give that new &lt;a href=''&gt;&lt;/a&gt; tag a class of 'character_name'",
      hint: "Add class=&quot;character_name&quot;"
    },
    {
      type: "attribute",
      el: "#katara > a:last-child",
      test: { item: "innerText", value: "Katara" },
      instructions: "Make sure 'Katara' is in the &lt;a&gt;&lt;/a&gt;",
      hint: "Add 'Katara' inside the new anchor"
    }
  ]
};

const sokka = {
  desc: "We are going to need a lot of the same mark up as before. Can you spot the differences?",
  example: `&lt;div id="sokka" class="character"&gt;
    &lt;a href="#"&gt;
        &lt;img src="images/sokka.png" alt="" class="character_img"&gt;
    &lt;/a&gt;
    &lt;a href="#" class="character_name"&gt;Sokka&lt;/a&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".characters",
      test: { item: "div", value: 3 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; inside the characters div",
      hint: "Add <div></div>"
    },
    {
      type: "attribute",
      el: "#sokka",
      test: { item: "id", value: "sokka" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; an id of 'sokka'",
      hint: "Add id=&quot;sokka&quot; to the div just created."
    },
    {
      type: "attribute",
      el: "#sokka",
      test: { item: "className", value: "character" },
      instructions: "Also, give that same &lt;div&gt; a class of 'character'",
      hint: "Add class=&quot;character&quot; to the same div."
    },
    {
      type: "children",
      el: "#sokka",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href=''&gt;&lt;/a&gt; tag inside the &lt;div&gt;",
      hint: "Add <a href=&quot;#&quot;></a>"
    },
    {
      type: "children",
      el: "#sokka > a",
      test: { item: "img", value: 1 },
      instructions: "Add an &lt;img src='' /&gt; to that &lt;a href=''&gt;&lt;/a&gt; tag",
      hint: "Add <img src=&quot;&quot;/> inside the new anchor tag"
    },
    {
      type: "attribute",
      el: "#sokka > a > img",
      test: { item: "src", value: "images/sokka.png" },
      instructions: "Update the src attribute with 'images/sokka.png'",
      hint: "Add the src=&quot;images/sokka.png&quot;"
    },
    {
      type: "attribute",
      el: "#sokka > a > img",
      test: { item: "className", value: "character_img" },
      instructions: "Give the new &lt;img src='' /&gt; tag a class of 'character_img'",
      hint: "Add class=&quot;character_img&quot;"
    },
    {
      type: "children",
      el: "#sokka",
      test: { item: "a", value: 1 },
      instructions: "Add a new &lt;a href=''&gt;&lt;/a&gt; inside the &lt;div&gt;&lt;/div&gt;",
      hint: "Create another <a href=&quot;#&quot;></a>"
    },
    {
      type: "attribute",
      el: "#sokka > a:last-child",
      test: { item: "className", value: "character_name" },
      instructions: "Give that new &lt;a href=''&gt;&lt;/a&gt; tag a class of 'character_name'",
      hint: "Add class=&quot;character_name&quot;"
    },
    {
      type: "attribute",
      el: "#sokka > a:last-child",
      test: { item: "innerText", value: "Sokka" },
      instructions: "Make sure 'Sokka' is in the &lt;a&gt;&lt;/a&gt;",
      hint: "Add 'Sokka' inside the new anchor"
    }
  ]
};

const appa = {
  desc: "We are going to need a lot of the same mark up as before. Can you spot the differences?",
  example: `&lt;div id="appa" class="character"&gt;
    &lt;a href="#"&gt;
        &lt;img src="images/appa.png" alt="" class="character_img"&gt;
    &lt;/a&gt;
    &lt;a href="#" class="character_name"&gt;Appa&lt;/a&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".characters",
      test: { item: "div", value: 3 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; inside the characters div",
      hint: "Add <div></div>"
    },
    {
      type: "attribute",
      el: "#appa",
      test: { item: "id", value: "appa" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; an id of 'appa'",
      hint: "Add id=&quot;appa&quot; to the div just created."
    },
    {
      type: "attribute",
      el: "#appa",
      test: { item: "className", value: "character" },
      instructions: "Also, give that same &lt;div&gt;&lt;/div&gt; a class of 'character'",
      hint: "Add class=&quot;character&quot; to the same div."
    },
    {
      type: "children",
      el: "#appa",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href=''&gt;&lt;/a&gt; tag inside the &lt;div&gt;",
      hint: "Add <a href=&quot;#&quot;></a>"
    },
    {
      type: "children",
      el: "#appa > a",
      test: { item: "img", value: 1 },
      instructions: "Add an &lt;img src='' /&gt; to that &lt;a href=''&gt;&lt;/a&gt; tag",
      hint: "Add <img src=&quot;&quot;/> inside the new anchor tag"
    },
    {
      type: "attribute",
      el: "#appa > a > img",
      test: { item: "src", value: "images/appa.png" },
      instructions: "Update the src attribute with 'images/appa.png'",
      hint: "Add the src=&quot;images/appa.png&quot;"
    },
    {
      type: "attribute",
      el: "#appa > a > img",
      test: { item: "className", value: "character_img" },
      instructions: "Give the new &lt;img src='' /&gt; tag a class of 'character_img'",
      hint: "Add class=&quot;character_img&quot;"
    },
    {
      type: "children",
      el: "#appa",
      test: { item: "a", value: 1 },
      instructions: "Add a new &lt;a href=''&gt;&lt;/a&gt; inside the &lt;div&gt;&lt;/div&gt;",
      hint: "Create another <a href=&quot;#&quot;></a>"
    },
    {
      type: "attribute",
      el: "#appa > a:last-child",
      test: { item: "className", value: "character_name" },
      instructions: "Give that new &lt;a href=''&gt;&lt;/a&gt; tag a class of 'character_name'",
      hint: "Add class=&quot;character_name&quot;"
    },
    {
      type: "attribute",
      el: "#appa > a:last-child",
      test: { item: "innerText", value: "Appa" },
      instructions: "Make sure 'Appa' is in the &lt;a&gt;&lt;/a&gt;",
      hint: "Add 'Appa' inside the new anchor"
    }
  ]
};

const momo = {
  desc: "We are going to need a lot of the same mark up as before. Can you spot the differences?",
  example: `&lt;div id="momo" class="character"&gt;
    &lt;a href="#"&gt;
        &lt;img src="images/momo.png" alt="" class="character_img"&gt;
    &lt;/a&gt;
    &lt;a href="#" class="character_name"&gt;Momo&lt;/a&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".characters",
      test: { item: "div", value: 4 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; inside the characters div",
      hint: "Add <div></div>"
    },
    {
      type: "attribute",
      el: "#momo",
      test: { item: "id", value: "momo" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; an id of 'momo'",
      hint: "Add id=&quot;momo&quot; to the div just created."
    },
    {
      type: "attribute",
      el: "#momo",
      test: { item: "className", value: "character" },
      instructions: "Also, give that same &lt;div&gt;&lt;/div&gt; a class of 'character'",
      hint: "Add class=&quot;character&quot; to the same div."
    },
    {
      type: "children",
      el: "#momo",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href=''&gt;&lt;/a&gt; tag inside the &lt;div&gt;",
      hint: "Add <a href=&quot;#&quot;></a>"
    },
    {
      type: "children",
      el: "#momo > a",
      test: { item: "img", value: 1 },
      instructions: "Add an &lt;img src='' /&gt; to that &lt;a href=''&gt;&lt;/a&gt; tag",
      hint: "Add <img src=&quot;&quot;/> inside the new anchor tag"
    },
    {
      type: "attribute",
      el: "#momo > a > img",
      test: { item: "src", value: "images/momo.png" },
      instructions: "Update the src attribute with 'images/momo.png'",
      hint: "Add the src=&quot;images/momo.png&quot;"
    },
    {
      type: "attribute",
      el: "#momo > a > img",
      test: { item: "className", value: "character_img" },
      instructions: "Give the new &lt;img src='' /&gt; tag a class of 'character_img'",
      hint: "Add class=&quot;character_img&quot;"
    },
    {
      type: "children",
      el: "#momo",
      test: { item: "a", value: 1 },
      instructions: "Add a new &lt;a href=''&gt;&lt;/a&gt; inside the &lt;div&gt;&lt;/div&gt;",
      hint: "Create another <a href=&quot;#&quot;></a>"
    },
    {
      type: "attribute",
      el: "#momo > a:last-child",
      test: { item: "className", value: "character_name" },
      instructions: "Give that new &lt;a href=''&gt;&lt;/a&gt; tag a class of 'character_name'",
      hint: "Add class=&quot;character_name&quot;"
    },
    {
      type: "attribute",
      el: "#momo > a:last-child",
      test: { item: "innerText", value: "Momo" },
      instructions: "Make sure 'Momo' is in the &lt;a&gt;&lt;/a&gt;",
      hint: "Add 'Momo' inside the new anchor"
    }
  ]
};

const toph = {
  desc: "We are going to need a lot of the same mark up as before. Can you spot the differences?",
  example: `&lt;div id="toph" class="character"&gt;
    &lt;a href="#"&gt;
        &lt;img src="images/toph.png" alt="" class="character_img"&gt;
    &lt;/a&gt;
    &lt;a href="#" class="character_name"&gt;Toph&lt;/a&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".characters",
      test: { item: "div", value: 5 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; inside the characters div",
      hint: "Add <div></div>"
    },
    {
      type: "attribute",
      el: "#toph",
      test: { item: "id", value: "toph" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; an id of 'toph'",
      hint: "Add id=&quot;toph&quot; to the div just created."
    },
    {
      type: "attribute",
      el: "#toph",
      test: { item: "className", value: "character" },
      instructions: "Also, give that same &lt;div&gt;&lt;/div&gt; a class of 'character'",
      hint: "Add class=&quot;character&quot; to the same div."
    },
    {
      type: "children",
      el: "#toph",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href=''&gt;&lt;/a&gt; tag inside the &lt;div&gt;",
      hint: "Add <a href=&quot;#&quot;></a>"
    },
    {
      type: "children",
      el: "#toph > a",
      test: { item: "img", value: 1 },
      instructions: "Add an &lt;img src='' /&gt; to that &lt;a href=''&gt;&lt;/a&gt; tag",
      hint: "Add <img src=&quot;&quot;/> inside the new anchor tag"
    },
    {
      type: "attribute",
      el: "#toph > a > img",
      test: { item: "src", value: "images/toph.png" },
      instructions: "Update the src attribute with 'images/toph.png'",
      hint: "Add the src=&quot;images/toph.png&quot;"
    },
    {
      type: "attribute",
      el: "#toph > a > img",
      test: { item: "className", value: "character_img" },
      instructions: "Give the new &lt;img src='' /&gt; tag a class of 'character_img'",
      hint: "Add class=&quot;character_img&quot;"
    },
    {
      type: "children",
      el: "#toph",
      test: { item: "a", value: 1 },
      instructions: "Add a new &lt;a href=''&gt;&lt;/a&gt; inside the &lt;div&gt;&lt;/div&gt;",
      hint: "Create another <a href=&quot;#&quot;></a>"
    },
    {
      type: "attribute",
      el: "#toph > a:last-child",
      test: { item: "className", value: "character_name" },
      instructions: "Give that new &lt;a href=''&gt;&lt;/a&gt; tag a class of 'character_name'",
      hint: "Add class=&quot;character_name&quot;"
    },
    {
      type: "attribute",
      el: "#toph > a:last-child",
      test: { item: "innerText", value: "Toph" },
      instructions: "Make sure 'Toph' is in the &lt;a&gt;&lt;/a&gt;",
      hint: "Add 'Toph' inside the new anchor"
    }
  ]
};

const zuko = {
  desc: "We are going to need a lot of the same mark up as before. Can you spot the differences?",
  example: `&lt;div id="zuko" class="character"&gt;
    &lt;a href="#"&gt;
        &lt;img src="images/zuko.png" alt="" class="character_img"&gt;
    &lt;/a&gt;
    &lt;a href="#" class="character_name"&gt;Zuko&lt;/a&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".characters",
      test: { item: "div", value: 5 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; inside the characters div",
      hint: "Add <div></div>"
    },
    {
      type: "attribute",
      el: "#zuko",
      test: { item: "id", value: "zuko" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; an id of 'zuko'",
      hint: "Add id=&quot;zuko&quot; to the div just created."
    },
    {
      type: "attribute",
      el: "#zuko",
      test: { item: "className", value: "character" },
      instructions: "Also, give that same &lt;div&gt;&lt;/div&gt; a class of 'character'",
      hint: "Add class=&quot;character&quot; to the same div."
    },
    {
      type: "children",
      el: "#zuko",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href=''&gt;&lt;/a&gt; tag inside the &lt;div&gt;",
      hint: "Add <a href=&quot;#&quot;></a>"
    },
    {
      type: "children",
      el: "#zuko > a",
      test: { item: "img", value: 1 },
      instructions: "Add an &lt;img src='' /&gt; to that &lt;a href=''&gt;&lt;/a&gt; tag",
      hint: "Add <img src=&quot;&quot;/> inside the new anchor tag"
    },
    {
      type: "attribute",
      el: "#zuko > a > img",
      test: { item: "src", value: "images/zuko.png" },
      instructions: "Update the src attribute with 'images/zuko.png'",
      hint: "Add the src=&quot;images/zuko.png&quot;"
    },
    {
      type: "attribute",
      el: "#zuko > a > img",
      test: { item: "className", value: "character_img" },
      instructions: "Give the new &lt;img src='' /&gt; tag a class of 'character_img'",
      hint: "Add class=&quot;character_img&quot;"
    },
    {
      type: "children",
      el: "#zuko",
      test: { item: "a", value: 1 },
      instructions: "Add a new &lt;a href=''&gt;&lt;/a&gt; inside the &lt;div&gt;&lt;/div&gt;",
      hint: "Create another <a href=&quot;#&quot;></a>"
    },
    {
      type: "attribute",
      el: "#zuko > a:last-child",
      test: { item: "className", value: "character_name" },
      instructions: "Give that new &lt;a href=''&gt;&lt;/a&gt; tag a class of 'character_name'",
      hint: "Add class=&quot;character_name&quot;"
    },
    {
      type: "attribute",
      el: "#zuko > a:last-child",
      test: { item: "innerText", value: "Zuko" },
      instructions: "Make sure 'Zuko' is in the &lt;a&gt;&lt;/a&gt;",
      hint: "Add 'Zuko' inside the new anchor"
    }
  ]
};

const ihro = {
  desc: "We are going to need a lot of the same mark up as before. Can you spot the differences?",
  example: `&lt;div id="ihro" class="character"&gt;
    &lt;a href="#"&gt;
        &lt;img src="images/ihro.png" alt="" class="character_img"&gt;
    &lt;/a&gt;
    &lt;a href="#" class="character_name"&gt;Ihro&lt;/a&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".characters",
      test: { item: "div", value: 5 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; inside the characters div",
      hint: "Add <div></div>"
    },
    {
      type: "attribute",
      el: "#ihro",
      test: { item: "id", value: "ihro" },
      instructions: "Give that &lt;div&gt; an id of 'ihro'",
      hint: "Add id=&quot;ihro&quot; to the div just created."
    },
    {
      type: "attribute",
      el: "#ihro",
      test: { item: "className", value: "character" },
      instructions: "Also, give that same &lt;div&gt; a class of 'character'",
      hint: "Add class=&quot;character&quot; to the same <div>."
    },
    {
      type: "children",
      el: "#ihro",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href=''&gt;&lt;/a&gt; tag inside the &lt;div&gt;",
      hint: "Add <a href=&quot;#&quot;></a>"
    },
    {
      type: "children",
      el: "#ihro > a",
      test: { item: "img", value: 1 },
      instructions: "Add an &lt;img src='' /&gt; to that &lt;a href=''&gt;&lt;/a&gt; tag",
      hint: "Add &lt;img src=&quot;&quot;/&gt; inside the new anchor tag"
    },
    {
      type: "attribute",
      el: "#ihro > a > img",
      test: { item: "src", value: "images/ihro.png" },
      instructions: "Update the src attribute with 'images/ihro.png'",
      hint: "Add the src=&quot;images/ihro.png&quot;"
    },
    {
      type: "attribute",
      el: "#ihro > a > img",
      test: { item: "className", value: "character_img" },
      instructions: "Give the new &lt;img src='' /&gt; tag a class of 'character_img'",
      hint: "Add class=&quot;character_img&quot;"
    },
    {
      type: "children",
      el: "#ihro",
      test: { item: "a", value: 1 },
      instructions: "Add a new &lt;a href=''&gt;&lt;/a&gt; inside the &lt;div&gt;",
      hint: "Create another <a href=&quot;#&quot;></a>"
    },
    {
      type: "attribute",
      el: "#ihro > a:last-child",
      test: { item: "className", value: "character_name" },
      instructions: "Give that new &lt;a href=''&gt;&lt;/a&gt; tag a class of 'character_name'",
      hint: "Add class=&quot;character_name&quot;"
    },
    {
      type: "attribute",
      el: "#ihro > a:last-child",
      test: { item: "innerText", value: "Ihro" },
      instructions: "Make sure 'Ihro' is in the &lt;a&gt;&lt;/a&gt;",
      hint: "Add 'Ihro' inside the new anchor"
    }
  ]
};


const steps = [start, aang, katara, sokka, appa, momo, toph, zuko, ihro];
// Pass the rules into this function and let the magic happen in the object
window.load = Checker.loadTests(steps);
