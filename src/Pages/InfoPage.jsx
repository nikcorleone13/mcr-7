import { useContext } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

// component
const InfoPage = () => {
  const { siteName } = useParams();
  console.log("id", siteName);
  localStorage.setItem("contName", siteName);
  const showName = localStorage.getItem("contName");
  const { data } = useContext(DataContext);
  const { continents } = data;
  console.log("data", continents);

  const desiredDestination = data.continents
    .map((continent) => continent.countries)
    .map((countries) => countries.flatMap((country) => country.destinations))
    .flat()
    .find((destination) => destination.name === showName);

  console.log(desiredDestination);

  return (
    <div>
      <div className="bg-gray-800 w-screen h-screen flex flex-col items-center p-6">
        <h1 className="text-6xl text-white py-12">{desiredDestination.name}</h1>
        <div className="flex justify-center p-2">
          <div className=" flex justify-center w-[70%] ">
            <img src={desiredDestination.image} className="w-[80%]" />
          </div>
          <div className="flex flex-col justify-between text-white text-2xl ">
            <p className="py-4">{desiredDestination.description}</p>
            <p className="py-4">{desiredDestination.ratings}</p>
            <p className="py-4">{desiredDestination.reviews}</p>
            <p className="py-4">{desiredDestination.location}</p>
            <p className="py-4">{desiredDestination.openingHours}</p>
            <p className="py-4">{desiredDestination.ticketPrice}</p>
            <a className="py-4" href={desiredDestination.website}>
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
