import React from 'react';
import Header from './header';
import Footer from './footer';
import Grid from './grid';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <Grid />
      </div>
      <Footer />
    </>
  );
}

export default About;