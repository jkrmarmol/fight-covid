function Header() {
  return (
    <header>
      <div className="title">
        <h1>Fight <span className="covid-red">Covid.</span></h1>
      </div>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Prevention</a>
        </li>
        <li>
          <a>Contact Us</a>
        </li>
      </ul>
      <button>Log In</button>
    </header>
   );
}

export default Header;