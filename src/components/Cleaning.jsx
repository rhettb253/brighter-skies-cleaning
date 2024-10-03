import PropTypes from 'prop-types';
import MoveClean1 from '../assets/moveclean_one.jpg';
import REClean1 from '../assets/reclean_one.jpg';
import CommClean1 from '../assets/commercialclean_one.jpg';
import ResidentialClean1 from '../assets/residentialclean_one.jpg';
import backIcon from '../assets/back.png';

function Cleaning({ updateComponentToRender }) {
  return (
    <>
        <p>
            Our team provides deep cleaning, regular maintenance, and customized services to meet your specific needs.
        </p>
        <img className='backButton' src={backIcon} alt="back icon" onClick={() => updateComponentToRender('cleaningOrHandy')}/>
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
    </>
  )
}

// Declare react prop to avoid linter error
Cleaning.propTypes = {
    updateComponentToRender: PropTypes.func.isRequired,  // Ensures it's a function and is required
};

export default Cleaning