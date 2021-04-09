> *Note:* Please use the main [MaterialDesign](https://github.com/Templarian/MaterialDesign/issues) repo to report issues. This repo is for distribution of the JavaScript files only.

# JavaScript/TypeScript - Material Design Icons

JavaScript and TypeScript distribution for the [Material Design Icons](https://materialdesignicons.com). This module contains all the path data for all icons.

```
npm install @mdi/js
```

## Usage

### Using with a Bundler

JavaScript module bundlers, such as [webpack](https://webpack.js.org) 4+ or [rollup.js](https://rollupjs.org), will tree-shake unused icons when using static imports:

```js
import { mdiAccount } from '@mdi/js';

console.log(mdiAccount); // "M...Z"
```

### Using Dynamic Imports, or without a Bundler 

[Dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) using `import()` or using without a bundler may cause the download/bundle size to increase significantly. Use modularised files instead.

Example of dynamic import:

```js
const { default: mdiAccount } = await import('@mdi/js/icons/mdiAccount');

console.log(mdiAccount); // "M...Z"
```

Or static import:

```js
import mdiAccount from '@mdi/js/icons/mdiAccount';

console.log(mdiAccount); // "M...Z"
```

## Related Packages

[NPM @MDI Organization](https://npmjs.com/org/mdi)

- React: [MaterialDesign-React](https://github.com/Templarian/MaterialDesign-React)
- SVG: [MaterialDesign-SVG](https://github.com/Templarian/MaterialDesign-SVG)
- Webfont: [MaterialDesign-Webfont](https://github.com/Templarian/MaterialDesign-Webfont)
- Font-Build: [MaterialDesign-Font-Build](https://github.com/Templarian/MaterialDesign-Font-Build)
- Desktop Font: [MaterialDesign-Font](https://github.com/Templarian/MaterialDesign-Font)

## Learn More

- [MaterialDesignIcons.com](https://materialdesignicons.com)
- https://github.com/Templarian/MaterialDesign
