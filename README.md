> *Note:* Please use the main [MaterialDesign](https://github.com/Templarian/MaterialDesign/issues) repo to report issues. This repo is for distribution of the JavaScript files only.

# JavaScript/TypeScript - Material Design Icons

JavaScript and TypeScript distribution for the [Material Design Icons](https://materialdesignicons.com). 
This module contains and exports all the path data for all icons. 
The variable names use `mdi` as a namespace directly followed by the camel-cased MDI name: *mdiFooBar*.

```
npm install @mdi/js
```

## Usage

```js
import { mdiAccount } from '@mdi/js'

console.log(mdiAccount); // "M...Z"
```

> Note: [WebPack](https://webpack.js.org) 4 or [Rollup](https://rollupjs.org) will tree shake unused icons.

### Canvas

```js
import { mdiAccount } from '@mdi/js'

var canvas = document.getElementById('myCanvas');
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  var path = new Path2D(mdiAccount);
  ctx.stroke(path);
}
```

### SVG

```js
import { mdiAccount } from '@mdi/js'

var elm = document.getElementById('mySVGPath');
elm.setAttribute("d", mdiAccount);
```

## Related Packages

[NPM @MDI Organization](https://npmjs.com/org/mdi)

- Web Component: [MaterialDesign-Web-Component](https://github.com/Templarian/MaterialDesign-Web-Component)
- React: [MaterialDesign-React](https://github.com/Templarian/MaterialDesign-React)
- SVG: [MaterialDesign-SVG](https://github.com/Templarian/MaterialDesign-SVG)
- Webfont: [MaterialDesign-Webfont](https://github.com/Templarian/MaterialDesign-Webfont)

## Learn More

- [MaterialDesignIcons.com](https://materialdesignicons.com)
- [\@Templarian/MaterialDesign](https://github.com/Templarian/MaterialDesign)
