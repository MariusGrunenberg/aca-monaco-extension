# aca-monaco-extension

# ACA Extension Example

This project contains:

- ACA extension to use Monaco editor

## DISCLAIMER

Currently this package only involves the editor itself, and some functionality is still missing. This includes:

* Saving Files
* Allowing Customization
* Support for other filetypes

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

Open your ACA instance

1 . Install monaco-extension 
```sh
npm install --save-dev monaco-extension
```

2. Install monaco-extension in your ACA instance
```sh
npm install --save-dev ngx-monaco-editor
```

Switch to the ACA project and run:

Update the `extensions.module.ts` file and append the module:

```ts
import { AcaMonacoModule } from 'monaco-extension';

@NgModule({
  imports: [
    ...,
    AcaMonacoModule
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
  "$references": ["monaco-extension.json"]
}
```

Copy `dist/assets/monaco-extension.json` to the `src/assets/plugins` folder.

Run the ACA application

```sh
npm start
```

Depending on the setup, you might need to log in as an administrator
and enable external plugins feature for your local run.
