import React from "react";
import { categries } from "../Assets/DATA/Data";
import ShowTypes from "../components/ShowTypes";

const Services = () => {
  const Categries = categries;

  return (
    <div>
      <ShowTypes services={Categries} />
    </div>
  );
};

export default Services;
