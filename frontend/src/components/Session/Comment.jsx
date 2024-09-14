import { useState, useEffect } from 'react';
import { addComment } from '../../api/api';

const Comment = ({ sessionId }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const newComment = await addComment(sessionId, comment);
    setComments([...comments, newComment]); // Update the list of comments
    setComment(''); // Reset the input
  };

  useEffect(() => {
    // This is where you'd fetch existing comments for the session, not yet implemented in the API
    // For now, we initialize an empty array for comments.
  }, [sessionId]);

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((c) => (
          <li key={c._id}>
            <p>{c.content}</p>
            <small>by {c.user.name}</small>
            {/* This is where you'd render nested comments */}
          </li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add your comment"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Comment;
