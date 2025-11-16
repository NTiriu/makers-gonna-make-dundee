# Part 1: Setting up the development environment

- [ ] Fork [the repository](https://github.com/louwers/maplibre-workshop-foss4gnl-2025).

---

- [ ] Start a GitHub Codespace.

<img width="419" alt="image" src="https://github.com/user-attachments/assets/a60f0ca1-60ab-403e-915d-13d0fe115d70" />

---

- [ ] Open the Terminal when the Codespace has loaded. Use the menu if it doesn't open automatically.

<img width="479" alt="image" src="https://github.com/user-attachments/assets/cf0cfeec-63df-4a73-8128-94c9cf3aceb5" />

---

- [ ] Use the terminal to start a web server with Python. Use the following command:

```
python3 -m http.server
```

A web server will now start on port 8000.

---

- [ ] Make sure you can access the web server via your browser.

You should get a popup. Click on 'Open in Browser':

<img width="449" alt="image" src="https://github.com/user-attachments/assets/4e018397-f623-4683-9ecc-dc103c72a2a8" />

If you don't get a popup, go to the 'PORTS' tab and make sure you can access port 8000.

<img width="1385" alt="image" src="https://github.com/user-attachments/assets/b64abb4c-19df-4b8f-8744-863e53d3fa29" />

Go to the URL that is shown. You should now see a file list. This confirms that the web server is working correctly:

<img width="359" alt="image" src="https://github.com/user-attachments/assets/c045be80-5268-48b6-bdb1-17921d411706" />

---

Now we're really going to start with web development.

- [ ] Create an `index.html` file. The easiest way to do this is via the sidebar.

<img width="229" alt="image" src="https://github.com/user-attachments/assets/bb27c50f-9afc-42e5-b608-7bbbdefd1776" />

Use the following content and save the file.
```html
<!doctype html>
<html>
  <head>
    <title>My title</title>
  </head>
  <body>
    <p>Hello world!</p>
  </body>
</html>
```

If you refresh the page in the browser, you should see "Hello world!".

---

- [ ] Create a `main.js` file and load it in `index.html` by adding the following line to the `head`:

```html
<script type="module" src="main.js"></script>
```

Write this in your `main.js` file:

```js
console.log("Also hello world from Javascript!");
```

Open the developer console in your browser. Where this appears exactly varies by browser.

If you see this, then you have successfully set up your web development environment!

<img width="988" alt="image" src="https://github.com/user-attachments/assets/cddcb40a-1c7b-4953-a9f9-a5e7cce37923" />

---

Now it's time to add MapLibre GL JS.

- [ ] First add a `div` to the HTML in the `body` tag:

```html
    <div id="mijnkaart"></div>
```

---

Next, we're going to load the JavaScript bundle from CDN.

- [ ] Update `main.js` with the following code:

```
import * as maplibregl from "https://cdn.skypack.dev/maplibre-gl";

const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    style: 'https://demotiles.maplibre.org/style.json', // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 1 // starting zoom
});
```

This tells MapLibre to load a map in the element with id `map` and we load a simple MapLibre style called Demotiles.

Save all files, do you see a map appearing in the browser?

---

We're now adding some CSS to the page. MapLibre comes bundled with some CSS code it needs for UI elements. We also make sure the map takes up the entire screen by making it `100 vw` (view width) wide and `100 vh` (view height) tall.

- [ ] Add the following code to the `head` of `index.html`:

```html
<style>
  @import url("https://esm.sh/maplibre-gl/dist/maplibre-gl.css");

  body {
    margin: 0;
  }

  #mijnkaart {
    width: 100vw;
    height: 100vh;
  }
</style>
```

---

If everything is correct, you should now see the following end result

<img width="1296" alt="image" src="https://github.com/user-attachments/assets/ed301d95-2f55-4617-a525-a51b25b7fa7e" />

> [!TIP]
> For the enthusiasts, try a style from [OpenFreeMap](https://openfreemap.org/quick_start/).

---

- [ ] Make sure you commit and push `index.html` and `main.js` to the repo. You can use `git` in the command line or the UI for this.

https://github.com/user-attachments/assets/79d99706-0daf-4c27-98e9-39bd2f4bbd26

