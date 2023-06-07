import React, { useState } from "react";

import installNode from "../assets/portfolio/installNode.jpg";

import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import product from "../assets/portfolio/product.jpeg"
import music from "../assets/portfolio/musicplayer (1).jpeg"
import  netflix from "../assets/portfolio/netflix.jpeg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: product,
      link: "https://github.com/",
    },
    {
      id: 2,
      src:  music,
      link: "https://github.com/",
    },
    {
      id: 3,
      src: netflix,
      link: "https://github.com/",
    },
    {
      id: 4,
      src: reactSmooth,
      link: "https://github.com/",
    },
    {
      id: 5,
      src: installNode,
      link: "https://github.com/",
    },
    {
      id: 6,
      src: reactWeather,
      link: "https://github.com/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    // Check if currentIndex is at the end of the array
    if (currentIndex === portfolios.length - 1) {
      setCurrentIndex(0); // Reset to the beginning
    } else {
      setCurrentIndex(currentIndex + 1); // Move to the next index
    }
  };

  const currentPortfolio = portfolios[currentIndex];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
  
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={handleClick}
                >
                  <a
                    href={currentPortfolio.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </button>
  
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Portfolio;
