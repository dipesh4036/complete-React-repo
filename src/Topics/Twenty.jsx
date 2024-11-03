import React from 'react';

const Twenty = () => {
  // Theory explaining what Context API is
  const theory = `
      The Context API is a powerful feature in React that allows 
      you to share state and other values across the component tree 
      without having to pass props down manually at every level. 
      It provides a way to create global variables that can be 
      accessed by any component within a designated context.

      Key Features:
      - Enables easy state management for large applications.
      - Reduces the need for prop drilling (passing props through multiple layers).
      - Allows for better organization of stateful logic and components.
      - Can be used in combination with hooks for improved functionality.
  `;

  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-4 text-center text-blue-200">
          <h1 className="text-3xl mb-4">Context API</h1>
          <pre className=" text-left text-white p-4 w-full md:w-3/4 overflow-auto whitespace-pre-wrap">
              {theory}
          </pre>
          <h2 className="text-2xl mt-4 mb-2">Steps to Implement</h2>
          <div className="w-full md:w-3/4 mb-4 text-left mx-auto overflow-y-auto h-48">
              <ol className="list-decimal list-inside">
                  <li>Create a context:</li>
                  <pre className="bg-gray-700 text-white p-2">{`const MyContext = React.createContext();`}</pre>
                  <li>Wrap your component tree with the context provider:</li>
                  <pre className="bg-gray-700 text-white p-2">{`<MyContext.Provider value={/* state or functions */}>
  {/* Components that need access to the context */}
</MyContext.Provider>`}</pre>
                  <li>Access the context in a child component:</li>
                  <pre className="bg-gray-700 text-white p-2">{`const value = useContext(MyContext);`}</pre>
                  <li>Update context values as needed:</li>
                  <pre className="bg-gray-700 text-white p-2">{`const [state, setState] = useState(initialValue);
<MyContext.Provider value={{ state, setState }}>`}</pre>
              </ol>
          </div>
          <h2 className="text-2xl mb-2">Example Code</h2>
          <div className="text-left w-full md:w-3/4 mb-4 mx-auto">
              <pre className="bg-gray-700 text-white p-2 overflow-auto">
                  {`import React, { useState, createContext, useContext } from 'react';

const MyContext = createContext();

function App() {
  const [value, setValue] = useState('Hello, World!');

  return (
      <MyContext.Provider value={{ value, setValue }}>
          <Child />
      </MyContext.Provider>
  );
}

function Child() {
  const { value, setValue } = useContext(MyContext);

  return (
      <div>
          <h1>{value}</h1>
          <button onClick={() => setValue('Hello, React!')}>Change Message</button>
      </div>
  );
}

export default App;`}
              </pre>
          </div>
          <h2 className="text-2xl mb-2">Summary</h2>
          <p className="text-blue-200">
              The Context API is an essential tool for managing state 
              and sharing values across components in a React application. 
              It simplifies state management and reduces prop drilling, 
              making your code cleaner and more maintainable. By understanding 
              and utilizing the Context API, you can create more scalable 
              and efficient React applications.
          </p>
      </div>
  );
};

export default Twenty;
