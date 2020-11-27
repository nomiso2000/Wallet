import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CoverPressure from '../../components/CoverPressure/CoverPressure'

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <section className="main-section">
        <h1>HomePage</h1>
        
        <CoverPressure/>
      </section>
    </>
  );
};

export default HomePage;
