import { Link } from "react-router-dom";
const NavBar = () => {
  return (
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
    </div>
  );
};

export default NavBar;
