import React from 'react';

const Nineteen = () => {
    // Theory explaining what useRef is
    const theory = `
        The useRef hook is a built-in React hook that allows you to 
        create a mutable reference that persists for the full lifetime 
        of the component. It is often used for directly accessing 
        DOM elements or storing values that do not trigger re-renders 
        when updated.
  
        Key Features:
        - Provides a way to reference DOM elements directly.
        - Holds mutable values without causing re-renders.
        - Useful for storing intervals, timeouts, or previous state values.
        - Works with functional components, making it ideal for modern React.
    `;

    return (
        <div className="p-4 min-h-screen bg-gray-900 text-white text-left">
            <h1 className="text-blue-200 text-3xl text-center mb-4">useRef Hook</h1>
            <pre className="bg-gray-700 p-4 rounded mb-4 overflow-auto" style={{ whiteSpace: 'pre-wrap' }}>
                {theory}
            </pre>
            <h2 className="text-blue-200 text-2xl mb-2">Steps to Implement</h2>
            <ol className="list-decimal list-inside mb-4">
                <li>Import useRef from React:</li>
                <pre className="bg-gray-700 text-left text-white mb-2">{`import React, { useRef } from 'react';`}</pre>
                <li>Define a functional component.</li>
                <li>Create a ref using useRef:</li>
                <pre className="bg-gray-700 text-left text-white mb-2">{`const inputRef = useRef(null);`}</pre>
                <li>Attach the ref to a DOM element:</li>
                <pre className="bg-gray-700 text-left text-white mb-2">{`<input ref={inputRef} type="text" />`}</pre>
                <li>Use the ref to access the DOM element:</li>
                <pre className="bg-gray-700 text-left text-white mb-2">{`const focusInput = () => {
    inputRef.current.focus();
};`}</pre>
            </ol>
            <h2 className="text-blue-200 text-2xl mb-2">Example Code</h2>
            <div style={{ textAlign: 'left' }}>
                <pre className="bg-gray-700 text-white p-4 rounded overflow-auto">
                    {`import React, { useRef } from 'react';

function App() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Click button to focus" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

export default App;`}
                </pre>
            </div>
            <h2 className="text-blue-200 text-2xl mb-2">Summary</h2>
            <p className="text-blue-200">
                The useRef hook is a powerful tool for directly interacting 
                with DOM elements in React. By using useRef, you can manage 
                references to elements, perform DOM operations without 
                triggering re-renders, and maintain mutable values efficiently. 
                Understanding how to leverage useRef can enhance your 
                component's interactivity and performance.
            </p>
        </div>
    );
};

export default Nineteen;
