# Cosmic Checker

This tool is designed to help teach students to code basic HTML and CSS sites.

## Project Layout

Each lesson is separated into individual folders inside of `Projects`. Each lesson is identified by a project name that makes sense for that project. Naming convention dictates lesson names do not have spaces, must start with a letter, use `UpperCameCaseNaming` if the project has multiple words in its name, and has no special characters. For example a name could be `MyFavoriteMovies` or `AvatarTheLastAirBender`.

Isolating each project inside the project folder allows for better separation. We do not want to inherit anything from any other project to avoid a dependency mess. There are a couple of build process that allow us to automate the isolation and zipping portions. More on this in a later section.

---

The `index.html` and `styles` folders are currently not being utilized. I envisioned this to be a portal page where an instructor would able to view the lesson catalogue and download the resources necessary. See [Portal Page Issue](https://github.com/jermbo/CosmicChecker/issues/15) for further details.

---

## Checker APIs

As of right now, `Checker` has no public methods. Everything is handled within the `Checker` module. You simply need to pass in an array of objects to a `new Checker()` instance.

## Lesson Structure

The object requires three properties. `desc`, `example`, and `tasks`. An object is an individual step a student must complete in order to build the entire site.

```JavaScript
{
  desc: "Some description about what they are currently doing",
  example: `&lg;div&gt;
  &lg;h1&gtHello&lg;/h1&gt;
&lg;/div&gt;`
  tasks: [...{}]
}
```

### Description

It's important to explain what the student is trying to accomplish. The description should be clear and to the point. No need for anything lengthy, experience dictates that not many read and or understand what they are reading at this level.

### Example

One thing I like to differently than FreeCodeCamp is give them the answer. Personally, I feel FCC tricks you unintentionally by explaining things with one example and making you write out something different. ( I get what they are trying to do, I just find it to be a source of confusion more than being helpful. )

Yes, it is very important to utilize the html entities for special characters. This section is displayed on screen to the student, and this avoids HTML from actually rendering the element.

This tool [HTML Entities Encoder / Decoder](https://mothereff.in/html-entities) or [this one](https://www.web2generators.com/html-based-tools/online-html-entities-encoder-and-decoder) are very useful. I highly recommend utilizing it to avoid accidental typos that can be avoided.

### Tasks

Each step is made up of tasks. Tasks are individual steps one needs to take in order to completed the step. This number of tasks can vary from step to step, but should be kept to bite sized chunks. Maybe around 3 - 10. More on a Tasks structure below.

## Task

A task object requires five properties. `type`, `el`, `test`, `instructions`, and `hint`.

```JavaScript
{
  type: "attribute",
  el: ".header",
  test: { item: "className", value: "header" },
  instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of header",
  hint: "Add class=&quot;header&quot; to the div",
}
```

### type -string-

There are five `type`s an object can be. This defines what the `Checker` should be checking for.

- attribute
- children
- element
- externalStyles
- inlineStyles

#### attribute

When you need to check if an element has a class, id, href, src, or data type, you would utilize attribute to check.

#### children

When you need to check if a specific element exists in a specific spot. This comes in handy if you are creating multiple instances of a set of DOM or reuse class names in various places.

#### element

When you need to check if a specific element exists on the page. I would be careful with this one. This was created for a specific use case, but I find the `children` type being more useful. This one returns the first item it finds, which may not be the item you are looking to verify.

#### externalStyles

When you need to verify external styles exist.

#### inlineStyles

When you need to verify inline styles exist. This can be done utilizing the `attribute` type as well, but this takes it a step further and checks multiple rules.

### el -string-

In order to preform any verification, Checker needs to know what element to preform that check on. This element gives Checker an indication as to where to find an element. Any valid CSS selector is accepted.

If no element is provided, the Checker will assume the minimum state of `.wrapper`.

### test -object-

```JavaScript
{
  item: "className",
  value: "header"
}
```

Simply put, what do you want to test. Regardless of what you are testing for, the test tells the system what item or rule it should be looking for. And the value will verify what is expected.

The only catch is the use of `className` in place of `class`. `class` is a reserved keyword in JavaScript and therefor cannot be used.

### instructions

Checker can only check on thing at a time. The instructions need to reflect that. These instructions should be to do the smallest amount of work possible. For example, `create a div and give it a class of header` are two steps. A step for `create a div inside wrapper`, and a step for `give that div a class of header` needs to be created.

### hint

This tool is not here to confuse or trick people. Let's help them as much as possible. This feature I expect to be found by accident as the information they need is already on the screen. But, if the student is super stuck they can hover over a task and be provided with a specific tip.

## Example Tasks

The example below is verifying if there is an element with the class of header.

```JavaScript
{
  type: "attribute",
  el: ".header",
  test: { item: "className", value: "header" },
  instructions: "Give that &lt;div&gt;&lt;/div&gt; a class of header",
  hint: "Add class=&quot;header&quot; to the div",
}
```

The example below is verifying if there is a second div inside the main `.wrapper` element.

```JavaScript
{
  type: "children",
  el: "",
  test: { item: "div", value: 2 },
  instructions: "Create a &lt;div&gt;&lt;/div&gt; next to the header div",
  hint: "Add <div></div>",
}
```

The example below is verifying if the anchor inside of `#aang` has an image tag as a child element.

```JavaScript
{
  type: "children",
  el: "#aang > a",
  test: { item: "img", value: 1 },
  instructions: "Add an &lt;img src=&quot;&quot; /&gt; inside the &lt;a href=&quot;&quot;&gt;&lt;/a&gt; tag",
  hint: "Add &lt;img src=&quot;&quot; /&gt; inside the new anchor tag",
}
```

The example below is verifying image attribute matches a specific image.

```JavaScript
{
  type: "attribute",
  el: "#aang > a > img",
  test: { item: "src", value: "images/aang.png" },
  instructions: "Update the src attribute with 'images/aang.png'",
  hint: "Add the src=&quot;images/aang.png&quot;",
}
```

The example below illustrates two things. First, the use of specificity in CSS. If there is something you need to check and its generic, like this `h2`, then figure out how you would select this via CSS.

Secondly, most things you will be verifying would be an attribute of some sort. The text inside an element is simply an `innerText` attribute on the DOM element.

```JavaScript
{
  type: "attribute",
  el: "#looper .movie_details h2",
  test: { item: "innerText", value: "Looper" },
  instructions: "Add the text of 'Looper' to the &lt;h2&gt;&lt;/h2&gt;",
  hint: "Add <h2>Looper</h2>",
}
```

## How the system works

In a nutshell, Checker takes a list of objects and checks everything on page load. As the student progress through the site, each task will be will be verified and marked as completed. If all the the tasks in a given step is completed, then the student will be presented the next step.

We are trying to encourage each student to get into local development as efficiently as possible. There will be a base set of files to get started with, and eventually the checker will become unnecessary.

## FAQs

### What happens if no `el` property is passed in task object?

Each project needs the same entry point. `.wrapper`. Everything you will be verifying will need to live in there. If there is no `<div class="wrapper"></div>` in your project `Checker` will not work.

### Why are my instructions or hints rendering as HTML instead of printing out?

This is because of how `.innerHTML` work. In order to keep the core code maintainable we opted to use `.innerHTML` for all processes displaying things to the student. This causes the necessity of utilizing the HTML Entity representations of special characters.

There are a bunch of free encode / decode tools to assist you with this process. One that we recommend and have used to build lesson with is [HTML Entities](https://mothereff.in/html-entities).
