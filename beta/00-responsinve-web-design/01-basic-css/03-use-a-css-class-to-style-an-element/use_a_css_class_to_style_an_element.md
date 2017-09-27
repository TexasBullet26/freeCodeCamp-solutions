## Basic CSS: *Use a CSS Class to Style an Element*
From freeCodeCamp's Basic CSS "Use a CSS Class to Style an Element"
[freeCodeCamp - Use a CSS Class to Style an Element](https://beta.freecodecamp.org/en/challenges/basic-css/use-a-css-class-to-style-an-element)

#### **Explanation:**

**Classes** are reusable styles that can be added to HTML elements.

Here's an example CSS class declaration:
``` html
<style>
  .blue-text {
    color: blue;
  }
</style>
```
You can see that we've created a CSS class called `blue-text` within the `<style>` tag.

You can apply a class to an HTML element like this:
``` html
<h2 class="blue-text">CatPhotoApp</h2>
```
Note that in your CSS `style` element, classes should start with a period. In your HTML elements' class declarations, classes shouldn't start with a period.

#### **Challenge:**

Inside your `style` element, change the `h2` selector to `.red-text` and update the color's value from `blue` to `red`.

Give your `h2` element the `class` attribute with a value of `'red-text'`.

#### **Tests to Needed to Be Met:**

1. Your `h2` element should be red.

2. Your `h2` element should have the class `red-text`.

3. Your stylesheet should declare a `red-text` class and have its color set to red.

4. Do not use inline style declarations like `style="color: red;"` in your `h2` element. 
