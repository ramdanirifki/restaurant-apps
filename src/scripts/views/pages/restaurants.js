import RestaurantDbSource from '../../data/restaurants-source';
import errorHandlingGetData from '../templates/error-template';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import LoaderCss from '../../utils/loader';

const RestaurantList = {
  async render() {
    return `
      <div id="content" class="content">
        <h2 class="content__heading" tabindex="0">List Restaurant</h2>
        <div id="restaurant" class="restaurant"></div>
      </div>
    `;
  },

  async afterRender() {
    try {
      LoaderCss.__showLoader();

      const restaurantContainer = document.querySelector('#restaurant');
      const restaurants = await RestaurantDbSource.restaurantslist();

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

export default RestaurantList;
