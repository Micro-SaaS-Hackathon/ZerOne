/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // This targets your main HTML file where the React app is mounted.
    // It's usually at the root of your project.
    "./index.html",

    // This is the primary glob pattern for a React app.
    // It tells Tailwind to scan all files within the 'src' directory
    // and its subdirectories, specifically looking for files with
    // .js, .ts, .jsx, or .tsx extensions. These are where your
    // React components and their Tailwind class names will be defined.
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
