const { getMeta, getVersion, write } = require('@mdi/util');
const { mkdirSync, existsSync } = require('fs');

const meta = getMeta(true);

const find = /(\-\w)/g;
const convert =  function(matches){
  return matches[1].toUpperCase();
};

if (!existsSync("icons")) {
  mkdirSync("icons");
}

const icons = meta.map(icon => {
  let name = icon.name.replace(find, convert);
  name = `mdi${name[0].toUpperCase()}${name.slice(1)}`;
  return { name, path: icon.path };
});

const firstLine = `// Material Design Icons v${getVersion()}\n`;

for (const { name, path } of icons) {
  write(`icons/${name}.ts`,
    firstLine +
    `const ${name}: string = "${path}";\n` +
    `export default ${name};`
  );
}

const mdiTsLines = icons.map(({ name }) => {
  return `export { default as ${name} } from "./icons/${name}";`;
});

write("mdi.ts", `${firstLine}${mdiTsLines.join('\n')}`);
