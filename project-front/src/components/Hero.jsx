import React, { useEffect, useState } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../styles/hero.css';
import arrayOfImgs from '../services/arrayImgs';
import Header from './Header';

function Hero() {
  const [width, setWidth] = useState(window.screen.width);
  useEffect(() => {
    window.addEventListener('resize', (e) => {
      const result = e.target;
      setWidth(result.screen.width);
    });
  }, []);

  const renderTextHero = (index) => {
    if (index === 0 || !index) {
      return (
        <section className="content">
          <h1 id="home">Create Amazing  Websites</h1>
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
          <h1 id="home">The Code is beautiful</h1>
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

  const handleMapImgs = () => (
    arrayOfImgs.map((elem, index) => (
      <div key={elem} className="hero_img" style={{ backgroundImage: `url(${elem})` }} alt="a">
        <div className="blur">
          <Header />
          {renderTextHero(index)}
        </div>
      </div>
    ))
  );

  const handleCarousel = () => {
    if (width <= 768) {
      return (
        <div className="hero_img" style={{ backgroundImage: `url(${arrayOfImgs[0]})` }} alt="a">
          <div className="blur">
            <Header width={width} />
            {renderTextHero()}
          </div>
        </div>
      );
    }
    return (
      <Carousel className="carousel" plugins={['arrows']}>
        {handleMapImgs()}
      </Carousel>
    );
  };

  return (
    <div className="hero">
      {handleCarousel()}
    </div>
  );
}

export default Hero;
