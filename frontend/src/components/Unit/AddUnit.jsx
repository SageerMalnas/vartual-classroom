import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addUnit } from '../../api/api';  // Now this will work

const AddUnit = () => {
  const { classId } = useParams();
  const [unitTitle, setUnitTitle] = useState('');
  const [error, setError] = useState('');

  const handleAddUnit = async (e) => {
    e.preventDefault();
    try {
      await addUnit(classId, { title: unitTitle });
      setUnitTitle('');
      // Redirect or update UI as needed
    } catch (error) {
      setError('Failed to add unit.');
    }
  };

  return (
    <div>
      <h1>Add New Unit</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleAddUnit}>
        <div>
          <label>Unit Title:</label>
          <input
            type="text"
            value={unitTitle}
            onChange={(e) => setUnitTitle(e.target.value)}
          />
        </div>
        <button type="submit">Add Unit</button>
      </form>
    </div>
  );
};

export default AddUnit;
