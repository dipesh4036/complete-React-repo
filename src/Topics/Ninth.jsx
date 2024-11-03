import React from 'react';

const Ninth = () => {
  // Example function to be called on button click
  const handleClick = () => {
    alert('Button clicked!');
  };

  // Function to log a message when the component mounts
  React.useEffect(() => {
    console.log('Component has mounted!');
  }, []);

  // Function to greet a user
  const greet = (name) => {
    alert(`Hello, ${name}!`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-6">
      <h1 className="text-4xl text-blue-200 mb-4">Calling Functions in React</h1>

      <h2 className="text-2xl text-blue-200 mb-2">1. Calling Functions on Events</h2>
      <p className="text-lg text-blue-200 mb-4">
        You can call functions in response to events, such as clicks or form submissions. 
        Here's an example of a button click handler:
      </p>
      <pre className="bg-gray-700 text-white p-4 w-full overflow-auto">
        {`const handleClick = () => {
  alert('Button clicked!');
};

return (
  <button onClick={handleClick}>Click Me!</button>
);`}
      </pre>
      <button onClick={handleClick} className="bg-blue-500 text-white p-2 rounded">Click Me!</button>

      <h2 className="text-2xl text-blue-200 mb-2">2. Calling Functions in Lifecycle Methods</h2>
      <p className="text-lg text-blue-200 mb-4">
        Functions can be called in lifecycle methods using <code className="text-blue-300">useEffect</code>:
      </p>
      <pre className="bg-gray-700 text-white p-4 w-full overflow-auto">
        {`React.useEffect(() => {
  console.log('Component has mounted!');
}, []);`}
      </pre>

      <h2 className="text-2xl text-blue-200 mb-2">3. Passing Parameters to Functions</h2>
      <p className="text-lg text-blue-200 mb-4">
        You can pass parameters to functions when calling them in event handlers:
      </p>
      <pre className="bg-gray-700 text-white p-4 w-full overflow-auto">
        {`const greet = (name) => {
  alert(\`Hello, \${name}!\`);
};

return (
  <button onClick={() => greet('John')}>Greet John</button>
);`}
      </pre>
      <button onClick={() => greet('John')} className="bg-blue-500 text-white p-2 rounded">Greet John</button>

      <h2 className="text-2xl text-blue-200 mb-2">Summary</h2>
      <p className="text-lg text-blue-200 mb-4">
        - You can call functions in response to events, such as button clicks.<br />
        - Functions can also be called in lifecycle methods like <code className="text-blue-300">useEffect</code>.<br />
        - You can pass parameters to functions directly in event handlers for dynamic behavior.
      </p>
    </div>
  );
};

export default Ninth;
