import PropTypes from 'prop-types';
import cleaning from '../assets/cleaning.jpg';
import handy from '../assets/handy.jpg';

function CleaningOrHandy({ updateComponentToRender }) {
  return (
    <>
        <div className='cleaningButton' onClick={() => updateComponentToRender('cleaning')}>
          <h4>Cleaning Services</h4>
          <img src={cleaning} alt="Cleaning" />
        </div>
        <div className='handyButton'>
          <h4>Handy Work</h4>
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