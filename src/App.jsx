import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';


import './App.css'
import Navigation from './Pages/Navigation';
import Header from './Pages/Header';

function App() {
  
  return (
    <>
    <Header/>
   <Navigation/>
    </>
  )
}

export default App
