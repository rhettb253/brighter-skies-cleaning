// import React from 'react';
import MoveClean1 from '../assets/moveclean_one.jpg';
import REClean1 from '../assets/reclean_one.jpg';
import CommClean1 from '../assets/commercialclean_one.jpg';
import ResidentialClean1 from '../assets/residentialclean_one.jpg';

const Services = () => {
  return (
    <section>
      <h3>Our Services</h3>
      <p>
        We offer comprehensive residential and commercial cleaning services in Walla Walla. Our team
        provides deep cleaning, regular maintenance, and customized services to meet your specific
        needs.
      </p>
      <div className='services'>
        <div>
          <h4>Residential Cleaning</h4>
          <img src={ResidentialClean1} alt="Residential Cleaning" />
        </div>
        <div>
          <h4>Commercial Cleaning</h4>
          <img src={CommClean1} alt="Commercial Cleaning" />
        </div>
        <div>
          <h4>Move-In/Move-Out Cleaning</h4>
          <img src={MoveClean1} alt="Move in/out Cleaning" />
        </div>
        <div>
          <h4>Real Estate Cleaning</h4>
          <img src={REClean1} alt="Real Estate Cleaning" />
        </div>
      </div>
    </section>
  );
};

export default Services;
