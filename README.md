# TailwindCSS Scroll Behavior Plugin

[![npm](https://img.shields.io/npm/v/tailwind-scroll-behavior.svg?style=flat-square)](https://www.npmjs.com/package/tailwind-scroll-behavior)

This plugin generates [scroll-behavior](https://drafts.csswg.org/cssom-view/#smooth-scrolling) classes.

A `scroll-smooth` and `scroll-auto` class will be created.

It is recommended that you use `scroll-smooth` in combination with Tailwind's `motion-safe` variant.
This will only enable smooth scrolling for users who have not specified they prefer reduced motion.

## Installation

Add to your project via:

```bash
# Install using npm
npm install -D tailwind-scroll-behavior

# Install using yarn
yarn add -D tailwind-scroll-behavior
```

Add it to the plugins array of your Tailwind config.

```js
plugins: [
  require('tailwind-scroll-behavior')(), // no options to configure
]
```

By default, this plugin works with the `motion-safe` and `motion-reduce` variants. However, you can customise the 
variants for the plugin, by adding to the variants section of your Tailwind config.

```js
variants: {
	scrollBehavior: ['motion-safe', 'motion-reduce', 'responsive']
}
```

## License

This project is licensed under the [MIT License](https://github.com/lukewarlow/tailwind-scroll-behavior/blob/master/LICENSE).
