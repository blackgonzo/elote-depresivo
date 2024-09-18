
const API_URL = 'http://localhost:3001/Products';
export const PostProduct = async ( name_product, description_product, price_product, size_product) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name_product, description_product, price_product, size_product })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };