# Extra 2: Self-Hosting Protomaps Assets

MapLibre needs, in addition to (vector) data:

- Fonts in a specific format
- Sprites for icons

These assets are specific per style and you add them respectively with the `glyphs` and `sprite` property in a MapLibre style JSON document.

> [!TIP]
> For more information see the [Protomaps Documentation](https://docs.protomaps.com/basemaps/maplibre#assets).

To make your map truly independent of external sources, you'll also need to host these assets yourself.

Use the following commands to add the [basemap-assets](https://github.com/protomaps/basemaps-assets) from Protomaps to your repository.

```sh
cd assets
wget https://github.com/protomaps/basemaps-assets/archive/refs/heads/main.zip
unzip main.zip
mv basemaps-assets-main/* .
rm main.zip
rmdir basemaps-assets-main
```

Then update `glyphs` and `sprite` in your `assets/style.json` document and reference the self-hosted assets.

