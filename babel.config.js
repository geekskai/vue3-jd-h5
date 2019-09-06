const plugin = []
if (['production', 'test'].includes(process.env.NODE_ENV)) {
  plugin.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ].concat(plugin)
}
