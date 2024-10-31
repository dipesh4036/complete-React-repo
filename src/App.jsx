import React from "react";
import FormHandling from "./FormHandling";
import Components from "./Components";

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
    <div>
      <h1>Hello</h1>
      <FormHandling />
      <div className="flex flex-wrap justify-center">
      {users.map((elem,index) => {
        return <Components key={index} name={elem.name} logo={elem.logo} info={elem.info} earnings={elem.earnings} age={elem.age}/>
      })}
      </div>
    </div>
  );
};

export default App;
