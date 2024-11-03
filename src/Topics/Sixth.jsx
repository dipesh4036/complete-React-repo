import React from 'react';

const Sixth = () => {
  const title = "Welcome to JSX!";
  const description = "JSX makes it easy to create React elements.";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-6">
      <h1 className="text-4xl text-blue-200 mb-4">{title}</h1>
      
      <div className="flex flex-col lg:flex-row justify-between w-full mt-10">
        <div className="lg:w-[60%] mb-6 lg:mb-0">
          <p className="text-lg text-blue-200 mb-4">{description}</p>
          
          <h2 className="text-2xl text-blue-200 mb-2">JSX Features</h2>
          <ul className="list-disc list-inside text-blue-200 mb-4">
            <li>HTML-like syntax for creating elements.</li>
            <li>JavaScript expressions can be embedded.</li>
            <li>Attributes use camelCase naming conventions.</li>
            <li>Elements can be nested and composed.</li>
          </ul>

          <h2 className="text-2xl mt-10 text-blue-200 mb-2">Summary</h2>
          <p className="text-lg text-blue-200 mb-4">
            JSX is a powerful syntax that allows developers to write HTML-like code within JavaScript, 
            making it easier to create and manage React components.
          </p>
        </div>
        
        <img 
          src="https://miro.medium.com/v2/resize:fit:325/1*BFq8PaxB6h-BoKIsK8SJnw.png" 
          alt="Example of JSX code with components" 
          className="w-[30%] rounded shadow-lg"
        />
      </div>
    </div>
  );
};

export default Sixth;
