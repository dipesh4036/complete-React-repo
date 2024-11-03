import React from 'react';

const Eighth = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-4 md:p-6">
      <h1 className="text-3xl md:text-4xl text-blue-200 mb-4">Adding CSS in React (Normal and Tailwind CSS)</h1>

      <h2 className="text-2xl text-blue-200 mb-2">1. Adding Normal CSS</h2>
      <p className="text-lg text-blue-200 mb-4">
        To add standard CSS to your React project, follow these steps:
      </p>

      <h3 className="text-lg text-blue-200 mb-2">Step 1: Create a CSS file</h3>
      <p className="text-lg text-blue-200 mb-4">
        Create a new CSS file in your <code className="text-blue-300">src</code> directory. For example, <code className="text-blue-300">styles.css</code>.
      </p>

      <h3 className="text-lg text-blue-200 mb-2">Step 2: Import the CSS file in your component</h3>
      <pre className="bg-gray-700 text-white p-4 w-full overflow-auto">
        {`import React from 'react';
import './styles.css'; // Importing the CSS file

const NormalCssExample = () => {
  return (
    <div className="normal-style">
      <h1>Hello, World!</h1>
      <p>This is a normal CSS styling example.</p>
    </div>
  );
};

export default NormalCssExample;`}
      </pre>

      <h3 className="text-lg text-blue-200 mb-2">Example CSS (styles.css):</h3>
      <pre className="bg-gray-700 text-white p-4 w-full overflow-auto">
        {`.normal-style {
  background-color: lightblue;
  color: white;
  padding: 20px;
  border-radius: 8px;
}`}
      </pre>

      <h2 className="text-2xl text-blue-200 mb-2">2. Adding Tailwind CSS</h2>
      <p className="text-lg text-blue-200 mb-4">
        Tailwind CSS is a utility-first CSS framework that allows you to apply styles directly within your JSX. Here's how to set it up:
      </p>

      <h3 className="text-lg text-blue-200 mb-2">Step 1: Install Tailwind CSS</h3>
      <pre className="bg-gray-700 text-white p-4 w-full overflow-auto">
        {`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
      </pre>

      <h3 className="text-lg text-blue-200 mb-2">Step 2: Configure Tailwind</h3>
      <pre className="bg-gray-700 text-white p-4 w-full overflow-auto">
        {`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
      </pre>

      <h3 className="text-lg text-blue-200 mb-2">Step 3: Add Tailwind to your CSS</h3>
      <pre className="bg-gray-700 text-white p-4 w-full overflow-auto">
        {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
      </pre>

      <h3 className="text-lg text-blue-200 mb-2">Step 4: Use Tailwind CSS in your components</h3>
      <pre className="bg-gray-700 text-white p-4 w-full overflow-auto">
        {`import React from 'react';
import './index.css'; // Ensure you import your Tailwind CSS

const TailwindExample = () => {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg">
      <h1 className="text-xl font-bold">Hello, World!</h1>
      <p>This is a Tailwind CSS styling example.</p>
    </div>
  );
};

export default TailwindExample;`}
      </pre>

      <h2 className="text-2xl text-blue-200 mb-2">Summary</h2>
      <p className="text-lg text-blue-200 mb-4">
        - <strong>Normal CSS:</strong> Create a CSS file, style your components, and import the CSS in your component files.<br />
        - <strong>Tailwind CSS:</strong> Install Tailwind, configure it, and apply styles using utility classes directly in your JSX.<br />
        By understanding both methods, you can choose the best approach based on your project's needs. Tailwind offers rapid development with utility classes, while normal CSS provides a traditional approach to styling.
      </p>
    </div>
  );
};

export default Eighth;
