import { useContext } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

// component
const InfoPage = () => {
  const { sitesId } = useParams();
  console.log("id", sitesId);
  localStorage.setItem("contId", sitesId);
  const showId = localStorage.getItem("contId");
  const { data } = useContext(DataContext);
  const { continents } = data;
  console.log("data", continents);

  return <div>InfoPage</div>;
};

export default InfoPage;
