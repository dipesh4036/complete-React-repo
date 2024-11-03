import React, { useState, useEffect } from 'react';

function Fourteen() {
  const [data, setData] = useState([]);

  // Fetch data from local JSON file or API
  useEffect(() => {
    fetch('/data.json')  // or 'https://api.example.com/data' for an API endpoint
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="p-4 text-left min-h-screen bg-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-blue-200 text-center">Rendering JSON Data in React</h1>
      
      <section className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-200">Theory</h2>
        <p className="text-blue-200 text-base">
          Rendering JSON data in a React application is a common requirement, especially when working with APIs.
          JSON (JavaScript Object Notation) is a lightweight data format that's widely used for data transfer in web applications. 
          React provides various ways to handle and display JSON data, usually involving <code>map()</code> to iterate over the data and render it in components.
        </p>
      </section>

      <section className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-200">Steps</h2>
        <ol className="list-decimal list-inside text-blue-200 text-base">
          <li>Fetch JSON Data: Use <code>fetch()</code> or <code>axios</code> to retrieve JSON data from an API or use hardcoded data for testing.</li>
          <li>Store Data in State: Use <code>useState</code> to store the fetched JSON data.</li>
          <li>Map Data: Use <code>map()</code> to iterate over the JSON array and render the data.</li>
          <li>Render Data: Display the mapped data in the component using JSX.</li>
        </ol>
      </section>

      <section className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-200">Code Example</h2>
        
        <h3 className="text-xl font-semibold text-blue-200">Sample JSON Data (data.json)</h3>
        <div className="flex justify-center">
          <pre className="bg-gray-700 text-left p-4 rounded mb-4 text-white w-full max-w-xs overflow-auto">
            {`
[{
    "id": 1,
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25,
    "email": "jane.smith@example.com"
  }]`}
          </pre>
        </div>
        
        <h3 className="text-xl font-semibold text-blue-200">React Component (App.js)</h3>
        <div className="flex justify-center">
          <pre className="bg-gray-700 text-left p-4 rounded text-white w-full max-w-xs overflow-auto">
            {`import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  // Fetch data from local JSON file or API
  useEffect(() => {
    fetch('/data.json')  // or 'https://api.example.com/data' for an API endpoint
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;`}
          </pre>
        </div>
      </section>

      <section className='text-center'>
        <h2 className="text-2xl font-semibold text-blue-200">Summary</h2>
        <p className="text-blue-200 text-base">
          This example demonstrates how to fetch and render JSON data in a React component.
          The <code>useEffect</code> hook is utilized to fetch data upon component mount,
          and the <code>map()</code> function is employed to dynamically render each user's information.
        </p>
      </section>
    </div>
  );
}

export default Fourteen;
