import React from 'react'
import './App.css'
import Header from './components/Header';
import Caraousell from './components/Caraousell';
import 'bootstrap/dist/css/bootstrap.min.css';
import Collections from './components/Collections';
import Footer from './components/Footer';




function Rent() {
 
  return (
    <>
    <Header/>
    <Caraousell/>
    <Collections/>
    <Footer/>
  </>
  
  )
}

export default Rent

   