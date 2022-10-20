import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    //navbar is the top of the page with the links to the different pages/ Link is imported from react-router-dom to make the links in react
    <div className='navBar'>
      <button className='navLinks'>
        <Link to='/'>Home</Link>
      </button>
      <button className='navLinks'>
        <Link to='/about'>About</Link>
      </button>
      <button className='navLinks'>
        <Link to='/contact'>Contact</Link>
      </button>
      <button>
        <Link to='/signups'>Signup</Link>
      </button>
    </div>
  );
};

export default NavBar;
