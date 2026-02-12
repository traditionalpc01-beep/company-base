import React from 'react';
import Hero from '../../components/Hero/Hero';
import Statistics from '../../components/Statistics/Statistics';
import Services from '../../components/Services/Services';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <Services />
    </>
  );
};

export default Home;
