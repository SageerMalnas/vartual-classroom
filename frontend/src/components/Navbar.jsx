import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../Context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    // Redirect to login or home page
    window.location.href = '/login'; // Or use a routing library for redirection
  };

  return (
    <nav>
      <ul>
        {user && (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        )}
        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
