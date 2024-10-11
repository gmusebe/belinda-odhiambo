/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: "640",
		md: "768",
		lg: "960",
		xl: "1200",
	},
	fontFamily: {
		primary: "var(--font-marcellus)",
		secondary: "var(--font-montserrat)",
	},
  	extend: {
  		colors: {
			primary: {
				DEFAULT: "#473936",
			},
			secondary: {
				DEFAULT: "#f2dfce",	
			},
			accent: {
				DEFAULT: "#f19687",
				100: "f2d5c5",
			},
  			// background: 'var(--background)',
  			// foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
