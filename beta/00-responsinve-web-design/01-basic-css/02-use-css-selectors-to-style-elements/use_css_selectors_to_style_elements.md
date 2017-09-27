## Basic CSS: *Use CSS Selectors to Style Elements*
From freeCodeCamp's Basic CSS "Use CSS Selectors to Style Elements"
[freeCodeCamp - Use CSS Selectors to Style Elements](https://beta.freecodecamp.org/en/challenges/basic-css/use-css-selectors-to-style-elements)

#### **Explanation:**

With CSS, there are hundreds of CSS `properties` that you can use to change the way an element looks on your page.

When you entered `<h2 style="color: red">CatPhotoApp</h2>`, you were giving that individual `h2` element an `inline style`.

That's one way to add style to an element, but there's a better way to use `CSS`, which stands for `Cascading Style Sheets`.

At the top of your code, create a `style` element like this:
``` html
<style>
</style>
```
Inside that style element, you can create a `CSS selector` for all `h2` elements. For example, if you wanted all `h2` elements to be red, your style element would look like this:
``` html
<style>
  h2 {color: red;}
</style>
```
Note that it's important to have both opening and closing curly  braces ( `{` and `}` ) around each element's style. You also need to make sure your element's style is between the opening and closing style tags. Finally, be sure to add the semicolon to the end of each of your element's styles.

#### **Challenge:**

Delete your 'h2' element's style attribute and instead create a CSS `style` element. Add the necessary CSS to turn all `h2` elements blue.

#### **Tests to Needed to Be Met:**

1. Remove the style attribute from your `h2` element.

2. Create a `style` element.

3. Your `h2` element should be blue.

4. Make sure all your `style` elements are valid and have a closing tag. 
