import React from 'react'

const Third = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-6">
      <h1 className="text-4xl text-blue-200 mb-4">Import and Export in React</h1>
      
      <h2 className="text-2xl text-blue-200 mb-2">Summary</h2>
      <p className="text-lg w-[50%] text-blue-200 mb-4">
        In React, the concepts of import and export are crucial for organizing and sharing code 
        between files. Using ES6 module syntax, you can define which components, functions, or 
        variables should be available to other files.
      </p>
      
      <h2 className="text-2xl mt-10 text-blue-200 mb-2">Key Points</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="text-blue-200">
          <span className="text-white">Exporting:</span> You can export components or variables from a file using either named exports or default exports.
        </li>
        <li className="text-blue-200">
          <span className="text-white">Importing:</span> You can import those exports in other files to use the components or variables.
        </li>
      </ul>

      <h2 className="text-2xl mt-10 text-blue-200 mb-2">Steps to Use Import and Export</h2>
      <ol className="list-decimal list-inside text-blue-200 mb-4">
        <li>Create a Component: Define a React component in a separate file.</li>
        <li>
          Export the Component:
          <ul className="list-disc text-white list-inside mt-2">
            <li>Use export default for default exports.</li>
            <li>Use exportfor named exports.</li>
          </ul>
        </li>
        <li>Import the Component: Use <code className="text-blue-200">import</code> to bring the component into another file.</li>
      </ol>
    </div>
  );
}

export default Third