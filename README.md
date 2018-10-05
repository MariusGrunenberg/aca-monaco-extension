# aca-monaco-extension


# ACA Extension Example

This project contains:

- ACA extension to use Monaco editor

## Building

```sh
npm run build:monaco-extension
```

## Publishing

```sh
cd dist/my-extension
npm publish --access=public
```

## Testing with local ACA instance

1. Install the aca-monaco-extension in your ACA instance
2. Install monaco-extension in your ACA instance

Switch to the ACA project and run:

Update the `extensions.module.ts` file and append the module:

```ts
import { MonacModule } from 'monaco-extension';

@NgModule({
  imports: [
    ...,
    MonacModule
  ]
})
export class AppExtensionsModule {}
```

Update the `app.extensions.json` file and register new plugin:

```json
{
  "$schema": "../../extension.schema.json",
  "$name": "app",
  "$version": "1.0.0",
  "$references": [
    "monaco-extension.json"
  ],
}
```

Copy `dist/assets/monaco-extension.json` to the `src/assets/plugins` folder.

Run the ACA application

```sh
npm start
```

Depending on the setup, you might need to log in as an administrator
and enable external plugins feature for your local run.
