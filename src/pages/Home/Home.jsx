import React, { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import ServiceContext from "../../Context/ServicesContext";
const Home = () => {
  const [data] = useContext(ServiceContext);
  return (
    <div>
      <Banner />
      <Services fetchURL={data} />
    </div>
  );
};

export default Home;
