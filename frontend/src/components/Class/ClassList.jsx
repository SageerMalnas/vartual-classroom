import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchClasses } from '../../api/api'; // Assuming a fetchClasses API method
import AuthContext from '../../Context/AuthContext';
import { useContext } from 'react';

const ClassList = () => {
  const { user } = useContext(AuthContext); // Get the logged-in user's info (role)
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const loadClasses = async () => {
      const data = await fetchClasses();
      setClasses(data);
    };

    loadClasses();
  }, []);

  return (
    <div>
      <h1>Classes</h1>

      {user && user.role === 'instructor' && (
        <div>
          <Link to="/classes/create" className="btn btn-primary">Create New Class</Link>
        </div>
      )}

      <ul>
        {classes.length === 0 ? (
          <p>No classes available</p>
        ) : (
          classes.map((cls) => (
            <li key={cls._id}>
              <Link to={`/classes/${cls._id}`}>{cls.title}</Link> - {cls.instructor.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ClassList;
