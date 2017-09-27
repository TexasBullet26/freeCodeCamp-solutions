## Basic HTML and HTML5: *Add Images to Your Website*
From freeCodeCamp's Basic HTML and HTML5 "Add Images to Your Website"
[freeCodeCamp - Add Images to Your Website](https://beta.freecodecamp.org/en/challenges/basic-html-and-html5/add-images-to-your-website)

#### **Explanation:**
You can add images to your website by using the `img` element, and point to a specific image's URL using the `src` attribute.

An example of this would be:
``` html
<img src="https://www.your-image-source.com/your-image.jpg">
```
Note that in most cases, `img` elements are self-closing.

All `img` elements **must** have an `alt` attribute. The text inside an `alt` attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.

Let's add an `alt` attribute to our `img` example above:
``` html
<img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up.">
```
#### Challenge:
Let's try to add an image to our website:

Insert an `img` tag, before the `h2` element.

Now set the `src` attribute so that it points to this url:
`https://bit.ly/fcc-relaxing-cat`

Finally don't forget to give your image an `alt` text.
