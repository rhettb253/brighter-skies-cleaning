import {useState} from 'react';
import CleaningOrHandy from './CleaningOrHandy';
import Cleaning from './Cleaning';

const Services = () => {
  const [renderedComponent, setRenderedComponent] = useState("cleaningOrHandy");

  // Function to switch components based on user selection
  const updateComponentToRender = (componentName) => {
    setRenderedComponent(componentName);
  };
  

  return (
    <section>
      <h3>Our Services</h3>
      <p>
        We offer residential and commercial cleaning and handyman services to Walla Walla, WA and surrounding areas.
      </p>
      <div className='services'>
        {renderedComponent === "cleaningOrHandy" && <CleaningOrHandy updateComponentToRender={updateComponentToRender} />}
        {renderedComponent === "cleaning" && <Cleaning updateComponentToRender={updateComponentToRender} />}
        
      </div>
    </section>
  );
};

export default Services;
