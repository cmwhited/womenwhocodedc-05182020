module.exports = {
  presets: ['@babel/env', '@babel/typescript'],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-destructuring',
    [
      'babel-plugin-transform-builtin-extend',
      {
        globals: ['Error', 'Array'],
      },
    ],
  ],
};
