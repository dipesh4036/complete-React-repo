import React, { useState } from "react";

const FormHandling = () => {
  // State declarations using useState for form fields and warning message
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState(""); // State for warning message

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form behavior

    // Validate input fields
    if (!email || !username || !password) {
      setWarning("All fields are required."); // Set warning message
      return; // Exit the function
    }

    // If validation passes, log the values
    console.log("Your email is:", email);
    console.log("Your username is:", username);
    console.log("Your password is:", password);

    // Clear the input fields
    setUsername("");
    setPassword("");
    setEmail("");
    setWarning(""); // Clear the warning message
  };

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-4">Sign Up</h2>
      <form onSubmit={submitHandler}>
        <p className="text-red-500 text-center mb-4">
          {warning ? warning : ""}
        </p>

        <div className="mb-4 text-black">
          <input
            value={email} // Controlled input
            onChange={(e) => setEmail(e.target.value)} // Update state
            type="email"
            placeholder="Enter Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4 text-black">
          <input
            value={username} // Controlled input
            onChange={(e) => setUsername(e.target.value)} // Update state
            type="text"
            placeholder="Enter Username"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <div className="mb-6 text-black">
          <input
            value={password} // Controlled input
            onChange={(e) => setPassword(e.target.value)} // Update state
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white font-semibold p-3 rounded-md hover:bg-blue-600 transition"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormHandling;
