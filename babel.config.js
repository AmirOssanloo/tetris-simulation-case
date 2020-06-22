module.exports = {
  plugins: [
    [
      'transform-class-properties'
    ],
    [
      'module-resolver',
      {
        'baseUrl': './',
        alias: {
          '#root': './src',
        }
      }
    ]
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript'
  ]
};
