import axios from 'axios';

export const THEME = {
  primary: '#3b82f6',
  background: '#ffffff',
  foreground: '#323232',
  border: '#e5e7eb',
  input: '#e5e7eb',
  muted: '#6b7280',
  radius: 20, // Aku naikin biar sesuai desain estetik kamu yang rounded
};

const api = axios.create({
  // Tetap arahkan ke folder utama /api
  baseURL: 'http://192.168.0.102:5000/api', 
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;