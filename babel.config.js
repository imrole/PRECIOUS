module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'mand-mobile',
        libraryDirectory: 'components'
      }
    ],
    ["@nutui/babel-plugin-separate-import", {
      "style": "scss"
    }]
  ]
}
