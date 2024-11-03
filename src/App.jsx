import React from "react";
import FormHandling from "./Components/FormHandling";
import Cards from "./Components/Cards";
import Axios from "./Components/Axios";
import UI from "./Components/UI";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import First from "./Topics/First";
import Second from "./Topics/Second";
import Third from "./Topics/Third";
import Forth from "./Topics/Forth";
import Fifth from "./Topics/Fifth";
import Sixth from "./Topics/Sixth";
import Seventh from "./Topics/seventh";
import Eighth from "./Topics/Eighth";
import Ninth from "./Topics/Ninth";
import Twelve from "./Topics/Twelve";
import Thirteen from "./Topics/Thirteen";
import Fourteen from "./Topics/Fourteen";
import Fifteen from "./Topics/Fifteen";
import Sixteen from "./Topics/Sixteen";
import Seventeen from "./Topics/Seventeen";
import Eighteen from "./Topics/Eighteen";
import Nineteen from "./Topics/Nineteen";
import Twenty from "./Topics/Twenty";
import TwentyOne from "./Topics/TwentyOne";
import TwentyTwo from "./Topics/TwentyTwo";

const users = [
  {
    name: "John Doe",
    age: 30,
    logo: "https://via.placeholder.com/150/FF5733/FFFFFF?text=JD",
    info: "A passionate developer with experience in React and Tailwind CSS.",
    earnings: 50000,
  },
  {
    name: "Jane Smith",
    age: 28,
    logo: "https://via.placeholder.com/150/33C1FF/FFFFFF?text=JS",
    info: "A creative designer specializing in user experience.",
    earnings: 65000,
  },
  {
    name: "Alice Johnson",
    age: 35,
    logo: "https://via.placeholder.com/150/FF33A1/FFFFFF?text=AJ",
    info: "A project manager with over 10 years of experience.",
    earnings: 80000,
  },
  {
    name: "Michael Brown",
    age: 40,
    logo: "https://via.placeholder.com/150/33FF57/FFFFFF?text=MB",
    info: "A software engineer with a passion for AI and machine learning.",
    earnings: 90000,
  },
  {
    name: "Emily Davis",
    age: 27,
    logo: "https://via.placeholder.com/150/FFC300/FFFFFF?text=ED",
    info: "A digital marketer with expertise in SEO and content strategy.",
    earnings: 55000,
  },
];

const App = () => {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<UI/>}/>
          <Route path="/Axios" element={<Axios />} />
          <Route path="/FormHandling" element={<FormHandling />} />
          <Route
            path="/Cards"
            element={
              <div className="flex flex-wrap justify-center">
                {" "}
                {users.map((elem, index) => {
                  return (
                    <Cards
                      key={index}
                      name={elem.name}
                      logo={elem.logo}
                      info={elem.info}
                      earnings={elem.earnings}
                      age={elem.age}
                    />
                  );
                })}
              </div>
            }
          />
          <Route path="/1.-what-is-react-and-why-react-(introduction)" element={<First/>}/>
          <Route path="/2.-install-react-vite-boilerplate-(npm-create-vite)" element={<Second/>}/>
          <Route path="/3.-import-export" element={<Third/>}/>
          <Route path="/4.-react-folder-structure" element={<Forth/>}/>
          <Route path="/5.-real-dom-vs-virtual-dom" element={<Fifth/>}/>
          <Route path="/6.-jsx" element={<Sixth/>}/>
          <Route path="/7.-usestate-hooks-(variable-of-react)---array-and-object-usage-are-most-common" element={<Seventh/>}/>
          <Route path="/8.-adding-css-(normal-and-tailwind)" element={<Eighth/>}/>
          <Route path="/9.-calling-functions-in-react" element={<Ninth/>}/>
          <Route path="/10.-form-handling-in-react" element={<FormHandling/>}/>
          <Route path="/12.-components" element={<Twelve/>}/>
          <Route path="/13.-props-drilling" element={<Thirteen/>}/>
          <Route path="/14.-rendering-json-data" element={<Fourteen/>}/>
          <Route path="/15.-integrating-api-(axios)" element={<Fifteen/>}/>
          <Route path="/16.-react-router-dom" element={<Sixteen/>}/>
          <Route path="/17.-react-toastify-(for-flash-messages)" element={<Seventeen/>}/>
          <Route path="/18.-useeffect-(lifecycle-method)" element={<Eighteen/>}/>
          <Route path="/19.-useref-(perform-dom-events-in-react)" element={<Nineteen/>}/>
          <Route path="/20.-context-api" element={<Twenty/>}/>
          <Route path="/21.-redux-toolkit" element={<TwentyOne/>}/>
          <Route path="/22.-framer-motion" element={<TwentyTwo/>}/>
        </Routes>
    </>
  );
};

export default App;
