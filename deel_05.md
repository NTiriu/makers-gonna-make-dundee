# Part 5: Loading PMTiles with MapLibre GL JS

PMTiles is not natively supported by MapLibre GL JS.

- [ ] Register the `pmtiles://` URL scheme using the [pmtiles npm package](https://www.npmjs.com/package/pmtiles).

Add the following code to `main.js`:

```js
import { Protocol } from "https://esm.sh/pmtiles";
const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);
```

---

- [ ] Load the ProtoMaps Light style that you added to your repository in part 3.

```diff
const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
-   style: 'https://demotiles.maplibre.org/style.json', // style URL
+   style: './assets/style.json',
    center: [0, 0], // starting position [lng, lat]
    zoom: 1 // starting zoom
});
```

---

- [ ] Set Wageningen as `center` and choose an initial zoom level where we have tiles.

<details>
  <summary>Example</summary>

```diff
const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    style: './assets/style.json',
-   center: [0, 0], // starting position [lng, lat]
+   center: [5.66509, 51.96857], // starting position [lng, lat]
-   zoom: 1 // starting zoom
+   zoom: 13 // starting zoom
});
```
</details>

---

- [ ] Check with the web server if everything works. If so, make a commit with your changes.

Because you deployed your repository as a website in part 2, it will be online immediately once you've pushed your changes.

---

- [ ] Go to the URL of the GitHub Pages site to check if it's also correctly deployed.

<img width="1423" alt="image" src="https://github.com/user-attachments/assets/e3e1067c-46b0-4f67-a875-1e620b7c79c7" />

