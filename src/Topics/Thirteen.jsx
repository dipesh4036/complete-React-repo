import React from 'react';

const Thirteen = () => {
  return (
    <div className="min-h-screen flex flex-col items-start justify-center bg-gray-800 p-6">
      <h1 className="text-4xl text-white mb-4">Prop Drilling in React</h1>
      
      <section className="flex flex-row w-full mb-6">
        <div className="flex-1 w-3/5"> {/* 60% width for text */}
          <p className="text-lg text-white mb-6">
            React is a popular JavaScript library for building user interfaces using components. A key concept in React is “prop drilling,” which is the process of passing data through multiple layers of components. This guide will explain prop drilling for developers of all levels.
          </p>

          <h2 className="text-2xl text-white mb-2">What are Props?</h2>
          <p className="text-lg text-white mb-4">
            Props, short for properties, are a mechanism for passing data from parent to child components. They allow a parent component to communicate with its children by passing information as props, essentially attributes.
          </p>

          <h2 className="text-2xl text-white mb-2">Introduction to Prop Drilling:</h2>
          <p className="text-lg text-white mb-4">
            <strong>Definition of Prop Drilling:</strong> Prop drilling refers to the process of passing data through multiple layers of nested components in a React application. It is essential for maintaining communication between parent and child components within the component tree.
          </p>

          <h2 className="text-2xl text-white mb-2">Why Do We Need Prop Drilling?</h2>
          <p className="text-lg text-white mb-4">
            Prop drilling is necessary when data needs to be shared across multiple levels of components within the hierarchy. As components become deeply nested, passing props directly can become challenging.
          </p>

          <h2 className="text-2xl text-white mb-2">Code Example:</h2>
          <pre className="bg-gray-700 md:w-full text-white p-4 mb-4 overflow-auto">
            {`// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [data, setData] = useState('Hello from Parent');

  return (
    <div>
      <h1>{data}</h1>
      <ChildComponent data={data} />
    </div>
  );
};

export default ParentComponent;

// ChildComponent.js
import React from 'react';
import GrandchildComponent from './GrandchildComponent';

const ChildComponent = (props) => {
  return (
    <div>
      <h2>{props.data}</h2>
      <GrandchildComponent data={props.data} />
    </div>
  );
};

export default ChildComponent;

// GrandchildComponent.js
import React from 'react';

const GrandchildComponent = (props) => {
  return (
    <div>
      <h3>{props.data}</h3>
    </div>
  );
};

export default GrandchildComponent;`}
          </pre>

          <h2 className="text-2xl text-white mb-2">Challenges of Prop Drilling:</h2>
          <p className="text-lg text-white mb-4">
            While prop drilling is powerful, it poses challenges such as maintenance issues and difficulties in tracking data flow. This can make the application less scalable and harder to manage as it grows.
          </p>

          <h2 className="text-2xl text-white mb-2">Alternatives to Prop Drilling:</h2>
          <ul className="text-lg text-white mb-4">
            <li><strong>Context API:</strong> The React Context API provides an alternative to prop drilling, allowing you to share values (like themes or authentication state) across the component tree without passing props through each level.</li>
            <li><strong>Redux:</strong> Redux centralizes the state management, eliminating the need for prop drilling and making state accessible to any component that needs it.</li>
          </ul>

          <h2 className="text-2xl text-white mb-2">Advantages and Disadvantages:</h2>
          <p className="text-lg text-white mb-4">
            Prop drilling is simple and easy to understand for smaller applications. However, it can become cumbersome as the application scales. Context API and Redux offer solutions to prop drilling but introduce additional complexity.
          </p>

          <h2 className="text-2xl text-white mb-2">Conclusion:</h2>
          <p className="text-lg text-white mb-4">
            In conclusion, prop drilling is a valuable concept in React, especially for smaller applications or components with shallow hierarchies. As applications grow, considering alternatives like the Context API or Redux becomes crucial. Understanding the pros, cons, and best practices helps developers make informed decisions based on their specific needs.
          </p>
        </div>

        <div className="w-2/5"> {/* 40% width for images */}
          <div className="flex flex-col space-y-4">
            <img 
              src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*OUNRwTHK0FLrpKhTsmojAQ.png" 
              alt="Illustration of Prop Drilling" 
              className="w-full rounded" 
            />
            <img 
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*TRjMRAgIbh1-LgwiOjsNBg.gif" 
              alt="Animation showing Prop Drilling" 
              className="w-full rounded" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Thirteen;
