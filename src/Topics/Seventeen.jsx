import React from 'react';

const Seventeen = () => {
  // Theory explaining what React Toastify is
  const theory = `
      React Toastify is a popular library for displaying notifications 
      and flash messages in React applications. It provides an easy 
      way to show transient messages, such as success alerts, 
      error messages, or information notices. Toast notifications 
      improve user experience by providing timely feedback 
      without interrupting the flow of the application.

      Key Features:
      - Customizable notifications with different styles.
      - Various positions on the screen for displaying toasts.
      - Auto-dismiss functionality after a specified duration.
      - Support for different types of notifications (success, 
        error, info, warning).
  `;

  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-6">
          <h1 className="text-blue-200 text-3xl mb-4">React Toastify</h1>
          <pre className="text-blue-200 p-2 mb-4" style={{ whiteSpace: 'pre-wrap', maxWidth: '600px', textAlign: 'left' }}>
              {theory}
          </pre>
          <h2 className="text-blue-200 text-xl mb-2">Steps to Implement</h2>
          <ol className="list-decimal list-inside text-blue-200 mb-4 max-w-xl w-full">
              <li className="leading-relaxed mb-2">
                  Install React Toastify:
                  <code className="text-blue-200 block">npm install react-toastify</code>
              </li>
              <li className="leading-relaxed mb-2">
                  Import the library:
                  <pre className="bg-gray-700 text-left text-white p-2 mt-1 overflow-x-auto">{`import { ToastContainer, toast } from 'react-toastify';`}</pre>
              </li>
              <li className="leading-relaxed mb-2">
                  Configure toast notifications:
                  <pre className="bg-gray-700 text-left text-white p-2 mt-1 overflow-x-auto">{`// Example code to show notifications
const notify = () => {
  toast.success("Success message!");
  toast.error("Error message!");
};`}</pre>
              </li>
              <li className="leading-relaxed mb-2">
                  Add the ToastContainer in your JSX:
                  <pre className="bg-gray-700 text-left text-white p-2 mt-1 overflow-x-auto">{`<ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  closeOnClick
  pauseOnHover
  draggable
/>`}</pre>
              </li>
              <li className="leading-relaxed mb-2">
                  Customize the toasts as needed.
              </li>
          </ol>
          <h2 className="text-blue-200 text-xl mb-2">Example Code</h2>
          <div style={{ textAlign: 'left', maxWidth: '600px', width: '100%' }}>
              <pre className="bg-gray-700 text-white p-2 overflow-x-auto">
                  {`import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => {
      toast.success("This is a success message!");
      toast.error("This is an error message!");
  };

  return (
      <div>
          {/* Button to show toast messages */}
          <button onClick={notify}>Show Toast</button>
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              closeOnClick
              pauseOnHover
              draggable
          />
      </div>
  );
}

export default App;`}
              </pre>
          </div>
          <h2 className="text-blue-200 text-xl mb-2">Summary</h2>
          <p className="text-blue-200 max-w-xl text-center">
              React Toastify is an excellent tool for displaying flash 
              messages in React applications. Its ease of use, combined 
              with powerful customization options, makes it ideal for 
              providing user feedback. By following the steps outlined 
              above, you can easily implement toast notifications in your 
              application, enhancing the user experience significantly.
          </p>
      </div>
  );
};

export default Seventeen;
