import React, { useEffect, useState } from 'react';
import Services from '../../components/Services/Services';

const Service = () => {
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
        <Services fetchURL={services} />
    </div>
  )
}

export default Service