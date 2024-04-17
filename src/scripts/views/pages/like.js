import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import LoaderCss from '../../utils/loader';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import errorHandlingGetData from '../templates/error-template';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading" tabindex="0">Favorite Restaurant</h2>
        <div id="restaurant" class="restaurant">
        
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      LoaderCss.__showLoader();

      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

      const restaurantContainer = document.querySelector('#restaurant');
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });

      LoaderCss.__removeLoader();
    } catch (error) {
      const restaurantContainerError = document.querySelector('#content');

      restaurantContainerError.innerHTML += errorHandlingGetData();
    }
  },
};

export default Like;
