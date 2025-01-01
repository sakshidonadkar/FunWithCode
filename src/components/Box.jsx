// Box.js
import React from "react";

const Box = ({ title, imageSrc, liveLink, githubLink }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <div className="flex justify-center gap-4 mt-3">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500"
        >
          Live
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Box;
