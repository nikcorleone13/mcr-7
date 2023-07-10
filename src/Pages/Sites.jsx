import { useContext } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const Sites = () => {
  const { countryName } = useParams();
  console.log("id", countryName);
  localStorage.setItem("contName", countryName);
  const showName = localStorage.getItem("contName");
  const { data } = useContext(DataContext);
  const { continents } = data;
  console.log("data", continents);

  const filterSites = continents
    .flatMap((item) =>
      item.countries.find(
        ({ name }) => name.toLowerCase() === showName.toLowerCase()
      )
    )
    .filter((item) => item !== undefined)[0].destinations;

  return (
    <div>
      <div className="w-screen h-full bg-gray-800 flex flex-col justify-top items-center p-16">
        <h1 className="text-6xl text-white">Welcome to trip advisor</h1>
        <h2 className="text-4xl text-purple-400 my-4">
          Top Continents for your journey
        </h2>
        <div className="flex flex-row flex-wrap justify-center text-white items-center">
          {filterSites.map(({ id, name, image }) => {
            return (
              <div
                key={id}
                className="w-[25%] h-[300px] mx-4 my-12  relative rounded-2xl hover:scale-105 duration-300 hover:cursor-pointer"
              >
                <div className="border-2 rounded-xl">
                  <Link to={`/sites/${name}`}>
                    <img src={image} className="w-100% h-[300px] rounded-xl" />
                  </Link>
                </div>
                <div className="absolute left-10 top-[80%] flex items-center text-2xl font-bold  ">
                  <MdLocationOn size={25} />
                  <p>{name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sites;
