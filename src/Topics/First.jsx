import React from 'react';

const First = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-6">
      <h1 className="text-4xl text-blue-200 mb-4">What is React and Why React (Introduction)</h1>
      <h2 className="text-2xl text-blue-300 mb-2">A Brief Overview</h2>
      <p className="text-lg w-full md:w-1/2 mt-10 text-blue-200">
        React is a JavaScript library for building user interfaces, particularly 
        single-page applications where data changes over time. Developed by 
        Facebook, it allows developers to create reusable UI components, 
        manage state efficiently, and build applications that are both fast and interactive.
      </p>
    </div>
  );
}

export default First;
