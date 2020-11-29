import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Name from '../../components/RegisterForm/ResterForm';

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <>

    
        <Name></Name>

     
    </>
  );
};

export default HomePage;
