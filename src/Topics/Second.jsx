import React from 'react';

const Second = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-6">
      <h1 className="text-4xl text-blue-200 mb-4 leading-tight text-center">Install React-Vite Boilerplate</h1>
      <h2 className="text-2xl text-blue-200 mb-2 leading-snug text-center">Summary</h2>
      <p className="text-lg w-full max-w-xl text-blue-200 mb-4 leading-relaxed text-center">
        Vite is a modern build tool that provides a fast and efficient development environment 
        for React applications. Installing a React-Vite boilerplate sets up a new project quickly 
        with minimal configuration.
      </p>
      
      <h2 className="text-2xl mt-10 text-blue-200 mb-2 leading-snug text-center">Steps to Install React-Vite Boilerplate</h2>
      <ol className="list-decimal mt-10 list-inside text-blue-200 w-full max-w-xl">
        <li className="leading-relaxed mb-4">
          Install Node.js: Ensure that Node.js is installed on your machine.
        </li>
        <li className="leading-relaxed mb-4">
          Create a New Vite Project:
          <ul className="list-disc list-inside mt-2">
            <li className="leading-relaxed">Open your terminal.</li>
            <li className="leading-relaxed">
              Run the command:
              <pre className="bg-gray-700 text-white p-2 mt-1 overflow-x-auto">
                npm create vite@latest my-react-app -- --template react
              </pre>
              Replace <code className="text-blue-200">my-react-app</code> with your desired project name.
            </li>
          </ul>
        </li>
        <li className="leading-relaxed mb-4">
          Navigate to the Project Directory:
          <pre className="bg-gray-700 text-white p-2 mt-1 overflow-x-auto">
            cd my-react-app
          </pre>
        </li>
        <li className="leading-relaxed mb-4">
          Install Dependencies:
          <pre className="bg-gray-700 text-white p-2 mt-1 overflow-x-auto">
            npm install
          </pre>
        </li>
        <li className="leading-relaxed mb-4">
          Start the Development Server:
          <pre className="bg-gray-700 text-white p-2 mt-1 overflow-x-auto">
            npm run dev
          </pre>
        </li>
      </ol>
    </div>
  );
};

export default Second;
