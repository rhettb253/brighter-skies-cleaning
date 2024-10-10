import PropTypes from 'prop-types';
import cleaning from '../assets/cleaning.jpg';
import handy from '../assets/handy.jpg';

function CleaningOrHandy({ updateComponentToRender }) {
  return (
    <>
        <div className='option' onClick={() => updateComponentToRender('cleaning')}>
          <h5>Cleaning Services</h5>
          <img src={cleaning} alt="Cleaning" />
        </div>
        <div className='option' onClick={() => updateComponentToRender('handy')}>
          <h5>Handy Work</h5>
          <img src={handy} alt="Handy" />
        </div>
    </>
  )
}

// Declare react prop to avoid linter error
CleaningOrHandy.propTypes = {
    updateComponentToRender: PropTypes.func.isRequired,  // Ensures it's a function and is required
};

export default CleaningOrHandy