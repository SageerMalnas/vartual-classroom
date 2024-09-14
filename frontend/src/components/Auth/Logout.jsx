import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';

const Logout = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    // Redirect to login or home page
    window.location.href = '/login'; // Or use a routing library for redirection
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
