/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors:{
      softBlue:"hsl(var(--soft-blue))",
      darkBgMain:"hsl(var(--very-dark-blue-bgmain))",
      cyan:"hsl(var(--cyan))",
      cyanOpacity:"hsl(var(--cyan)/0.3)",
      cardBg:"hsl(var(--very-dark-blue-bgcard))",
      lineColor:"hsl(var(--very-dark-blue-line))",
      white:"hsl(var(--white))"

    },
    extend: {
      fontFamily:{
        outfit:"'outfit',sans-serif"
      }
    },
  },
   plugins: [],
}

