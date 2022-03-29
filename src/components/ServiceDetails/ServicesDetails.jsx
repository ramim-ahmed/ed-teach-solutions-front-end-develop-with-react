import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServiceContext from "../../Context/ServicesContext";

const ServicesDetails = () => {

  const { slug } = useParams();
  const [data] = useContext(ServiceContext);
  const [details , setDetails] = useState('');

  useEffect( () => {
      const findServiceDetails = () => {
        const find = data.find((service) => service.slug === slug);
        setDetails(find);
        return find
      }

      findServiceDetails();
  }, [slug, data]);
  const {img, title, description, price } = details;
  return (
    <div className="container px-5 my-5">
      <div className="row">
          <div className="col">
              <img src={img}alt="" />
              <div className="mt-3">
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <p>Price: $<strong>{price}</strong></p>
                  <button className="btn___box">BUY NOW</button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
