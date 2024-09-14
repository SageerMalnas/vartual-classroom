import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchClassDetail } from '../../api/api';
import { useAuthContext } from '../../Context/AuthContext';

const ClassDetail = () => {
  const { id } = useParams();
  const [classDetail, setClassDetail] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const loadClassDetail = async () => {
      const data = await fetchClassDetail(id);
      setClassDetail(data);
    };

    loadClassDetail();
  }, [id]);

  if (!classDetail) return <p>Loading class details...</p>;

  return (
    <div>
      <h1>{classDetail.title}</h1>
      <p>{classDetail.description}</p>
      <p>Instructor: {classDetail.instructor.name}</p>

      <h2>Units</h2>
      <ul>
        {classDetail.units.length === 0 ? (
          <p>No units available</p>
        ) : (
          classDetail.units.map((unit) => (
            <li key={unit._id}>
              <h3>{unit.title}</h3>
              <ul>
                {unit.sessions.length === 0 ? (
                  <p>No sessions available</p>
                ) : (
                  unit.sessions.map((session) => (
                    <li key={session._id}>
                      <Link to={`/sessions/${session._id}`}>{session.title}</Link>
                    </li>
                  ))
                )}
              </ul>
            </li>
          ))
        )}
      </ul>

      {/* Only instructors can add new units/sessions */}
      {user && user.role === 'instructor' && (
        <div>
          <Link to={`/classes/${id}/add-unit`} className="btn btn-primary">
            Add Unit
          </Link>
        </div>
      )}
    </div>
  );
};

export default ClassDetail;
