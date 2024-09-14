import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome to the Virtual Classroom</h1>
      {user ? (
        <>
          <p>Hello, {user.name}!</p>
          <Link to="/classes/create">View Classes</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Home;
