import axios from 'axios'

const API_URL = 'http://localhost:5000/api';

//Auth API
export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};

// for login 
export const login = async (userdata) => {
    const response = await axios.post(`${API_URL}/auth/login`, userdata);
    return response.data;
}

//class API
export const getClasses = async (token) => {
    const response = await axios.get(`${API_URL}/classes`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const createClass = async (classData, token) => {
    const response = await axios.post(`${API_URL}/classes`, classData, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

// Comment API
export const createComment = async (commentData, token) => {
    const response = await axios.post(`${API_URL}/comments`, commentData, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};