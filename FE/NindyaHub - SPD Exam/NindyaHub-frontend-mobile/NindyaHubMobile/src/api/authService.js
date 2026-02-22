import api from './axiosInstance';

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password }); // Jadinya: ...:5000/api/auth/login
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};