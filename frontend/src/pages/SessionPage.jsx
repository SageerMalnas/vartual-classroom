import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSessionDetail } from '../api/api';
import Comment from '../components/Session/Comment';

const SessionPage = () => {
  const { id } = useParams();
  const [session, setSession] = useState(null);

  useEffect(() => {
    const loadSessionDetail = async () => {
      const data = await fetchSessionDetail(id);
      setSession(data);
    };

    loadSessionDetail();
  }, [id]);

  if (!session) return <p>Loading session details...</p>;

  return (
    <div>
      <h1>{session.title}</h1>
      <h2>Lectures</h2>
      <ul>
        {session.lectures.map((lecture, index) => (
          <li key={index}>{lecture}</li>
        ))}
      </ul>
      <Comment sessionId={id} />
    </div>
  );
};

export default SessionPage;
