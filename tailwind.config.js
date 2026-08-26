/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#030712",
          panel: "rgba(13, 20, 34, 0.65)",
          border: "rgba(255, 255, 255, 0.08)",
          accent: "#6ee7ff", // Cyan/Blue
          accent2: "#8b5cf6", // Purple
          accent3: "#3b82f6", // Indigo/Blue
          text: "#f3f4f6",
          muted: "#9ca3af",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 15px rgba(110, 231, 255, 0.15)' },
          '50%': { opacity: '1', boxShadow: '0 0 25px rgba(110, 231, 255, 0.3)' },
        }
      },
      boxShadow: {
        'cyber-glow': '0 0 20px rgba(110, 231, 255, 0.15)',
        'cyber-glow-heavy': '0 0 35px rgba(110, 231, 255, 0.3)',
        'purple-glow': '0 0 20px rgba(139, 92, 246, 0.15)',
      }
    },
  },
  plugins: [],
}
