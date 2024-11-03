import React from 'react';

const Seventh = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-6">
      <h1 className="text-4xl text-blue-200 mb-4 text-center">useState Hook in React</h1>
      <p className="text-lg text-blue-200 max-w-md mb-6 text-center">
        The <code className="text-blue-300">useState</code> hook is a built-in React hook that allows you to add state management to functional components. It provides a way to declare state variables and update them, enabling dynamic and interactive applications. Here's how to use <code className="text-blue-300">useState</code> with different data types, including strings, arrays, and objects.
      </p>

      <h2 className="text-2xl text-blue-200 mb-2 text-center">1. Basic Syntax</h2>
      <pre className="bg-gray-700 text-white p-4 w-full max-w-xl overflow-auto">
        {`import React, { useState } from 'react';

const MyComponent = () => {
  const [state, setState] = useState(initialValue);
  // ...
};`}
      </pre>

      <h2 className="text-2xl text-blue-200 mb-2 text-center">2. Using useState with Strings</h2>
      <p className="text-lg text-blue-200 mb-4 text-center">
        You can easily manage a single string value with <code className="text-blue-300">useState</code>.
      </p>
      <pre className="bg-gray-700 text-white p-4 w-full max-w-xl overflow-auto">
        {`const StringExample = () => {
  const [name, setName] = useState('John Doe');

  const updateName = () => {
    setName('Jane Smith'); // Update the string state
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={updateName}>Change Name</button>
    </div>
  );
};`}
      </pre>

      <h2 className="text-2xl text-blue-200 mb-2 text-center">3. Using useState with Arrays</h2>
      <p className="text-lg text-blue-200 mb-4 text-center">
        Managing an array with <code className="text-blue-300">useState</code> typically involves updating the array using methods like <code className="text-blue-300">map</code> or spreading the current state into a new array.
      </p>
      <pre className="bg-gray-700 text-white p-4 w-full max-w-xl overflow-auto">
        {`const ArrayExample = () => {
  const [fruits, setFruits] = useState(['Apple', 'Banana']);

  const addFruit = () => {
    setFruits([...fruits, 'Orange']); // Add a new fruit to the array
  };

  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruit}>Add Fruit</button>
    </div>
  );
};`}
      </pre>

      <h2 className="text-2xl text-blue-200 mb-2 text-center">4. Using useState with Objects</h2>
      <p className="text-lg text-blue-200 mb-4 text-center">
        When managing objects, use the spread operator to create a new object while updating specific properties.
      </p>
      <pre className="bg-gray-700 text-white p-4 w-full max-w-xl overflow-auto">
        {`const ObjectExample = () => {
  const [user, setUser] = useState({ name: 'John', age: 30 });

  const incrementAge = () => {
    setUser({ ...user, age: user.age + 1 }); // Increment the age property
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <button onClick={incrementAge}>Increment Age</button>
    </div>
  );
};`}
      </pre>

      <h2 className="text-2xl mt-10 text-blue-200 mb-2 text-center">Summary</h2>
      <p className="text-lg text-blue-200 mb-4 text-center">
        The <code className="text-blue-300">useState</code> hook is essential for adding state to functional components. 
        It allows for dynamic and interactive applications.
      </p>
      <h2 className="text-2xl text-blue-200 mb-2 text-center">Additional Considerations</h2>
      <ul className="list-disc text-blue-200 mb-4 pl-5 text-left max-w-md mx-auto">
        <li>
          <strong>Initial State Function:</strong> Use a function for setting the initial state.
        </li>
        <li>
          <strong>Updating with Previous State:</strong> Always use the functional update form.
        </li>
        <li>
          <strong>Controlled Components:</strong> Manage input elements with <code className="text-blue-300">useState</code>.
        </li>
        <li>
          <strong>Performance:</strong> Consider <code className="text-blue-300">useReducer</code> for complex state.
        </li>
        <li>
          <strong>Resetting State:</strong> Provide a method to reset state to initial values.
        </li>
        <li>
          <strong>Removing Items from Arrays:</strong> Demonstrate how to remove elements effectively.
        </li>
      </ul>
    </div>
  );
};

export default Seventh;
