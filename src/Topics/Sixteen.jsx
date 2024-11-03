import React from "react";

const Sixteen = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <h1 className="text-3xl text-center font-bold mb-4 text-blue-200">
        Integrating React Router DOM
      </h1>

      <section className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-200">Theory</h2>
        <p className="text-blue-200 max-w-md mx-auto">
          React Router DOM is a powerful library for routing in React
          applications, enabling navigation between components without
          refreshing the page.
        </p>
      </section>

      <section className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-200">Steps to Integrate</h2>
        <ol className="list-decimal list-inside text-blue-200 max-w-md mx-auto">
          <li>
            Install React Router DOM: Run{" "}
            <code className="text-blue-300">npm install react-router-dom</code> in your terminal.
          </li>
          <li>
            Set Up the Router: Import necessary components and wrap your
            application with the <code className="text-blue-300">Router</code> component.
          </li>
          <li>
            Define Routes: Use the <code className="text-blue-300">Route</code> component to specify paths
            and the components to render.
          </li>
          <li>
            Create Navigation Links: Use the <code className="text-blue-300">Link</code> component for
            navigation between different routes.
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-center font-semibold text-blue-200">Example Code</h2>
        <pre className="bg-gray-700 p-4 rounded overflow-auto">
          {`import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Welcome to the Home Page!</h2>;
}

function About() {
  return <h2>Learn More About Us on the About Page.</h2>;
}

function Contact() {
  return <h2>Contact Us Through the Contact Page.</h2>;
}

function App() {
  return (
    <Router>
      <div className="p-4 text-center min-h-screen bg-gray-900">
        <h1 className="text-3xl font-bold mb-4 text-blue-200">React Router DOM Example</h1>
        <nav className="mb-6">
          <Link className="text-blue-200 mx-2" to="/">Home</Link>
          <Link className="text-blue-200 mx-2" to="/about">About</Link>
          <Link className="text-blue-200 mx-2" to="/contact">Contact</Link>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;`}
        </pre>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold text-blue-200">Summary</h2>
        <p className="text-blue-200 max-w-md mx-auto">
          This example sets up routing in a React application using React Router
          DOM, providing navigation links and components for different pages.
        </p>
      </section>
    </div>
  );
};

export default Sixteen;
