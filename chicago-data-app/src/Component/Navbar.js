import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        padding: '10px',
        background: '#333',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Home
      </Link>
      <Link
        to="/businesses"
        style={{
          textDecoration: 'none',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Business Search
      </Link>
    </nav>
  );
};

export default Navbar;
