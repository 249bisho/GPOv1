module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bisho-green': '#1F5D3B', // Deep Enterprise Green
        'bisho-sand': '#F6F2EC',  // Premium Paper Background
        'bisho-gold': '#C9A77F',  // Accent/Process Color
        'bisho-dark': '#0F1720',  // High-contrast Text
      },
      fontFamily: {
        // This gives you that "Nike/Apple" bold look
        sans: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
