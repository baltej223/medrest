# Documenting Errors, How those were cleared and Learning from them

## Error1:
 - When converting from vite to next.js, Navbar component failed to render conrrectly as tailwind was working correctly
- The main reason was tailwind.config.js, which was
```
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
```
- And navbar component was in @/comps folder with src-url : @/comps/navbar.tsx 
- If we see in tailwind.config.js, in module.export.content its defined to use tailwind at folder which start from app, page and component. But navbar conponent was in @/comps folder where tailwind was never made to run
- Due to this Navbar wasn't rendering correctly. 
**Fixing it**:
- I changed tailwind.config.js to also make tailwind run at @/comps folder by doing to following changes at tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./comps/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
```