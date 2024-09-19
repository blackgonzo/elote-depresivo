const API_URL = 'http://localhost:3001/products';

export const RegisterProduct = async (
  name_product,
  description_product,
  price_product,
  size_product,
  image 
) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name_product,
        description_product,
        price_product,
        size_product,
        image 
      })
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error registering product:', error);
    throw error; 
  }
};
