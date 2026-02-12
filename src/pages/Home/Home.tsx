import React from 'react';
import Hero from '../../components/Hero/Hero';
import Statistics from '../../components/Statistics/Statistics';
import Services from '../../components/Services/Services';
import HonorsStrip from '../../components/Home/HonorsStrip';
import ProductsGrid from '../../components/Home/ProductsGrid';
import PartnersPreview from '../../components/Home/PartnersPreview';
import NewsTeaser from '../../components/Home/NewsTeaser';
import ContactCTA from '../../components/Home/ContactCTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <Services />
      <HonorsStrip />
      <ProductsGrid />
      <NewsTeaser />
      <PartnersPreview />
      <ContactCTA />
    </>
  );
};

export default Home;
