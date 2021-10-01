import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../styles/hero.css';
import arrayOfImgs from '../services/arrayImgs';
import Header from './Header';

function Hero() {
  const renderText = (index) => {
    if (index === 0) {
      return (
        <section className="content">
          <h1 className="mensage">Create Amazing  Websites</h1>
          <h1 className="mensage"> With Amazing Graphics</h1>
        </section>
      );
    }
  };
  return (
    <div className="hero">
      <Carousel className="carousel" plugins={['arrows']}>
        {arrayOfImgs.map((elem, index) => (
          <div className="hero_img" style={{ backgroundImage: `url(${elem})` }} alt="a">
            <Header />
            {renderText(index)}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
