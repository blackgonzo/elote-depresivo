
const API_URL = 'http://localhost:3001/users';
export const getProduct = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('fallo nose que fallo pero fallo');
      }
      const users = await response.json();
      return users;
    } catch (error) {
      console.error('Error fallo el get del producto:', error);
      throw error;
    }
  };
  