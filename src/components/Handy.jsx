import PropTypes from 'prop-types';
import MoveClean1 from '../assets/moveclean_one.jpg';
import REClean1 from '../assets/reclean_one.jpg';
import CommClean1 from '../assets/commercialclean_one.jpg';
import ResidentialClean1 from '../assets/residentialclean_one.jpg';
import backIcon from '../assets/back.png';

function Handy({ updateComponentToRender }) {
  return (
    <>
    
        <p>
            Our team provides deep cleaning, regular maintenance, and customized services to meet your specific needs.
        </p>
        <div className='backButtonAndServiceTitle'>
            <img className='backButton' src={backIcon} alt="back icon" onClick={() => updateComponentToRender('cleaningOrHandy')}/>
            <h4>Handy Work</h4>
        </div>
        <div className='option'>
          <h5>Restoration</h5>
          <img src={ResidentialClean1} alt="Residential Cleaning" />
        </div>
        <div className='option'>
          <h5>Window Replacement</h5>
          <img src={CommClean1} alt="Commercial Cleaning" />
        </div>
        <div className='option'>
          <h5>Vinyl Plank Flooring</h5>
          <img src={MoveClean1} alt="Move in/out Cleaning" />
        </div>
        <div className='option'>
          <h5>Trim Install/Replacement</h5>
          <img src={REClean1} alt="Real Estate Detailing" />
        </div>
        <div className='option'>
          <h5>Fence Building</h5>
          <img src={CommClean1} alt="Pressure Washing" />
        </div>
        <div className='option'>
          <h5>Deck Building</h5>
          <img src={CommClean1} alt="Pressure Washing" />
        </div>
        <div className='option'>
          <h5>Hardscapes</h5>
          <img src={CommClean1} alt="Pressure Washing" />
        </div>
    </>
  )
}

// Declare react prop to avoid linter error
Handy.propTypes = {
    updateComponentToRender: PropTypes.func.isRequired,  // Ensures it's a function and is required
};

export default Handy