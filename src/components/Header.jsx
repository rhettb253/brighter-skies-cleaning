import sunLogo from '../assets/sunLogo.png';

function Header() {
  return (
    <header>
      <img src={sunLogo} alt="sun icon"/>
      <div>
        <h1>Brighter Skies Cleaning & Handy</h1>
        <h2>Serving Walla Walla, WA with Residential and Commercial Cleaning</h2>
      </div>
    </header>
  )
}

export default Header