import React from "react";

import Project from "./Project";

const project = {
    title: "Ecommerce Project",
    description: [
    "Responsive website with all types of screens" ,
    "The website consists of seven different pages",
    "A page to display the services provided",
    "A page to display the different types of each service provided" ,
    "A page to display the details of each Product" ,
    "A page to view the details of each order" ,
    "The ability to search for any meal or drink by its name"
    ],
    src: "https://www.youtube.com/embed/E37N-TShJiY",
    frontEnd: [
      "Html",
      "Css",
      "Java Script",
      "TailwindCss",
      "React",
      "React-redux",
      "Redux-ToolKit",
      "React-icons",
      "React-router-dom",
      "React- Toastify",
    ],
    github : "https://wasimdaoud.github.io/Ecommerse/"
  };

const EcommerceProject = () => {
    return (
      <div className="w-full h-full">
        <Project project={project} />
      </div>
    );
  };
  
  export default EcommerceProject;
  