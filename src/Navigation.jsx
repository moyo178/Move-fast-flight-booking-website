

// eslint-disable-next-line react/prop-types
const Navigation = ({ menuOpen }) => {
  return (
    <nav className={`mobile-menu ${menuOpen ? 'visible' : 'hide'}`}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
