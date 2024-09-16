
const API_URL = 'http://localhost:3001/users';
export const getUsers = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const users = await response.json();
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };
  