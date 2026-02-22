import api from './axiosInstance';

// Mengambil semua data (Video & Read)
export const getAllContents = async () => {
  try {
    const response = await api.get('/contents'); // Jadinya: ...:5000/api/contents
    return response.data;
  } catch (error) {
    console.error("Gagal ambil konten:", error.response?.data || error.message);
    throw error;
  }
};

// Menghapus konten berdasarkan ID
export const deleteContent = async (id) => {
  try {
    const response = await api.delete(`/contents/${id}`);
    return response.data;
  } catch (error) {
    console.error("Gagal hapus konten:", error);
    throw error;
  }
};

// Membuat konten baru
export const createContent = async (formData) => {
  try {
    const response = await api.post('/contents', formData);
    return response.data;
  } catch (error) {
    console.error("Gagal buat konten:", error);
    throw error;
  }
};