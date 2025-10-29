/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./templates/**/*.liquid"
  ],
  theme: {
    extend: {},
  },
  safelist: [
    // Add any dynamic classes here that might not be detected
    {
      pattern: /^(w-|h-|bg-|text-|grid-cols-|gap-)/,
      variants: ['hover', 'focus', 'group-hover']
    }
  ],
  plugins: [],
}