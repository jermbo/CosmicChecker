const start = {
  desc: "We need to create a couple of containing divs to hold our header information and our main body content",
  example: `&lt;div class="header"&gt;
  &lt;h1&gt;These are my favorite movies&lt;/h1&gt;
&lt;/div&gt;
&lt;div class="movies"&gt;&lt;/div&gt;`,
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
      el: ".header",
      test: { item: "className", value: "header" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'header'",
      hint: "Add class=&quot;header&quot; to the <div>",
    },
    {
      type: "children",
      el: ".header",
      test: { item: "h1", value: 1 },
      instructions: "Create an &lt;h1&gt;&lt;h1&gt; tag inside the header &lt;div&gt;&lt;/div&gt;",
      hint: "Add <h1></h1> inside header",
    },
    {
      type: "attribute",
      el: "h1",
      test: { item: "innerText", value: "These are my favorite movies" },
      instructions: "Make the text say 'These are my favorite movies'",
      hint: "Add 'These are my favorite movies' between the h1 tags",
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
      el: ".movies",
      test: { item: "className", value: "movies" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of movies",
      hint: "Add class=&quot;movies&quot; to the &lt;div&gt;",
    },
  ],
};

const spiderverse = {
  desc:
    "In this portion we are going to create all the markup we are going to need to build a individual movie. You are going to need a few things; div, h2, img, class, src, and text",
  example: `&lt;div id="spiderverse" class="movie"&gt
  &lt;img src="images/spiderverse.jpg" class="movie_image" /&gt;
  &lt;div class="movie_details"&gt
    &lt;h2 class="movie_title"&gt;Spiderverse&lt;/h2&gt;
    &lt;p class="movie_desc"&gtBest movie ever!&lt;/p&gt;
    &lt;a class="movie_link" href="#"&gt;Read More&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".movies",
      test: { item: "div", value: 1 },
      instructions: "Create new a &lt;div&gt;&lt;/div&gt; inside the movies &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#spiderverse",
      test: { item: "id", value: "spiderverse" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of spiderverse",
      hint: "Add id=&quot;spiderverse&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "attribute",
      el: "#spiderverse",
      test: { item: "className", value: "movie" },
      instructions: "Also, give that &lt;div&gt;&lt;/div&gt; a class of movie",
      hint: "Add class=&quot;movie&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "children",
      el: "#spiderverse",
      test: { item: "img", value: 1 },
      instructions: "Create an &lt;img src=&quot;&quot; /&gt; tag inside that &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;img src=&quot;&quot; /&gt;",
    },
    {
      type: "attribute",
      el: "#spiderverse img",
      test: { item: "className", value: "movie_image" },
      instructions: "Give that &lt;img src=&quot;&quot; /&gt; a class of 'movie_image'",
      hint: "Add &lt;img class=&quot;movie_image&quot; /&gt;",
    },
    {
      type: "attribute",
      el: "#spiderverse img",
      test: { item: "src", value: "images/spiderverse.jpg" },
      instructions: "Add 'images/spiderverse.jpg' to the src attribute",
      hint: "Add <img src=&quot;images/spiderverse.jpg&quot; />",
    },
    {
      type: "children",
      el: "#spiderverse",
      test: { item: "div", value: 1 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; tag next to the &lt;img src=&quot;&quot; /&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#spiderverse .movie_details",
      test: { item: "className", value: "movie_details" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'movie_details'",
      hint: "Add &lt;div class=&quot;movie_details&quot;&gt;&lt;/div&gt;",
    },
    {
      type: "children",
      el: "#spiderverse .movie_details",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the new &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#spiderverse .movie_details h2",
      test: { item: "className", value: "movie_title" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'movie_title'",
      hint: "Add &lt;h2 class=&quot;movie_title&quot;&gt;&lt;/h2&gt;",
    },
    {
      type: "attribute",
      el: "#spiderverse .movie_details h2",
      test: { item: "innerText", value: "Spiderverse" },
      instructions: "Add the text of 'Spiderverse' to the &lt;h2&gt;&lt;/h2&gt;",
      hint: "Add &lt;h2&gt;spiderverse&lt;/h2&gt;",
    },
    {
      type: "children",
      el: "#spiderverse .movie_details",
      test: { item: "p", value: 1 },
      instructions: "Create a &lt;p&gt;&lt;/p&gt; tag in that to the &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;p&gt;&lt;/p&gt;",
    },
    {
      type: "attribute",
      el: "#spiderverse .movie_details p",
      test: { item: "className", value: "movie_desc" },
      instructions: "Give that &lt;p&gt;&lt;/p&gt; tag a class of 'movie_desc'",
      hint: "Add &lt;p class=&quot;movie_desc&quot;&gt;&lt;/p&gt;",
    },
    {
      type: "attribute",
      el: "#spiderverse .movie_details p",
      test: { item: "innerText", value: "Best movie ever!" },
      instructions: "Write 'Best movie ever!' in the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add &lt;p&gt;Best movie ever!&lt;/p&gt;",
    },
    {
      type: "children",
      el: "#spiderverse .movie_details",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href='#'&gt;&lt;/a&gt; tag next to the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add &lt;a href=&quot;&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#spiderverse div a",
      test: { item: "className", value: "movie_link" },
      instructions: "Give that &lt;a href='#'&gt;&lt;/a&gt; a class of 'movie_link'",
      hint: "Add &lt;a class=&quot;movie_link&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#spiderverse div a",
      test: { item: "innerText", value: "Read More" },
      instructions: "Add the text 'Read More' to that a tag",
      hint: "Add &lt;a class=&quot;Read More&quot;&gt;&lt;/a&gt;",
    },
  ],
};

const ralph = {
  desc:
    "Ralph Breaks the Internet is going to contain a lot of the same markup you created last time. Can you spot the differences?",
  example: `&lt;div id="ralph" class="movie"&gt
  &lt;img src="images/ralph.jpg" class="movie_image" /&gt;
  &lt;div class="movie_details"&gt
    &lt;h2 class="movie_title"&gt;Ralph Breaks the Internet&lt;/h2&gt;
    &lt;p class="movie_desc"&gtBest movie ever!&lt;/p&gt;
    &lt;a class="movie_link" href="#"&gt;Read More&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".movies",
      test: { item: "div", value: 2 },
      instructions: "Create new a &lt;div&gt;&lt;/div&gt; inside the movies &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#ralph",
      test: { item: "id", value: "ralph" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of ralph",
      hint: "Add id=&quot;ralph&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "attribute",
      el: "#ralph",
      test: { item: "className", value: "movie" },
      instructions: "Also, give that &lt;div&gt;&lt;/div&gt; a class of movie",
      hint: "Add class=&quot;movie&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "children",
      el: "#ralph",
      test: { item: "img", value: 1 },
      instructions: "Create an &lt;img src=&quot;&quot; /&gt; tag inside that &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;img src=&quot;&quot; /&gt;",
    },
    {
      type: "attribute",
      el: "#ralph img",
      test: { item: "className", value: "movie_image" },
      instructions: "Give that &lt;img src=&quot;&quot; /&gt; a class of 'movie_image'",
      hint: "Add &lt;img class=&quot;movie_image&quot; /&gt;",
    },
    {
      type: "attribute",
      el: "#ralph img",
      test: { item: "src", value: "images/ralph.jpg" },
      instructions: "Add 'images/ralph.jpg' to the src attribute",
      hint: "Add <img src=&quot;images/ralph.jpg&quot; />",
    },
    {
      type: "children",
      el: "#ralph",
      test: { item: "div", value: 1 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; tag next to the &lt;img src=&quot;&quot; /&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#ralph .movie_details",
      test: { item: "className", value: "movie_details" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'movie_details'",
      hint: "Add &lt;div class=&quot;movie_details&quot;&gt;&lt;/div&gt;",
    },
    {
      type: "children",
      el: "#ralph .movie_details",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the new &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#ralph .movie_details h2",
      test: { item: "className", value: "movie_title" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'movie_title'",
      hint: "Add &lt;h2 class=&quot;movie_title&quot;&gt;&lt;/h2&gt;",
    },
    {
      type: "attribute",
      el: "#ralph .movie_details h2",
      test: { item: "innerText", value: "Ralph Breaks the Internet" },
      instructions: "Add the text of 'Ralph Breaks the Internet' to the &lt;h2&gt;&lt;/h2&gt;",
      hint: "Add &lt;h2&gt;ralph&lt;/h2&gt;",
    },
    {
      type: "children",
      el: "#ralph .movie_details",
      test: { item: "p", value: 1 },
      instructions: "Create a &lt;p&gt;&lt;/p&gt; tag in that to the &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;p&gt;&lt;/p&gt;",
    },
    {
      type: "attribute",
      el: "#ralph .movie_details p",
      test: { item: "className", value: "movie_desc" },
      instructions: "Give that &lt;p&gt;&lt;/p&gt; tag a class of 'movie_desc'",
      hint: "Add &lt;p class=&quot;movie_desc&quot;&gt;&lt;/p&gt;",
    },
    {
      type: "attribute",
      el: "#ralph .movie_details p",
      test: { item: "innerText", value: "Best movie ever!" },
      instructions: "Write 'Best movie ever!' in the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add &lt;p&gt;Best movie ever!&lt;/p&gt;",
    },
    {
      type: "children",
      el: "#ralph .movie_details",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href='#'&gt;&lt;/a&gt; tag next to the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add &lt;a href=&quot;&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#ralph div a",
      test: { item: "className", value: "movie_link" },
      instructions: "Give that &lt;a href='#'&gt;&lt;/a&gt; a class of 'movie_link'",
      hint: "Add &lt;a class=&quot;movie_link&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#ralph div a",
      test: { item: "innerText", value: "Read More" },
      instructions: "Add the text 'Read More' to that a tag",
      hint: "Add &lt;a class=&quot;Read More&quot;&gt;&lt;/a&gt;",
    },
  ],
};

const incredibles2 = {
  desc:
    "Incredibles 2 is going to contain a lot of the same markup you created last time. Can you spot the differences?",
  example: `&lt;div id="incredibles2" class="movie"&gt
  &lt;img src="images/incredibles2.jpg" class="movie_image" /&gt;
  &lt;div class="movie_details"&gt
    &lt;h2 class="movie_title"&gt;Incredibles 2&lt;/h2&gt;
    &lt;p class="movie_desc"&gtBest movie ever!&lt;/p&gt;
    &lt;a class="movie_link" href="#"&gt;Read More&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".movies",
      test: { item: "div", value: 3 },
      instructions: "Create new a &lt;div&gt;&lt;/div&gt; inside the movies &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#incredibles2",
      test: { item: "id", value: "incredibles2" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of incredibles2",
      hint: "Add id=&quot;incredibles2&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "attribute",
      el: "#incredibles2",
      test: { item: "className", value: "movie" },
      instructions: "Also, give that &lt;div&gt;&lt;/div&gt; a class of movie",
      hint: "Add class=&quot;movie&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "children",
      el: "#incredibles2",
      test: { item: "img", value: 1 },
      instructions: "Create an &lt;img src=&quot;&quot; /&gt; tag inside that &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;img src=&quot;&quot; /&gt;",
    },
    {
      type: "attribute",
      el: "#incredibles2 img",
      test: { item: "className", value: "movie_image" },
      instructions: "Give that &lt;img src=&quot;&quot; /&gt; a class of 'movie_image'",
      hint: "Add &lt;img class=&quot;movie_image&quot; /&gt;",
    },
    {
      type: "attribute",
      el: "#incredibles2 img",
      test: { item: "src", value: "images/incredibles2.jpg" },
      instructions: "Add 'images/incredibles2.jpg' to the src attribute",
      hint: "Add <img src=&quot;images/incredibles2.jpg&quot; />",
    },
    {
      type: "children",
      el: "#incredibles2",
      test: { item: "div", value: 1 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; tag next to the &lt;img src=&quot;&quot; /&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#incredibles2 .movie_details",
      test: { item: "className", value: "movie_details" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'movie_details'",
      hint: "Add &lt;div class=&quot;movie_details&quot;&gt;&lt;/div&gt;",
    },
    {
      type: "children",
      el: "#incredibles2 .movie_details",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the new &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#incredibles2 .movie_details h2",
      test: { item: "className", value: "movie_title" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'movie_title'",
      hint: "Add &lt;h2 class=&quot;movie_title&quot;&gt;&lt;/h2&gt;",
    },
    {
      type: "attribute",
      el: "#incredibles2 .movie_details h2",
      test: { item: "innerText", value: "Incredibles 2" },
      instructions: "Add the text of 'Incredibles 2' to the &lt;h2&gt;&lt;/h2&gt;",
      hint: "Add &lt;h2&gt;incredibles2&lt;/h2&gt;",
    },
    {
      type: "children",
      el: "#incredibles2 .movie_details",
      test: { item: "p", value: 1 },
      instructions: "Create a &lt;p&gt;&lt;/p&gt; tag in that to the &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;p&gt;&lt;/p&gt;",
    },
    {
      type: "attribute",
      el: "#incredibles2 .movie_details p",
      test: { item: "className", value: "movie_desc" },
      instructions: "Give that &lt;p&gt;&lt;/p&gt; tag a class of 'movie_desc'",
      hint: "Add &lt;p class=&quot;movie_desc&quot;&gt;&lt;/p&gt;",
    },
    {
      type: "attribute",
      el: "#incredibles2 .movie_details p",
      test: { item: "innerText", value: "Best movie ever!" },
      instructions: "Write 'Best movie ever!' in the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add &lt;p&gt;Best movie ever!&lt;/p&gt;",
    },
    {
      type: "children",
      el: "#incredibles2 .movie_details",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href='#'&gt;&lt;/a&gt; tag next to the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add &lt;a href=&quot;&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#incredibles2 div a",
      test: { item: "className", value: "movie_link" },
      instructions: "Give that &lt;a href='#'&gt;&lt;/a&gt; a class of 'movie_link'",
      hint: "Add &lt;a class=&quot;movie_link&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#incredibles2 div a",
      test: { item: "innerText", value: "Read More" },
      instructions: "Add the text 'Read More' to that a tag",
      hint: "Add &lt;a class=&quot;Read More&quot;&gt;&lt;/a&gt;",
    },
  ],
};

const teentitans = {
  desc:
    "Teen Titans Go! to the Movies is going to contain a lot of the same markup you created last time. Can you spot the differences?",
  example: `&lt;div id="teentitans" class="movie"&gt
  &lt;img src="images/teentitans.jpg" class="movie_image" /&gt;
  &lt;div class="movie_details"&gt
    &lt;h2 class="movie_title"&gt;Teen Titans Go! to the Movies&lt;/h2&gt;
    &lt;p class="movie_desc"&gtBest movie ever!&lt;/p&gt;
    &lt;a class="movie_link" href="#"&gt;Read More&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".movies",
      test: { item: "div", value: 4 },
      instructions: "Create new a &lt;div&gt;&lt;/div&gt; inside the movies &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#teentitans",
      test: { item: "id", value: "teentitans" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of teentitans",
      hint: "Add id=&quot;teentitans&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "attribute",
      el: "#teentitans",
      test: { item: "className", value: "movie" },
      instructions: "Also, give that &lt;div&gt;&lt;/div&gt; a class of movie",
      hint: "Add class=&quot;movie&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "children",
      el: "#teentitans",
      test: { item: "img", value: 1 },
      instructions: "Create an &lt;img src=&quot;&quot; /&gt; tag inside that &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;img src=&quot;&quot; /&gt;",
    },
    {
      type: "attribute",
      el: "#teentitans img",
      test: { item: "className", value: "movie_image" },
      instructions: "Give that &lt;img src=&quot;&quot; /&gt; a class of 'movie_image'",
      hint: "Add &lt;img class=&quot;movie_image&quot; /&gt;",
    },
    {
      type: "attribute",
      el: "#teentitans img",
      test: { item: "src", value: "images/teentitans.jpg" },
      instructions: "Add 'images/teentitans.jpg' to the src attribute",
      hint: "Add <img src=&quot;images/teentitans.jpg&quot; />",
    },
    {
      type: "children",
      el: "#teentitans",
      test: { item: "div", value: 1 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; tag next to the &lt;img src=&quot;&quot; /&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#teentitans .movie_details",
      test: { item: "className", value: "movie_details" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'movie_details'",
      hint: "Add &lt;div class=&quot;movie_details&quot;&gt;&lt;/div&gt;",
    },
    {
      type: "children",
      el: "#teentitans .movie_details",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the new &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#teentitans .movie_details h2",
      test: { item: "className", value: "movie_title" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'movie_title'",
      hint: "Add &lt;h2 class=&quot;movie_title&quot;&gt;&lt;/h2&gt;",
    },
    {
      type: "attribute",
      el: "#teentitans .movie_details h2",
      test: { item: "innerText", value: "Teen Titans Go! to the Movies" },
      instructions: "Add the text of 'Teen Titans Go! to the Movies' to the &lt;h2&gt;&lt;/h2&gt;",
      hint: "Add &lt;h2&gt;teentitans&lt;/h2&gt;",
    },
    {
      type: "children",
      el: "#teentitans .movie_details",
      test: { item: "p", value: 1 },
      instructions: "Create a &lt;p&gt;&lt;/p&gt; tag in that to the &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;p&gt;&lt;/p&gt;",
    },
    {
      type: "attribute",
      el: "#teentitans .movie_details p",
      test: { item: "className", value: "movie_desc" },
      instructions: "Give that &lt;p&gt;&lt;/p&gt; tag a class of 'movie_desc'",
      hint: "Add &lt;p class=&quot;movie_desc&quot;&gt;&lt;/p&gt;",
    },
    {
      type: "attribute",
      el: "#teentitans .movie_details p",
      test: { item: "innerText", value: "Best movie ever!" },
      instructions: "Write 'Best movie ever!' in the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add &lt;p&gt;Best movie ever!&lt;/p&gt;",
    },
    {
      type: "children",
      el: "#teentitans .movie_details",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href='#'&gt;&lt;/a&gt; tag next to the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add &lt;a href=&quot;&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#teentitans div a",
      test: { item: "className", value: "movie_link" },
      instructions: "Give that &lt;a href='#'&gt;&lt;/a&gt; a class of 'movie_link'",
      hint: "Add &lt;a class=&quot;movie_link&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#teentitans div a",
      test: { item: "innerText", value: "Read More" },
      instructions: "Add the text 'Read More' to that a tag",
      hint: "Add &lt;a class=&quot;Read More&quot;&gt;&lt;/a&gt;",
    },
  ],
};

const peterrabbit = {
  desc:
    "Peter Rabbit is going to contain a lot of the same markup you created last time. Can you spot the differences?",
  example: `&lt;div id="peterrabbit" class="movie"&gt
  &lt;img src="images/peterrabbit.jpg" class="movie_image" /&gt;
  &lt;div class="movie_details"&gt
    &lt;h2 class="movie_title"&gt;Peter Rabbit2&lt;/h2&gt;
    &lt;p class="movie_desc"&gtBest movie ever!&lt;/p&gt;
    &lt;a class="movie_link" href="#"&gt;Read More&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".movies",
      test: { item: "div", value: 5 },
      instructions: "Create new a &lt;div&gt;&lt;/div&gt; inside the movies &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#peterrabbit",
      test: { item: "id", value: "peterrabbit" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of peterrabbit",
      hint: "Add id=&quot;peterrabbit&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "attribute",
      el: "#peterrabbit",
      test: { item: "className", value: "movie" },
      instructions: "Also, give that &lt;div&gt;&lt;/div&gt; a class of movie",
      hint: "Add class=&quot;movie&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "children",
      el: "#peterrabbit",
      test: { item: "img", value: 1 },
      instructions: "Create an &lt;img src=&quot;&quot; /&gt; tag inside that &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;img src=&quot;&quot; /&gt;",
    },
    {
      type: "attribute",
      el: "#peterrabbit img",
      test: { item: "className", value: "movie_image" },
      instructions: "Give that &lt;img src=&quot;&quot; /&gt; a class of 'movie_image'",
      hint: "Add &lt;img class=&quot;movie_image&quot; /&gt;",
    },
    {
      type: "attribute",
      el: "#peterrabbit img",
      test: { item: "src", value: "images/peterrabbit.jpg" },
      instructions: "Add 'images/peterrabbit.jpg' to the src attribute",
      hint: "Add <img src=&quot;images/peterrabbit.jpg&quot; />",
    },
    {
      type: "children",
      el: "#peterrabbit",
      test: { item: "div", value: 1 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; tag next to the &lt;img src=&quot;&quot; /&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#peterrabbit .movie_details",
      test: { item: "className", value: "movie_details" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'movie_details'",
      hint: "Add &lt;div class=&quot;movie_details&quot;&gt;&lt;/div&gt;",
    },
    {
      type: "children",
      el: "#peterrabbit .movie_details",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the new &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#peterrabbit .movie_details h2",
      test: { item: "className", value: "movie_title" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'movie_title'",
      hint: "Add &lt;h2 class=&quot;movie_title&quot;&gt;&lt;/h2&gt;",
    },
    {
      type: "attribute",
      el: "#peterrabbit .movie_details h2",
      test: { item: "innerText", value: "Peter Rabbit" },
      instructions: "Add the text of 'Peter Rabbit' to the &lt;h2&gt;&lt;/h2&gt;",
      hint: "Add &lt;h2&gt;peterrabbit&lt;/h2&gt;",
    },
    {
      type: "children",
      el: "#peterrabbit .movie_details",
      test: { item: "p", value: 1 },
      instructions: "Create a &lt;p&gt;&lt;/p&gt; tag in that to the &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;p&gt;&lt;/p&gt;",
    },
    {
      type: "attribute",
      el: "#peterrabbit .movie_details p",
      test: { item: "className", value: "movie_desc" },
      instructions: "Give that &lt;p&gt;&lt;/p&gt; tag a class of 'movie_desc'",
      hint: "Add &lt;p class=&quot;movie_desc&quot;&gt;&lt;/p&gt;",
    },
    {
      type: "attribute",
      el: "#peterrabbit .movie_details p",
      test: { item: "innerText", value: "Best movie ever!" },
      instructions: "Write 'Best movie ever!' in the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add &lt;p&gt;Best movie ever!&lt;/p&gt;",
    },
    {
      type: "children",
      el: "#peterrabbit .movie_details",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href='#'&gt;&lt;/a&gt; tag next to the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add &lt;a href=&quot;&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#peterrabbit div a",
      test: { item: "className", value: "movie_link" },
      instructions: "Give that &lt;a href='#'&gt;&lt;/a&gt; a class of 'movie_link'",
      hint: "Add &lt;a class=&quot;movie_link&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#peterrabbit div a",
      test: { item: "innerText", value: "Read More" },
      instructions: "Add the text 'Read More' to that a tag",
      hint: "Add &lt;a class=&quot;Read More&quot;&gt;&lt;/a&gt;",
    },
  ],
};

const titobirds = {
  desc:
    "Tito and the Birds is going to contain a lot of the same markup you created last time. Can you spot the differences?",
  example: `&lt;div id="titobirds" class="movie"&gt
  &lt;img src="images/titobirds.jpg" class="movie_image" /&gt;
  &lt;div class="movie_details"&gt
    &lt;h2 class="movie_title"&gt;Tito and the Birds&lt;/h2&gt;
    &lt;p class="movie_desc"&gtBest movie ever!&lt;/p&gt;
    &lt;a class="movie_link" href="#"&gt;Read More&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".movies",
      test: { item: "div", value: 5 },
      instructions: "Create new a &lt;div&gt;&lt;/div&gt; inside the movies &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#titobirds",
      test: { item: "id", value: "titobirds" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of titobirds",
      hint: "Add id=&quot;titobirds&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "attribute",
      el: "#titobirds",
      test: { item: "className", value: "movie" },
      instructions: "Also, give that &lt;div&gt;&lt;/div&gt; a class of movie",
      hint: "Add class=&quot;movie&quot; to the &lt;div&gt; just created.",
    },
    {
      type: "children",
      el: "#titobirds",
      test: { item: "img", value: 1 },
      instructions: "Create an &lt;img src=&quot;&quot; /&gt; tag inside that &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;img src=&quot;&quot; /&gt;",
    },
    {
      type: "attribute",
      el: "#titobirds img",
      test: { item: "className", value: "movie_image" },
      instructions: "Give that &lt;img src=&quot;&quot; /&gt; a class of 'movie_image'",
      hint: "Add &lt;img class=&quot;movie_image&quot; /&gt;",
    },
    {
      type: "attribute",
      el: "#titobirds img",
      test: { item: "src", value: "images/titobirds.jpg" },
      instructions: "Add 'images/titobirds.jpg' to the src attribute",
      hint: "Add <img src=&quot;images/titobirds.jpg&quot; />",
    },
    {
      type: "children",
      el: "#titobirds",
      test: { item: "div", value: 1 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; tag next to the &lt;img src=&quot;&quot; /&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#titobirds .movie_details",
      test: { item: "className", value: "movie_details" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'movie_details'",
      hint: "Add &lt;div class=&quot;movie_details&quot;&gt;&lt;/div&gt;",
    },
    {
      type: "children",
      el: "#titobirds .movie_details",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the new &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;div&gt;&lt;/div&gt;",
    },
    {
      type: "attribute",
      el: "#titobirds .movie_details h2",
      test: { item: "className", value: "movie_title" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'movie_title'",
      hint: "Add &lt;h2 class=&quot;movie_title&quot;&gt;&lt;/h2&gt;",
    },
    {
      type: "attribute",
      el: "#titobirds .movie_details h2",
      test: { item: "innerText", value: "Tito and the Birds" },
      instructions: "Add the text of 'Tito and the Birds' to the &lt;h2&gt;&lt;/h2&gt;",
      hint: "Add &lt;h2&gt;titobirds&lt;/h2&gt;",
    },
    {
      type: "children",
      el: "#titobirds .movie_details",
      test: { item: "p", value: 1 },
      instructions: "Create a &lt;p&gt;&lt;/p&gt; tag in that to the &lt;div&gt;&lt;/div&gt;",
      hint: "Add &lt;p&gt;&lt;/p&gt;",
    },
    {
      type: "attribute",
      el: "#titobirds .movie_details p",
      test: { item: "className", value: "movie_desc" },
      instructions: "Give that &lt;p&gt;&lt;/p&gt; tag a class of 'movie_desc'",
      hint: "Add &lt;p class=&quot;movie_desc&quot;&gt;&lt;/p&gt;",
    },
    {
      type: "attribute",
      el: "#titobirds .movie_details p",
      test: { item: "innerText", value: "Best movie ever!" },
      instructions: "Write 'Best movie ever!' in the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add &lt;p&gt;Best movie ever!&lt;/p&gt;",
    },
    {
      type: "children",
      el: "#titobirds .movie_details",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href='#'&gt;&lt;/a&gt; tag next to the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add &lt;a href=&quot;&quot;&gt;&lt;/a&gt;",
    },
    {
      type: "attribute",
      el: "#titobirds div a",
      test: { item: "className", value: "movie_link" },
      instructions: "Give that &lt;a href='#'&gt;&lt;/a&gt; a class of 'movie_link'",
      hint: "Add &lt;a class=&quot;movie_link&quot;&gt;&lt;/a&gt;",
    },

    {
      type: "attribute",
      el: "#titobirds div a",
      test: { item: "innerText", value: "Read More" },
      instructions: "Add the text 'Read More' to that a tag",
      hint: "Add &lt;a class=&quot;Read More&quot;&gt;&lt;/a&gt;",
    },
  ],
};

const steps = [start, spiderverse, ralph, incredibles2, teentitans, peterrabbit, titobirds];
// Pass the rules into this function and let the magic happen in the object
window.load = Checker.loadTests(steps);
