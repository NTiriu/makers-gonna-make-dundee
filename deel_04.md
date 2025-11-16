# Part 4: Preparing a GeoJSON hiking route around Dundee

Find a hiking route in/around Dundee. Here is one way to do it:
 
- Go to [OverPass Turbo](https://overpass-turbo.eu/). Use the following:

```
{{data:sql,server=https://postpass.geofabrik.de/api/0.2/}}
SELECT tags, geom
FROM postpass_line
WHERE tags->>'route' = 'hiking'
  AND geom && {{bbox}}
```

- If successful, we're going to bring the GeoJSON into a new file via clipboard.

-  Click on `Export` and choose data 'GeoJSON' 'Copy'
-  Go to the 'assets' directory. Create a new file, e.g. with `touch wandeling.geojson` (or via menu).
- Open this empty file in the editor.
- 'Paste' the GeoJSON from the clipboard into the editor. Now we have a hiking route as a GeoJSON file!
- 'Push' this file just like earlier the PMTiles to your forked repo:

```
$ git add wandeling.geojson
$ git commit -m "Add wandeling.geojson"
$ git push
```

 > [!TIP]
>  Tip: GitHub can also display GeoJSON. View the file on a background map via `https://github.com/<your github name>/maplibre-workshop-foss4gnl-2025/blob/main/assets/wandeling.geojson`



