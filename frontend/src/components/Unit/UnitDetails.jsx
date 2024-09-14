import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchClassDetail } from '../../api/api'; // Assuming API is the same

const UnitDetail = () => {
  const { unitId } = useParams();
  const [unit, setUnit] = useState(null);

  useEffect(() => {
    const loadUnitDetail = async () => {
      const classData = await fetchClassDetail(); // Fetch full class
      const foundUnit = classData.units.find((u) => u._id === unitId);
      setUnit(foundUnit);
    };

    loadUnitDetail();
  }, [unitId]);

  if (!unit) return <p>Loading unit details...</p>;

  return (
    <div>
      <h1>{unit.title}</h1>
      <h2>Sessions</h2>
      <ul>
        {unit.sessions.map((session) => (
          <li key={session._id}>
            <Link to={`/sessions/${session._id}`}>{session.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnitDetail;
