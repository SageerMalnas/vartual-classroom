import React, { useState } from 'react';
import { createClass } from '../../api/api'; // Adjust the import path as needed
import { useNavigate } from 'react-router-dom';

const CreateClass = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For redirection after successful creation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(formData);
      localStorage.setItem('token', data.token); // Store token in local storage
      login(data); // Assuming this updates your auth context
      navigate('/classes'); // Redirect after login
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };
  

  return (
    <div>
      <h1>Create a New Class</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Class Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter class title"
          />
        </div>
        <button type="submit">Create Class</button>
      </form>
    </div>
  );
};

export default CreateClass;
