const Eighteen = () => {
    // Theory explaining what useEffect is
    const theory = `
        The useEffect hook is a fundamental part of React that allows 
        functional components to perform side effects. Side effects can 
        include data fetching, subscriptions, or manually changing 
        the DOM. It mimics the behavior of lifecycle methods such as 
        componentDidMount, componentDidUpdate, and componentWillUnmount 
        from class components.

        Key Features:
        - Executes after every render by default.
        - Can be customized to run only on specific state or prop changes.
        - Cleans up resources to prevent memory leaks.
        - Can handle asynchronous operations like API calls.
    `;
  
    return (
        <div className="p-4 md:p-8 text-center" style={{ lineHeight: '1.6' }}>
            <h1 className="text-blue-200 text-3xl md:text-4xl">useEffect Hook</h1>
            <pre className="text-blue-200 p-2 whitespace-pre-wrap">
                {theory}
            </pre>
            <h2 className="text-blue-200 text-2xl">Steps to Implement</h2>
            <ol className="list-decimal list-inside text-left mx-auto max-w-2xl">
                <li>Import useEffect from React:</li>
                <pre className="bg-gray-700 text-white p-2">{`import React, { useEffect } from 'react';`}</pre>
                <li>Define a functional component.</li>
                <li>Use the useEffect hook inside the component:</li>
                <pre className="bg-gray-700 text-white p-2">{`useEffect(() => {
    // Code to run on component mount/update
  }, [dependencies]);`}</pre>
                <li>Provide a cleanup function if necessary:</li>
                <pre className="bg-gray-700 text-white p-2">{`useEffect(() => {
    // Code to run on mount
    return () => {
      // Cleanup code
    };
  }, []);`}</pre>
            </ol>
            <h2 className="text-blue-200 text-2xl">Example Code</h2>
            <div style={{ textAlign: 'left', maxWidth: '100%', overflowX: 'auto' }}>
                <pre className="bg-gray-700 text-white p-2">
                    {`import React, { useEffect, useState } from 'react';
  
function App() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
        document.title = \`Count: \${count}\`;
        
        // Cleanup function
        return () => {
            console.log('Cleanup for count: ', count);
        };
    }, [count]); // Runs every time 'count' changes
  
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
  
export default App;`}
                </pre>
            </div>
            <h2 className="text-blue-200 text-2xl">Summary</h2>
            <p className="text-blue-200">
                The useEffect hook is essential for managing side effects in 
                functional components. By using useEffect, you can handle 
                various operations such as data fetching and subscriptions 
                while keeping your components clean and efficient. Understanding 
                its behavior and lifecycle can greatly enhance your React 
                applications.
            </p>
        </div>
    );
};

export default Eighteen;
