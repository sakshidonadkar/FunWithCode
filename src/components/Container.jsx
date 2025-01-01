// Container.js
import React from "react";
import { boxesData } from "./../assets/data/boxesData.js";
import Box from "./Box";

const Container = () => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {boxesData.map((box, index) => (
        <Box
          key={index}
          title={box.title}
          imageSrc={box.imageSrc}
          liveLink={box.liveLink}
          githubLink={box.githubLink}
        />
      ))}
    </div>
  );
};

export default Container;
