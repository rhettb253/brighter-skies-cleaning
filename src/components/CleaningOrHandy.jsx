import cleaning from '../assets/cleaning.jpg';
import handy from '../assets/handy.jpg';

function CleaningOrHandy() {
  return (
    <>
        <div>
          <h4>Cleaning Services</h4>
          <img src={cleaning} alt="Cleaning" />
        </div>
        <div>
          <h4>Handy Work</h4>
          <img src={handy} alt="Handy" />
        </div>
    </>
  )
}

export default CleaningOrHandy