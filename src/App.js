import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ServicesDetails from './components/ServiceDetails/ServicesDetails';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
const App = () => {
  return (
    <main>
       <Header />
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path ='/services' element={<Service />} />
           <Route path='/services/:slug' element={<ServicesDetails />} />
         </Routes>
         <Footer />
    </main>
  )
}

export default App
