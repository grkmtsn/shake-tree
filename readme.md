# Shake Tree Game

Shake Tree game buil with React, React Context API and Webpack.

## Installation

1.  Clone the project repo - https://github.com/grkmtsn/shake-tree.git
2.  `npm install` to install npm packages
3.  start dev server using `npm run dev`

## Configuration

1. `webpack.config.base.js` config common webpack for both dev and production environments and merge common and webpack environment based config.
2. `webpack/webpack.dev.js` config webpack for dev environment.
3. `webpack/webpack.prod.js` config webpack for production environment.

### Technologies used

- [Webpack 4](https://github.com/webpack/webpack)
- [Babel 7](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
- [React](https://github.com/facebook/react) `16.7.0`
- [Prettier](https://github.com/prettier/prettier) [ Code formatter ]
- [Style](https://github.com/webpack-contrib/style-loader) & [CSS Loader](https://github.com/webpack-contrib/css-loader) & [SASS-loader](https://github.com/webpack-contrib/sass-loader)
- [CSS modules](https://github.com/css-modules/css-modules) [ Isolated style based on each component ]
- [File Loader](https://github.com/webpack-contrib/file-loader) [Resolves import on a file into a url and emits the file into the output directory]
- [React hot loader](https://github.com/gaearon/react-hot-loader)
- [Webpack dev server](https://github.com/webpack/webpack-dev-server)
