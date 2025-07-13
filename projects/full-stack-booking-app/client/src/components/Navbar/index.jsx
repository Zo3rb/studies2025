import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <span className="logo">Booker</span>
        <div className="navItems">
          <div className="navButton">Register</div>
          <div className="navButton">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
