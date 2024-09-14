// import axios from 'axios'

// const API_URL = 'http://localhost:5000/api';

// //Auth API
// export const register = async (userData) => {
//     const response = await axios.post(`${API_URL}/auth/register`, userData);
//     return response.data;
// };

// // for login 
// export const login = async (userData) => {
//     const response = await axios.post(`${API_URL}/auth/login`, userData);
//     return response.data;
// }

// //class API
// export const getClasses = async (token) => {
//     const response = await axios.get(`${API_URL}/classes`, {
//         headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
// };

// export const createClass = async (classData, token) => {
//     const response = await axios.post(`${API_URL}/classes`, classData, {
//         headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
// };


// export const getClassDetails = async (classId, token) => {
//     const response = await axios.get(`${API_URL}/classes/${classId}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   };
  
//   export const enrollClass = async (classId, token) => {
//     const response = await axios.post(
//       `${API_URL}/classes/${classId}/enroll`,
//       {},
//       { headers: { Authorization: `Bearer ${token}` } }
//     );
//     return response.data;
//   };
  
//   // Sessions API
//   export const createSession = async (sessionData, token) => {
//     const response = await axios.post(`${API_URL}/sessions`, sessionData, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   };
  
//   // Comments API
//   export const getComments = async (sessionId, token) => {
//     const response = await axios.get(`${API_URL}/sessions/${sessionId}/comments`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   };

// // Comment API
// export const createComment = async (commentData, token) => {
//     const response = await axios.post(`${API_URL}/comments`, commentData, {
//         headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
// };

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    console.error('API call error:', error);
    throw error; // Rethrow to handle in component
  }
};

export const fetchClasses = async () => {
  const response = await axios.get(`${API_URL}/classes`);
  return response.data;
};

export const createClass = async (classData) => {
  try {
    const response = await axios.post(
      `${API_URL}/classes`,
      classData,
      {
        headers: {
          'Authorization': `Bearer ${getToken()}` // Add the token here
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

export const addUnit = async (classId, unitData) => {
  const response = await axios.post(`${API_URL}/classes/${classId}/units`, unitData);
  return response.data;
};


export const fetchClassDetail = async (classId) => {
  const response = await axios.get(`${API_URL}/classes/${classId}`);
  return response.data;
};

export const fetchSessionDetail = async (sessionId) => {
  const response = await axios.get(`${API_URL}/sessions/${sessionId}`);
  return response.data;
};

export const addComment = async (sessionId, comment) => {
  const response = await axios.post(`${API_URL}/comments`, {
    sessionId,
    content: comment,
  });
  return response.data;
};
