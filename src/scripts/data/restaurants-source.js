import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async restaurantslist() {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANTS);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await axios.get(API_ENDPOINT.DETAIL(id));
      return response.data.restaurant;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  static async postReviewCustomer(data) {
    try {
      const response = await axios.post(API_ENDPOINT.ADD_REVIEW, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to post review:', error);
    }
  }
}

export default RestaurantDbSource;
