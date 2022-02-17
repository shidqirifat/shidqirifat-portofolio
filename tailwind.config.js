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
      'bg-sky-700',
      'text-sky-400',
      'bg-slate-200',
      'text-slate-900',
      'bg-slate-700',
      'text-slate-400',
      'bg-orange-200',
      'text-orange-900',
      'bg-orange-700',
      'text-orange-400',
      'bg-blue-200',
      'text-blue-900',
      'bg-blue-700',
      'text-blue-400',
      'bg-red-200',
      'text-red-900',
      'bg-red-700',
      'text-red-400',
      'bg-yellow-200',
      'text-yellow-900',
      'bg-yellow-700',
      'text-yellow-400',
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
