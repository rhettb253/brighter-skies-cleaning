// import React from 'react';
import ResClean1 from '../assets/residentialclean_one.jpg';
import CommClean1 from '../assets/commercialclean_one.jpg';

const Gallery = () => {
  return (
    <section>
      <h2>Our Work</h2>
      <div>
        <img src={ResClean1} alt="Residential Cleaning 1" />
        <img src={CommClean1} alt="Commercial Cleaning 1" />
      </div>
    </section>
  );
};

export default Gallery;
