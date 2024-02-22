import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      dropShadow:{
        '2xl': '2px 2px 2px rgba(228, 229, 230, 0.50)',
        '3xl': '0px 5px 5px rgba(0, 0, 0, 1)',
      },
      screens: {
        'xsm': '285px',
  
        'xmd': '468px',
  
        'sm': '640px',
  
        'md': '768px',
  
        'lg': '1024px',
  
        'xl': '1280px',
  
        '2xl': '1536px',
  
        '3xl': '1636px',
  
        '4xl': '1800px',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'gray-line': "rgba(10, 10, 10, 0.25)",
        'gray-shadow': "rgba(0, 0, 0, 0.25)",
        'transparent': 'rgba(0, 0, 0, 0)',
        'black': '#000000',
        'black-light': '#0A0A0A',
        'black-gray-border': 'rgba(0, 0, 0, 0.3)',
        'gray-sidebar': '#292929',
        'gray': '#525252',
        'white': '#ffffff',
        'white-normal': '#F1F1F1',
        'white-simple': '#E4E5E6',
        'white-gray': '#E6E7E8',
        'light-gray': '#D9D9D9',
        'red': '#D52C2C',
        'green-simple': '#509d45',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config