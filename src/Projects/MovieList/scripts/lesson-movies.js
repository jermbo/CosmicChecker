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
      hint: "Add <div></div>",
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
      hint: "Add <div></div>",
    },
    {
      type: "attribute",
      el: ".movies",
      test: { item: "className", value: "movies" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of movies",
      hint: "Add class=&quot;movies&quot; to the <div>",
    },
  ],
};

const looper = {
  desc:
    "In this portion we are going to create all the markup we are going to need to build a individual movie. You are going to need a few things; div, h2, img, class, src, and text",
  example: `&lt;div id="looper" class="movie"&gt
  &lt;img src="images/looper.jpg" class="movie_image" /&gt;
  &lt;div class="movie_details"&gt
    &lt;h2 class="movie_title"&gt;Looper&lt;/h2&gt;
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
      hint: "Add <div></div>",
    },
    {
      type: "attribute",
      el: "#looper",
      test: { item: "id", value: "looper" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of looper",
      hint: "Add id=&quot;looper&quot; to the <div> just created.",
    },
    {
      type: "attribute",
      el: "#looper",
      test: { item: "className", value: "movie" },
      instructions: "Also, give that &lt;div&gt;&lt;/div&gt; a class of movie",
      hint: "Add class=&quot;movie&quot; to the <div> just created.",
    },
    {
      type: "children",
      el: "#looper",
      test: { item: "img", value: 1 },
      instructions: "Create an &lt;img src='' /&gt; tag inside that &lt;div&gt;&lt;/div&gt;",
      hint: "Add <img src=&quot;&quot; />",
    },
    {
      type: "attribute",
      el: "#looper img",
      test: { item: "className", value: "movie_image" },
      instructions: "Give that &lt;img src='' /&gt; a class of 'movie_image'",
      hint: "Add <img class=&quot;movie_image&quot; />",
    },
    {
      type: "attribute",
      el: "#looper img",
      test: { item: "src", value: "images/looper.jpg" },
      instructions: "Add 'images/looper.jpg' to the src attribute",
      hint: "Add <img src=&quot;images/looper.jpg&quot; />",
    },
    {
      type: "children",
      el: "#looper",
      test: { item: "div", value: 1 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; tag next to the &lt;img src='' /&gt;",
      hint: "Add <div></div>",
    },
    {
      type: "attribute",
      el: "#looper .movie_details",
      test: { item: "className", value: "movie_details" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'movie_details'",
      hint: "Add <div class=&quot;movie_details&quot;></div>",
    },
    {
      type: "children",
      el: "#looper .movie_details",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the new &lt;div&gt;&lt;/div&gt;",
      hint: "Add <div></div>",
    },
    {
      type: "attribute",
      el: "#looper .movie_details h2",
      test: { item: "className", value: "movie_title" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'movie_title'",
      hint: "Add <h2 class=&quot;movie_title&quot;></h2>",
    },
    {
      type: "attribute",
      el: "#looper .movie_details h2",
      test: { item: "innerText", value: "Looper" },
      instructions: "Add the text of 'Looper' to the &lt;h2&gt;&lt;/h2&gt;",
      hint: "Add <h2>Looper</h2>",
    },
    {
      type: "children",
      el: "#looper .movie_details",
      test: { item: "p", value: 1 },
      instructions: "Create a &lt;p&gt;&lt;/p&gt; tag in that to the &lt;div&gt;&lt;/div&gt;",
      hint: "Add <p></p>",
    },
    {
      type: "attribute",
      el: "#looper .movie_details p",
      test: { item: "className", value: "movie_desc" },
      instructions: "Give that &lt;p&gt;&lt;/p&gt; tag a class of 'movie_desc'",
      hint: "Add <p class=&quot;movie_desc&quot;></p>",
    },
    {
      type: "attribute",
      el: "#looper .movie_details p",
      test: { item: "innerText", value: "Best movie ever!" },
      instructions: "Write 'Best movie ever!' in the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add <p>Best movie ever!</p>",
    },
    {
      type: "children",
      el: "#looper .movie_details",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href=''&gt;&lt;/a&gt; tag next to the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add <a href=&quot;&quot;></a>",
    },
    {
      type: "attribute",
      el: "#looper div a",
      test: { item: "className", value: "movie_link" },
      instructions: "Give that &lt;a href=''&gt;&lt;/a&gt; a class of 'movie_link'",
      hint: "Add <a class=&quot;movie_link&quot;></a>",
    },
  ],
};

const wonderWoman = {
  desc:
    "Wonder Woman is going to contain a lot of the same markup you created last time. Can you spot the differences?",
  example: `&lt;div id="wonderwoman" class="movie"&gt
  &lt;img src="images/wonder_woman.jpg" class="movie_image" /&gt;
  &lt;div class="movie_details"&gt
    &lt;h2 class="movie_title"&gt;Wonder Woman&lt;/h2&gt;
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
      hint: "Add <div></div>",
    },
    {
      type: "attribute",
      el: "#wonderwoman",
      test: { item: "id", value: "wonderwoman" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of wonderwoman",
      hint: "Add id=&quot;wonderwoman&quot; to the <div> just created.",
    },
    {
      type: "attribute",
      el: "#wonderwoman",
      test: { item: "className", value: "movie" },
      instructions: "Also, give that &lt;div&gt;&lt;/div&gt; a class of movie",
      hint: "Add class=&quot;movie&quot; to the <div> just created.",
    },
    {
      type: "children",
      el: "#wonderwoman",
      test: { item: "img", value: 1 },
      instructions: "Create an &lt;img src='' /&gt; tag inside that &lt;div&gt;&lt;/div&gt;",
      hint: "Add <img src=&quot;&quot; />",
    },
    {
      type: "attribute",
      el: "#wonderwoman img",
      test: { item: "className", value: "movie_image" },
      instructions: "Give that &lt;img src='' /&gt; a class of 'movie_image'",
      hint: "Add <img class=&quot;movie_image&quot; />",
    },
    {
      type: "attribute",
      el: "#wonderwoman img",
      test: { item: "src", value: "images/wonder_woman.jpg" },
      instructions: "Add 'images/wonder_woman.jpg' to the src attribute",
      hint: "Add <img src=&quot;images/wonder_woman.jpg&quot; />",
    },
    {
      type: "children",
      el: "#wonderwoman",
      test: { item: "div", value: 1 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; tag next to the &lt;img src='' /&gt;",
      hint: "Add <div></div>",
    },
    {
      type: "attribute",
      el: "#wonderwoman .movie_details",
      test: { item: "className", value: "movie_details" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'movie_details'",
      hint: "Add <div class=&quot;movie_details&quot;></div>",
    },
    {
      type: "children",
      el: "#wonderwoman .movie_details",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the new &lt;div&gt;&lt;/div&gt;",
      hint: "Add <div></div>",
    },
    {
      type: "attribute",
      el: "#wonderwoman .movie_details h2",
      test: { item: "className", value: "movie_title" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'movie_title'",
      hint: "Add <h2 class=&quot;movie_title&quot;></h2>",
    },
    {
      type: "attribute",
      el: "#wonderwoman .movie_details h2",
      test: { item: "innerText", value: "Wonder Woman" },
      instructions: "Add the text of 'Wonder Woman' to the &lt;h2&gt;&lt;/h2&gt;",
      hint: "Add <h2>Wonder Woman</h2>",
    },
    {
      type: "children",
      el: "#wonderwoman .movie_details",
      test: { item: "p", value: 1 },
      instructions: "Create a &lt;p&gt;&lt;/p&gt; tag in that to the &lt;div&gt;&lt;/div&gt;",
      hint: "Add <p></p>",
    },
    {
      type: "attribute",
      el: "#wonderwoman .movie_details p",
      test: { item: "className", value: "movie_desc" },
      instructions: "Give that &lt;p&gt;&lt;/p&gt; tag a class of 'movie_desc'",
      hint: "Add <p class=&quot;movie_desc&quot;></p>",
    },
    {
      type: "attribute",
      el: "#wonderwoman .movie_details p",
      test: { item: "innerText", value: "Best movie ever!" },
      instructions: "Write 'Best movie ever!' in the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add <p>Best movie ever!</p>",
    },
    {
      type: "children",
      el: "#wonderwoman .movie_details",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href=''&gt;&lt;/a&gt; tag next to the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add <a href=&quot;&quot;></a>",
    },
    {
      type: "attribute",
      el: "#wonderwoman div a",
      test: { item: "className", value: "movie_link" },
      instructions: "Give that &lt;a href=''&gt;&lt;/a&gt; a class of 'movie_link'",
      hint: "Add <a class=&quot;movie_link&quot;></a>",
    },
    {
      type: "attribute",
      el: "#wonderwoman div a",
      test: { item: "innerText", value: "Read More" },
      instructions: "Add the text 'Read More' to that a tag",
      hint: "Add <a class=&quot;Read More&quot;></a>",
    },
  ],
};

const bladRunner = {
  desc:
    "Blade Runner is going to contain a lot of the same markup you created last time. Can you spot the differences?",
  example: `&lt;div id="bladerunner" class="movie"&gt
  &lt;img src="images/blade_runner.jpg" class="movie_image" /&gt;
  &lt;div class="movie_details"&gt
    &lt;h2 class="movie_title"&gt;Blade Runner&lt;/h2&gt;
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
      hint: "Add <div></div>",
    },
    {
      type: "attribute",
      el: "#bladerunner",
      test: { item: "id", value: "bladerunner" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt; an id of bladerunner",
      hint: "Add id=&quot;bladerunner&quot; to the <div> just created.",
    },
    {
      type: "attribute",
      el: "#bladerunner",
      test: { item: "className", value: "movie" },
      instructions: "Also, give that &lt;div&gt;&lt;/div&gt; a class of movie",
      hint: "Add class=&quot;movie&quot; to the <div> just created.",
    },
    {
      type: "children",
      el: "#bladerunner",
      test: { item: "img", value: 1 },
      instructions: "Create an &lt;img src='' /&gt; tag inside that &lt;div&gt;&lt;/div&gt;",
      hint: "Add <img src=&quot;&quot; />",
    },
    {
      type: "attribute",
      el: "#bladerunner img",
      test: { item: "className", value: "movie_image" },
      instructions: "Give that &lt;img src='' /&gt; a class of 'movie_image'",
      hint: "Add <img class=&quot;movie_image&quot; />",
    },
    {
      type: "attribute",
      el: "#bladerunner img",
      test: { item: "src", value: "images/blade_runner.jpg" },
      instructions: "Add 'images/blade_runner.jpg' to the src attribute",
      hint: "Add <img src=&quot;images/blade_runner.jpg&quot; />",
    },
    {
      type: "children",
      el: "#bladerunner",
      test: { item: "div", value: 1 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; tag next to the &lt;img src='' /&gt;",
      hint: "Add <div></div>",
    },
    {
      type: "attribute",
      el: "#bladerunner .movie_details",
      test: { item: "className", value: "movie_details" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'movie_details'",
      hint: "Add <div class=&quot;movie_details&quot;></div>",
    },
    {
      type: "children",
      el: "#bladerunner .movie_details",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the new &lt;div&gt;&lt;/div&gt;",
      hint: "Add <div></div>",
    },
    {
      type: "attribute",
      el: "#bladerunner .movie_details h2",
      test: { item: "className", value: "movie_title" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'movie_title'",
      hint: "Add <h2 class=&quot;movie_title&quot;></h2>",
    },
    {
      type: "attribute",
      el: "#bladerunner .movie_details h2",
      test: { item: "innerText", value: "Blade Runner" },
      instructions: "Add the text of 'Blade Runner' to the &lt;h2&gt;&lt;/h2&gt;",
      hint: "Add <h2>Blade Runner</h2>",
    },
    {
      type: "children",
      el: "#bladerunner .movie_details",
      test: { item: "p", value: 1 },
      instructions: "Create a &lt;p&gt;&lt;/p&gt; tag in that to the &lt;div&gt;&lt;/div&gt;",
      hint: "Add <p></p>",
    },
    {
      type: "attribute",
      el: "#bladerunner .movie_details p",
      test: { item: "className", value: "movie_desc" },
      instructions: "Give that &lt;p&gt;&lt;/p&gt; tag a class of 'movie_desc'",
      hint: "Add <p class=&quot;movie_desc&quot;></p>",
    },
    {
      type: "attribute",
      el: "#bladerunner .movie_details p",
      test: { item: "innerText", value: "Best movie ever!" },
      instructions: "Write 'Best movie ever!' in the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add <p>Best movie ever!</p>",
    },
    {
      type: "children",
      el: "#bladerunner .movie_details",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href=''&gt;&lt;/a&gt; tag next to the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add <a href=&quot;&quot;></a>",
    },
    {
      type: "attribute",
      el: "#bladerunner div a",
      test: { item: "className", value: "movie_link" },
      instructions: "Give that &lt;a href=''&gt;&lt;/a&gt; a class of 'movie_link'",
      hint: "Add <a class=&quot;movie_link&quot;></a>",
    },
    {
      type: "attribute",
      el: "#bladerunner div a",
      test: { item: "innerText", value: "Read More" },
      instructions: "Add the text 'Read More' to that a tag",
      hint: "Add <a class=&quot;Read More&quot;></a>",
    },
  ],
};

const starWars = {
  desc:
    "Star Wars is going to contain a lot of the same markup you created last time. Are you starting to see a pattern?",
  example: `&lt;div id="starwars" class="movie"&gt
  &lt;img src="images/star_wars.jpg" class="movie_image" /&gt;
  &lt;div class="movie_details"&gt
    &lt;h2 class="movie_title"&gt;Star Wars&lt;/h2&gt;
    &lt;p class="movie_desc"&gtBest movie ever!&lt;/p&gt;
    &lt;a class="movie_link" href="#"&gt;Read More&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".movies",
      test: { item: "div", value: 4 },
      instructions: "Create new a &lt;div&gt;&lt;/div&gt; inside the movies div",
      hint: "Add <div></div>",
    },
    {
      type: "attribute",
      el: "#starwars",
      test: { item: "id", value: "starwars" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt;  an id of starwars",
      hint: "Add id=&quot;starwars&quot; to the <div> just created.",
    },
    {
      type: "attribute",
      el: "#starwars",
      test: { item: "className", value: "movie" },
      instructions: "Also, give that &lt;div&gt;&lt;/div&gt; a class of movie",
      hint: "Add class=&quot;movie&quot; to the <div> just created.",
    },
    {
      type: "children",
      el: "#starwars",
      test: { item: "img", value: 1 },
      instructions: "Create an &lt;img src='' /&gt; tag inside that div",
      hint: "Add <img src=&quot;&quot; />",
    },
    {
      type: "attribute",
      el: "#starwars img",
      test: { item: "className", value: "movie_image" },
      instructions: "Give that &lt;img src='' /&gt; a class of 'movie_image'",
      hint: "Add <img class=&quot;movie_image&quot; />",
    },
    {
      type: "attribute",
      el: "#starwars img",
      test: { item: "src", value: "images/star_wars.jpg" },
      instructions: "Add 'images/star_wars.jpg' to the src attribute",
      hint: "Add <img src=&quot;images/star_wars.jpg&quot; />",
    },
    {
      type: "children",
      el: "#starwars",
      test: { item: "div", value: 1 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; tag next to the &lt;img src='' /&gt;",
      hint: "Add <div></div>",
    },
    {
      type: "attribute",
      el: "#starwars .movie_details",
      test: { item: "className", value: "movie_details" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'movie_details'",
      hint: "Add <div class=&quot;movie_details&quot;></div>",
    },
    {
      type: "children",
      el: "#starwars .movie_details",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the new &lt;div&gt;&lt;/div&gt;",
      hint: "Add <div></div>",
    },
    {
      type: "attribute",
      el: "#starwars .movie_details h2",
      test: { item: "className", value: "movie_title" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'movie_title'",
      hint: "Add <h2 class=&quot;movie_title&quot;></h2>",
    },
    {
      type: "attribute",
      el: "#starwars .movie_details h2",
      test: { item: "innerText", value: "Star Wars" },
      instructions: "Add the text of 'Star Wars' to the &lt;h2&gt;&lt;/h2&gt;",
      hint: "Add <h2>Star Wars</h2>",
    },
    {
      type: "children",
      el: "#starwars .movie_details",
      test: { item: "p", value: 1 },
      instructions: "Create a &lt;p&gt;&lt;/p&gt; tag in that to the &lt;div&gt;&lt;/div&gt;",
      hint: "Add <p></p>",
    },
    {
      type: "attribute",
      el: "#starwars .movie_details p",
      test: { item: "className", value: "movie_desc" },
      instructions: "Give that &lt;p&gt;&lt;/p&gt; tag a class of 'movie_desc'",
      hint: "Add <p class=&quot;movie_desc&quot;></p>",
    },
    {
      type: "attribute",
      el: "#starwars .movie_details p",
      test: { item: "innerText", value: "Best movie ever!" },
      instructions: "Write 'Best movie ever!' in the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add <p>Best movie ever!</p>",
    },
    {
      type: "children",
      el: "#starwars .movie_details",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href=''&gt;&lt;/a&gt; tag next to the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add <a href=&quot;&quot;></a>",
    },
    {
      type: "attribute",
      el: "#starwars div a",
      test: { item: "className", value: "movie_link" },
      instructions: "Give that &lt;a href=''&gt;&lt;/a&gt; a class of 'movie_link'",
      hint: "Add <a class=&quot;movie_link&quot;></a>",
    },
    {
      type: "attribute",
      el: "#starwars div a",
      test: { item: "innerText", value: "Read More" },
      instructions: "Add the text 'Read More' to that a tag",
      hint: "Add <a class=&quot;Read More&quot;></a>",
    },
  ],
};

const logan = {
  desc: "Logan is going to contain a lot of the same markup you created last time. Are you starting to see a pattern?",
  example: `&lt;div id="logan" class="movie"&gt
  &lt;img src="images/logan.jpg" class="movie_image" /&gt;
  &lt;div class="movie_details"&gt
    &lt;h2 class="movie_title"&gt;Logan&lt;/h2&gt;
    &lt;p class="movie_desc"&gtBest movie ever!&lt;/p&gt;
    &lt;a class="movie_link" href="#"&gt;Read More&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
  tasks: [
    {
      type: "children",
      el: ".movies",
      test: { item: "div", value: 5 },
      instructions: "Create new a div inside the movies div",
      hint: "Add <div></div>",
    },
    {
      type: "attribute",
      el: "#logan",
      test: { item: "id", value: "logan" },
      instructions: "Give that new &lt;div&gt;&lt;/div&gt;  an id of logan",
      hint: "Add id=&quot;logan&quot; to the <div> just created.",
    },
    {
      type: "attribute",
      el: "#logan",
      test: { item: "className", value: "movie" },
      instructions: "Also, give that &lt;div&gt;&lt;/div&gt; a class of movie",
      hint: "Add class=&quot;movie&quot; to the <div> just created.",
    },
    {
      type: "children",
      el: "#logan",
      test: { item: "img", value: 1 },
      instructions: "Create an &lt;img src='' /&gt; tag inside that div",
      hint: "Add <img src=&quot;&quot; />",
    },
    {
      type: "attribute",
      el: "#logan img",
      test: { item: "className", value: "movie_image" },
      instructions: "Give that &lt;img src='' /&gt; a class of 'movie_image'",
      hint: "Add <img class=&quot;movie_image&quot; />",
    },
    {
      type: "attribute",
      el: "#logan img",
      test: { item: "src", value: "images/logan.jpg" },
      instructions: "Add 'images/logan.jpg' to the src attribute",
      hint: "Add <img src=&quot;images/logan.jpg&quot; />",
    },
    {
      type: "children",
      el: "#logan",
      test: { item: "div", value: 1 },
      instructions: "Create a new &lt;div&gt;&lt;/div&gt; tag next to the &lt;img src='' /&gt;",
      hint: "Add <div></div>",
    },
    {
      type: "attribute",
      el: "#logan .movie_details",
      test: { item: "className", value: "movie_details" },
      instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of 'movie_details'",
      hint: "Add <div class=&quot;movie_details&quot;></div>",
    },
    {
      type: "children",
      el: "#logan .movie_details",
      test: { item: "h2", value: 1 },
      instructions: "Create an &lt;h2&gt;&lt;/h2&gt; tag inside the new &lt;div&gt;&lt;/div&gt;",
      hint: "Add <div></div>",
    },
    {
      type: "attribute",
      el: "#logan .movie_details h2",
      test: { item: "className", value: "movie_title" },
      instructions: "Give that &lt;h2&gt;&lt;/h2&gt; a class of 'movie_title'",
      hint: "Add <h2 class=&quot;movie_title&quot;></h2>",
    },
    {
      type: "attribute",
      el: "#logan .movie_details h2",
      test: { item: "innerText", value: "Logan" },
      instructions: "Add the text of 'Logan' to the &lt;h2&gt;&lt;/h2&gt;",
      hint: "Add <h2>Logan</h2>",
    },
    {
      type: "children",
      el: "#logan .movie_details",
      test: { item: "p", value: 1 },
      instructions: "Create a &lt;p&gt;&lt;/p&gt; tag in that to the &lt;div&gt;&lt;/div&gt;",
      hint: "Add <p></p>",
    },
    {
      type: "attribute",
      el: "#logan .movie_details p",
      test: { item: "className", value: "movie_desc" },
      instructions: "Give that &lt;p&gt;&lt;/p&gt; tag a class of 'movie_desc'",
      hint: "Add <p class=&quot;movie_desc&quot;></p>",
    },
    {
      type: "attribute",
      el: "#logan .movie_details p",
      test: { item: "innerText", value: "Best movie ever!" },
      instructions: "Write 'Best movie ever!' in the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add <p>Best movie ever!</p>",
    },
    {
      type: "children",
      el: "#logan .movie_details",
      test: { item: "a", value: 1 },
      instructions: "Create an &lt;a href=''&gt;&lt;/a&gt; tag next to the &lt;p&gt;&lt;/p&gt; tag",
      hint: "Add <a href=&quot;&quot;></a>",
    },
    {
      type: "attribute",
      el: "#logan div a",
      test: { item: "className", value: "movie_link" },
      instructions: "Give that &lt;a href=''&gt;&lt;/a&gt; a class of 'movie_link'",
      hint: "Add <a class=&quot;movie_link&quot;></a>",
    },
    {
      type: "attribute",
      el: "#logan div a",
      test: { item: "innerText", value: "Read More" },
      instructions: "Add the text 'Read More' to that a tag",
      hint: "Add <a class=&quot;Read More&quot;></a>",
    },
  ],
};

const steps = [start, looper, wonderWoman, bladRunner, starWars, logan];
// Pass the rules into this function and let the magic happen in the object
window.load = Checker.loadTests(steps);
