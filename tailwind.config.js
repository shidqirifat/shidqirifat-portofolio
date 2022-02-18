module.exports = {
  darkMode: "class",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      'mb-4',
      'bg-sky-200',
      'text-sky-900',
      'bg-slate-200',
      'text-slate-900',
      'bg-orange-200',
      'text-orange-900',
      'bg-blue-200',
      'text-blue-900',
      'bg-red-200',
      'text-red-900',
      'bg-yellow-200',
      'text-yellow-900',
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'serif']
      }
    },
  },
  plugins: [],
}
