import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ServicesDetails = () => {
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch("./data.json");
      const data = await request.json();
      console.log(data);
      return data;
    };
    fetchData();
  }, [slug]);

  return <div>ServicesDetails {slug}</div>;
};

export default ServicesDetails;
