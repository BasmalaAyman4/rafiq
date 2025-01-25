import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Router } from 'react-router-dom';
import cookies from 'js-cookie'
import Header from './Layout/Header';
import { useTranslation } from 'react-i18next';
import Signup from './Component/Signup/Signup';
import Home from './Pages/Home';

const Routespage = () => {
    const { t, i18n } = useTranslation();


    return (
   <>
<Header/>
          
                <Routes>
                <Route path="/" element={<Home />} /> 

                    <Route path="/signup" element={<Signup/>} /> 
                </Routes>
       
          </>
       
    );
};

export default Routespage
