import React, { useState } from "react";
import axios from "axios";

const Axios = () => {
  // State to hold the fetched data
  const [data, setData] = useState([]);

  // Function to fetch data from the API
  const api = async () => {
    try {
      const res = await axios.get("https://picsum.photos/v2/list");
      setData(res.data); // Update state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error); // Handle errors
    }
  };

  return (
    <div className="flex justify-center items-center mt-10 flex-col">
      {/* Button to fetch data manually */}
      <button
        onClick={api}
        className="bg-teal-500 w-1/2 md:w-1/3 p-3 m-2 rounded text-white"
      >
        Use Data
      </button> 

      {/* Render fetched data */}
      {data.map((elem) => (
        <div
          key={elem.id} // Unique key for each element
          className="h-auto w-full bg-white flex flex-col md:flex-row items-center my-2 p-4 rounded shadow-lg"
        >
          <img
            className="h-40 w-full md:w-1/3 m-2 object-cover rounded" // Maintain aspect ratio of the image
            src={elem.download_url}
            alt={elem.author} // Alt text for accessibility
          />
          <div className="flex flex-col md:ml-4">
            <h1 className="text-black">
              <b className="text-teal-600">Name: </b>
              {elem.author}
            </h1>
            <h1 className="text-black">
              <b className="text-teal-600">Width: </b>
              {elem.width}
            </h1>
            <h1 className="text-black">
              <b className="text-teal-600">Height: </b>
              {elem.height}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Axios;
