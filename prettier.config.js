module.exports = {
  printWidth: 100,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  bracketSameLine: true,
  trailingComma: 'none',

  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tailwindAttributes: ['className']
}
