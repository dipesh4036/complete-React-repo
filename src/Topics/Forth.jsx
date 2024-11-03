import React from 'react';

const Forth = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-6">
      <h1 className="text-4xl text-blue-200 mb-4">React Folder Structure</h1>
      <pre className="bg-gray-700 text-blue-200 p-4 w-full overflow-auto">
        {`my-react-app/
│
├── public/              # Public assets
│   ├── index.html       # Main HTML file
│   └── favicon.ico      # Favicon
│
├── src/                 # Source files
│   ├── assets/          # Images, fonts, and other assets
│   ├── components/      # Reusable components
│   ├── pages/           # Page components (if using routing)
│   ├── hooks/           # Custom hooks
│   ├── context/         # Context API files
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   ├── index.jsx        # Entry point of the application
│   └── styles/          # Global styles (CSS or Tailwind config)
│
└── package.json         # Project metadata and dependencies`}
      </pre>

      <h2 className="text-2xl mt-10 text-blue-200 mb-2">Visual Representation</h2>
      <img 
        src="https://miro.medium.com/v2/resize:fit:904/1*9Z-j4hPQPnyfHCwGhxQvAQ.png" 
        alt="React Folder Structure Diagram" 
        className="mb-4 rounded shadow-lg w-full max-w-md" 
      />

      <h2 className="text-2xl mt-10 text-blue-200 mb-2">Summary</h2>
      <p className="text-lg w-full md:w-1/2 text-blue-200 mb-4">
        A well-organized folder structure is essential for maintaining and scaling React applications. 
        It helps in managing files effectively, ensuring easy navigation and collaboration among developers.
      </p>
    </div>
  );
}

export default Forth;
