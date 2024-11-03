// TwentyOne.jsx

const TwentyOne = () => {
  // Theory explaining what Redux Toolkit is
  const theory = `
      Redux Toolkit is the official, recommended way to write Redux logic. 
      It provides a set of tools and best practices to simplify the development 
      of Redux applications. Redux Toolkit includes utilities for setting up 
      a store, creating reducers, and managing state in a more efficient 
      and less error-prone way.

      Key Features:
      - Simplified store setup with configureStore.
      - Built-in support for immutability with createSlice.
      - Middleware and DevTools integration out of the box.
      - Encourages best practices and reduces boilerplate code.
  `;

  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-4 text-center text-blue-200">
          <h1 className="text-3xl mb-4">Redux Toolkit</h1>
          <pre className="text-xl  p-4 w-full md:w-3/4 overflow-auto whitespace-pre-wrap">
              {theory}
          </pre>
          <h2 className="text-2xl mt-4 mb-2">Steps to Implement</h2>
          <div className="w-full md:w-3/4 mb-4 text-left mx-auto h-48 overflow-auto">
              <ol className="list-decimal list-inside">
                  <li>Install Redux Toolkit and React-Redux:</li>
                  <pre className="bg-gray-700 text-white p-2">{`npm install @reduxjs/toolkit react-redux`}</pre>
                  <li>Create a slice:</li>
                  <pre className="bg-gray-700 text-white p-2">{`import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
      increment: (state) => { state.value += 1; },
      decrement: (state) => { state.value -= 1; },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;`}</pre>
                  <li>Set up the Redux store:</li>
                  <pre className="bg-gray-700 text-white p-2">{`import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
      counter: counterReducer,
  },
});

export default store;`}</pre>
                  <li>Wrap your application with the Provider:</li>
                  <pre className="bg-gray-700 text-white p-2">{`import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
      <Provider store={store}>
          {/* Your components here */}
      </Provider>
  );
}`}</pre>
                  <li>Use the Redux state in your components:</li>
                  <pre className="bg-gray-700 text-white p-2">{`import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
      <div>
          <h1>{count}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
  );
}`}</pre>
              </ol>
          </div>
          <h2 className="text-2xl mb-2">Example Code</h2>
          <div className="text-left w-full md:w-3/4 mb-4 mx-auto">
              <pre className="bg-gray-700 text-white p-2 overflow-auto">
                  {`import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

function App() {
  return (
      <Provider store={store}>
          <Counter />
      </Provider>
  );
}

export default App;`}
              </pre>
          </div>
          <h2 className="text-2xl mb-2">Summary</h2>
          <p className="text-blue-200">
              Redux Toolkit streamlines the process of managing state in 
              React applications. By providing a robust set of tools and 
              encouraging best practices, Redux Toolkit reduces boilerplate 
              code and makes it easier to implement and maintain global 
              state management. By following the steps outlined above, 
              you can effectively integrate Redux Toolkit into your React 
              projects.
          </p>
      </div>
  );
};

export default TwentyOne;
