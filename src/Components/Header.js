import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <header>
      <div className="title">
        <h1>Fight <span className="covid-red">Covid.</span></h1>
      </div>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/prevention'>Prevention</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact Us</NavLink>
        </li>
      </ul>
      <button>Log In</button>
    </header>
   );
}

export default Header;