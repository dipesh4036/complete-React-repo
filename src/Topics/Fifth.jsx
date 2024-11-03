import React from 'react';

const Fifth = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-6">
      <h1 className="text-4xl text-blue-200 mb-4">Real DOM vs. Virtual DOM</h1>
      
      <div className="flex flex-col md:flex-row justify-between w-full mt-10">
        <div className="w-full md:w-[60%]">
          <h2 className="text-2xl text-blue-200 mb-2">Key Differences</h2>
          <table className="min-w-full text-blue-200 mb-4 border border-gray-700">
            <thead>
              <tr className="bg-gray-700">
                <th className="text-left p-2">Feature</th>
                <th className="text-left p-2">Real DOM</th>
                <th className="text-left p-2">Virtual DOM</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-600">
                <td className="p-2">Performance</td>
                <td className="p-2">Slower due to direct manipulation</td>
                <td className="p-2">Faster updates via batch processing</td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="p-2">Re-rendering</td>
                <td className="p-2">Updates the entire UI</td>
                <td className="p-2">Only updates changed elements</td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="p-2">Memory Usage</td>
                <td className="p-2">Higher due to actual elements</td>
                <td className="p-2">Lower, as it’s a lightweight copy</td>
              </tr>
              <tr>
                <td className="p-2">Implementation</td>
                <td className="p-2">Uses browser APIs</td>
                <td className="p-2">Uses React’s reconciliation algorithm</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl mt-10 text-blue-200 mb-2">Summary</h2>
          <p className="text-lg text-blue-200 mb-4">
            The Virtual DOM improves performance by minimizing direct manipulations to the Real DOM, 
            leading to a more efficient rendering process in React applications.
          </p>
        </div>
        
        <img 
          src="https://media.geeksforgeeks.org/wp-content/uploads/20220905155609/RealDOM-660x330.jpg" 
          alt="Real DOM vs Virtual DOM" 
          className="w-full md:w-[30%] rounded shadow-lg mt-4 md:mt-0 md:ml-4"
        />
      </div>
    </div>
  );
}

export default Fifth;
