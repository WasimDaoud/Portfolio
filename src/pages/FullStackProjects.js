import React from "react";

import Project from "./Project";

const project = {
  title: "Blog App Project",
  description: [
  "Responsive website with all types of screens" ,
  "The site is protected from attacks ( Xss , Hpp )" ,
  "New membership registration and login system",
  "Verify the ownership of the email you want to register with by sending a verification message to this email",
  "The ability to change the password if it is forgotten by entering and verifying the email and resetting a new password" ,
  "Checking the strength of the password and whether the email is available or not" ,
  "The member who is logged in can create, modify and delete his profile" ,
  "The member who is logged in can create, edit and delete his own posts" ,
  "The member who is logged in can create, edit and delete his own comments on any post on the site" ,
  "A logged in member can like or dislike any post on the site",
  "Only the admin can see and access the site's Dashboard" ,
  "The admin can view and delete any of the profiles, posts and comments on the site" ,
  "The admin cannot edit any of the profiles, posts and comments on the site" ,
  "Only the admin can create, delete and modify any of the categories on the site" ,
  "Store website images on Cloudinary",
  "When any post is deleted, all comments related to this post will be automatically deleted from the database and from Cloudinary" ,
  "When deleting any profile, all posts and comments related to this profile will be automatically deleted from the database and from Cloudinary." ,
  ],
  src: "https://www.youtube.com/embed/an9TWARQXOg",
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
    "React-moment",
    "React-Loading-Spinner",
    "SweetAlert"
  ],
   backEnd: [
    "Node",
    "Express",
    "Mongoose" ,
    "Multer" ,
    "NodeMailer" ,
    "Dotenv",
    "Cors",
    "Xss-clean",
    "Express-rate-limit",
    "Helmet",
    "Hpp",
    "BcryptJS",
    "Crypto",
    "Jsonwebtoken",
    "Validator",
  ],
};

const FullStackProjects = () => {
  return (
    <div className="w-full h-full">
      <Project project={project} />
    </div>
  );
};

export default FullStackProjects;
