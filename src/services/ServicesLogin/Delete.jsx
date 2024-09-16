
const API_URL = 'http://localhost:3001/users';
export const getUsers = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('No se elimino');
      }
      const productos = await response.json();
      return productos;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };
  