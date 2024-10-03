import {useState} from 'react';
import CleaningOrHandy from './CleaningOrHandy';
import Cleaning from './Cleaning';

const Services = () => {
  const [renderedComponent, setRenderedComponent] = useState("CleaningOrHandy");

  return (
    <section>
      <h3>Our Services</h3>
      <p>
        We offer comprehensive residential and commercial cleaning services in Walla Walla. Our team
        provides deep cleaning, regular maintenance, and customized services to meet your specific
        needs.
      </p>
      <div className='services'>
        <CleaningOrHandy />
        
      </div>
    </section>
  );
};

export default Services;
