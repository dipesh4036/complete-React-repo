import React from "react";

const Twelve = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-6">
      <h1 className="text-4xl text-blue-200 mb-4">Components in React</h1>
      <p className="text-lg text-blue-200 md:w-[50%] mb-6">
        Components are the building blocks of any React application. They allow you to break down the UI into reusable, independent pieces, making it easier to manage and maintain your code.
      </p>

      <div className="flex flex-col md:flex-row items-start mb-6 w-full"> {/* Change here */}
        <img 
          src="https://www.kanakinfosystems.com/web/image/15283-5c5947ef/1.jpg?access_token=37dd648e-7711-439e-be81-7548288d4c2b" 
          alt="Illustration of React Components" 
          className="w-full md:w-96 h-96 rounded shadow-lg mb-4 md:mb-0 md:mr-4" // Adjusting image for responsive
        />
        <div className="mt-0 md:mt-16">
          <h2 className="text-2xl text-blue-200 mb-2">Key Concepts</h2>
          <ul className="text-lg text-blue-200 mb-4">
            <li><strong>Types of Components:</strong>
              <ul>
                <li>Functional Components: Simple JavaScript functions that return JSX.</li>
                <li>Class Components: ES6 classes extending from <code className="text-blue-300">React.Component</code>.</li>
              </ul>
            </li>
            <li><strong>Props:</strong> Inputs passed to components that allow data sharing.</li>
            <li><strong>State:</strong> Internal management of component data using hooks or <code className="text-blue-300">this.state</code>.</li>
            <li><strong>Composition:</strong> Components can be composed together to build complex UIs.</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl text-blue-200 mb-2">Example of Functional Components</h2>
      <pre className="bg-gray-700 text-white p-4 w-full overflow-auto">
        {`import React from "react";

// Functional component that takes a name prop
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Main App component
const App = () => {
  return (
    <div className="app-container">
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
};

export default App;`}
      </pre>

      <h2 className="text-2xl text-blue-200 mb-2">Example of Class Components</h2>
      <pre className="bg-gray-700 text-white p-4 w-full overflow-auto">
        {`import React, { Component } from "react";

// Class component for counting
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Initial count
    };
  }

  // Method to increment count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;`}
      </pre>

      <h2 className="text-2xl mt-10 text-blue-200 mb-2">Summary</h2>
      <p className="text-lg text-blue-200 md:w-[50%] mb-4">
        Components in React are fundamental for building user interfaces. They can be functional or class-based, allowing for different styles of implementation. Understanding how to create, use, and manage props and state within components is essential for developing effective React applications.
      </p>
    </div>
  );
};

export default Twelve;
