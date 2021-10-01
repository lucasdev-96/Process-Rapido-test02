import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../styles/hero.css';
import arrayOfImgs from '../services/arrayImgs';
import Header from './Header';

function Hero() {
  return (
    <div className="hero">
      <Carousel className="carousel" plugins={['arrows']}>
        {arrayOfImgs.map((elem) => (
          <div className="hero_img" style={{ backgroundImage: `url(${elem})` }} alt="a">
            <Header />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
