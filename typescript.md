# Extra 1: Using TypeScript

TypeScript is a language that adds types to JavaScript. This allows you to easily spot errors during development, instead of only discovering them when running your program. TypeScript is also useful because your editor or IDE can give you better suggestions such as which methods are available on an object.

Because browsers don't have support for TypeScript, you need to transpile TypeScript to JavaScript before you can use it in the browser. A build step adds extra complexity to a web project. For larger projects this is usually not a problem, and even desired. But for smaller projects it's often not necessary. The nice thing is that TypeScript (the compiler) is also useful for JavaScript codebases!

Run the following commands in the terminal:

```
npm install typescript
npm install maplibre-gl pmtiles
```

Create a `jsconfig.json` file:

```json
{
  "compilerOptions": {
    "checkJS": true,
    "module": "esnext",
    "target": "esnext",
    "paths": {
        "https://esm.sh/maplibre-gl": ["./node_modules/maplibre-gl/dist/maplibre-gl.d.ts"],
        "https://esm.sh/pmtiles": ["./node_modules/pmtiles/src/index.ts"]
    }
  },
  "exclude": ["node_modules"]
}
```

Install the TypeScript plugin:

<img width="356" alt="image" src="https://github.com/user-attachments/assets/095e6b31-ab69-4249-afeb-485e7eb73cc0" />

You can then make use of auto-completion thanks to TypeScript:

<img width="541" alt="Screenshot 2025-07-01 at 19 41 08" src="https://github.com/user-attachments/assets/70b29e98-8340-4dc7-abbb-c72c3fcdfb72" />

Finally, it's useful to create a `.gitignore` file with

```
node_modules
```

So that you don't accidentally add the installed npm packages to your repository.

