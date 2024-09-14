import { useEffect, useState } from 'react';
import { fetchSessionDetail } from '../../api/api';

const SessionDetail = ({ sessionId }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const loadSession = async () => {
      const data = await fetchSessionDetail(sessionId);
      setSession(data);
    };

    loadSession();
  }, [sessionId]);

  if (!session) return <p>Loading session...</p>;

  return (
    <div>
      <h1>{session.title}</h1>
      <h2>Lectures</h2>
      <ul>
        {session.lectures.map((lecture, index) => (
          <li key={index}>{lecture}</li>
        ))}
      </ul>
    </div>
  );
};

export default SessionDetail;
