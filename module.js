import path from "path";

export default function nuxtBootstrapVue(moduleOptions) {
  const options = Object.assign({}, this.options.axios, moduleOptions);

  // Register `plugin.js` template
  this.addPlugin({ src: path.resolve(__dirname, "plugin.js"), options });
}

module.exports.meta = require("./package.json");
