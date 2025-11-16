# Part 4: Preparing a GeoJSON hiking route around Wageningen

Find a hiking route in/around Wageningen. To display this on MapLibre later, we need the route as a GeoJSON file.
There are several ways to do this. Below is the path that [@justb4](https://github.com/justb4/) followed:

1. Go to [hiking.waymarkedtrails.org](https://hiking.waymarkedtrails.org/). These are all hiking routes in OSM.
2. In the Search box at the bottom left, enter "Wageningen".
3. In the results, various routes, notably "Wageningen On The Move" (WOTM). Choose, for example (top right), the Red Route. You can download the route as a GPX or KML file, but then you'll have to convert it yourself. With the OSM "Overpass" API you can request GeoJSON directly.
4. At the top right you see "Relation <number>"
5. Copy that Relation Number
6. Go to the website: https://overpass-turbo.eu/#
7. Enter the following code in the left window:

```
/* Wageningen On The Move Red Trail */
[out:json][timeout:25];

// Store the relation
rel(<RELATION_NUMBER>)->.rel;

// Get member ways and their nodes
(
  way(r.rel);
  node(w); // nodes of the ways
)->.ways_and_nodes;

// Get member nodes that are *direct* members of the relation
node(r.rel)->.standalone_nodes;

// Combine all
(
  .ways_and_nodes;
  .standalone_nodes;
);
out body;
```

In `<RELATION_NUMBER>` fill in the route OSM Relation number. Click the `Run` button.

8. If successful, we're going to bring the GeoJSON into a new file via clipboard.

9. Click on `Export` and choose data 'GeoJSON' 'Copy'
10. Go to the 'assets' directory. Create a new file, e.g. with `touch wandeling.geojson` (or via menu).
11. Open this empty file in the editor.
12. 'Paste' the GeoJSON from the clipboard into the editor. Now we have a hiking route as a GeoJSON file!
13. 'Push' this file just like earlier the PMTiles to your forked repo:
```
$ git add wandeling.geojson
$ git commit -m "Add wandeling.geojson"
$ git push
```

 > [!TIP]
>  Tip: GitHub can also display GeoJSON. View the file on a background map via `https://github.com/<your github name>/maplibre-workshop-foss4gnl-2025/blob/main/assets/wandeling.geojson`



