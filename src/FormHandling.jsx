import React, { useState } from "react";

const FormHandling = () => {
  const [username, setUsername] = useState("");

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form behavior
    console.log(username); // Log the username
    setUsername(""); // Clear the input field
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={username} // Controlled input
        onChange={(e) => setUsername(e.target.value)} // Update state
        type="text"
        placeholder="Enter username"
        className="text-white bg-transparent"
      />
      <button className="bg-pink-400 m-3 rounded-md text-black" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormHandling;
