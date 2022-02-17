module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      'mb-4',
      'bg-sky-200',
      'bg-sky-900',
      'bg-slate-200',
      'bg-slate-900',
      'bg-orange-200',
      'bg-orange-900',
      'bg-blue-200',
      'bg-blue-900',
      'bg-red-200',
      'bg-red-900',
      'bg-yellow-200',
      'bg-yellow-900',
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
