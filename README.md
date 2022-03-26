# PLEASE DONT USE THIS PLUGIN FOR WEBPACK VERSION < 4


# craco-copy-webpack-plugin
This is a craco plugin that adds [copy-webpack-plugin] support to create-react-app version >= 2 and webpack 4.

## Installation
First, follow the [`craco` Installation Instructions](https://github.com/sharegate/craco/blob/master/packages/craco/README.md##installation) to install the `craco` package, create a `craco.config.js` file.

Then install `craco-copy-webpack-plugin`:

```bash
$ yarn add craco-copy-webpack-plugin

# OR

$ npm i -S craco-copy-webpack-plugin
```

## Usage

Here is a complete `craco.config.js` configuration file that adds copy-webpack-plugin to `create-react-app`:

```js
module.exports = {
  plugins: [
    {
      plugin: require('craco-copy-webpack-plugin'),
      options: {
        patterns: [{
          from: './src/assets/',
          to: './dist/assets/',
        }]
      }
    },
  ],
}
```
