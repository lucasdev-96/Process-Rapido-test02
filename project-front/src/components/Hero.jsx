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
          <h1>Create Amazing  Websites</h1>
          <h1> With Amazing Graphics</h1>
          <p>
            Lorem ipsum dolor sit amet. Est nulla tempore 33
            nulla internos aut sint minima et nesciunt consequuntur
            sit quae blanditiis ab dolorem fugit!
          </p>
          <div className="container_btn">
            <button className="btn_content" type="button">Explore More</button>
            <button className="btn_content" type="button">Buy now</button>
          </div>
        </section>
      );
    }
    if (index === 1) {
      return (
        <section className="content">
          <h1>The Code is beautiful</h1>
          <h1> JavaScript 😍</h1>
          <p>
            Lorem ipsum dolor sit amet. Est nulla tempore 33
            nulla internos aut sint minima et nesciunt consequuntur
            sit quae blanditiis ab dolorem fugit!
          </p>
          <div className="container_btn">
            <button className="btn_content" type="button">Java</button>
            <button className="btn_content" type="button">Phyton</button>
          </div>
        </section>
      );
    }
  };
  return (
    <div className="hero">
      <Carousel className="carousel" plugins={['arrows']}>
        {arrayOfImgs.map((elem, index) => (
          <div key={elem} className="hero_img" style={{ backgroundImage: `url(${elem})` }} alt="a">
            <div className="blur">
              <Header />
              {renderText(index)}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
