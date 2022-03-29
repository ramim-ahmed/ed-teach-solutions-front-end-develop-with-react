import { createContext, useEffect, useState } from "react";


const ServiceContext = createContext();

export const ServiceContextProvider = ({children}) => {
  
  const [data, setData] = useState([]);

  useEffect( () => {
      const fetchData = async () => {
          const request = await fetch('./data.json');
          const data = await request.json();
          setData(data);
          return data;
      }
      fetchData();
  }, [])
   
  return (
    <ServiceContext.Provider value={[data]}>
        {children}
    </ServiceContext.Provider>
  )
}



export default ServiceContext;