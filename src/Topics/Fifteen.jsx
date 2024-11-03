import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Fifteen() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  // Fetch data from API using Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data'); // Replace with your API endpoint
        setData(response.data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 text-left min-h-screen bg-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-blue-200 text-center">Integrating API (Axios)</h1>
      
      <section className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-200">Theory</h2>
        <p className="text-blue-200">
          Axios is a promise-based HTTP client for the browser and Node.js. It allows you to make requests to APIs easily and handle responses seamlessly.
          Integrating an API using Axios involves sending requests, receiving responses, and managing errors effectively.
        </p>
      </section>

      <section className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-200">Steps</h2>
        <ol className="list-decimal list-inside text-blue-200">
          <li>Install Axios: Run <code>npm install axios</code> in your project directory.</li>
          <li>Import Axios: Import Axios into your component.</li>
          <li>Fetch Data: Use Axios to fetch data from the API within a <code>useEffect</code> hook.</li>
          <li>Store Data: Save the response data in the component's state using <code>useState</code>.</li>
          <li>Handle Errors: Implement error handling to manage any issues during the API call.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-center font-semibold text-blue-200">Code Example</h2>
        <h3 className="text-xl text-center font-semibold text-blue-200">React Component (App.js)</h3>
        <div className="flex justify-center">
          <pre className="bg-gray-700 p-4 rounded mb-4 text-white overflow-auto w-full max-w-2xl">
            {`import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  // Fetch data from API using Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data'); // Replace with your API endpoint
        setData(response.data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>Details: {item.details}</p>
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
        <p className="text-blue-200">
          This example demonstrates how to integrate an API using Axios in a React component.
          The <code>useEffect</code> hook is used to fetch data on component mount, and the response is stored in the state.
          Additionally, error handling is implemented to manage any potential issues during the API call.
        </p>
      </section>
    </div>
  );
}

export default Fifteen;
