import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Services from '../../components/Services/Services';
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        const fetchData = async () => {
               const request = await fetch('./data.json');
               const data = await request.json();
               setServices(data)
               return data;
        }
        fetchData();
    }, [])
  return (
    <div>
        <Banner />
        <Services fetchURL={services} />
    </div>
  )
}

export default Home