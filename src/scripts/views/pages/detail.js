import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurants-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import errorHandlingGetData from '../templates/error-template';
import LoaderCss from '../../utils/loader';
import postData from '../../utils/api-handler';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    try {
      LoaderCss.__showLoader();

      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
      console.log(restaurant);

      const restaurantContainer = document.querySelector('#restaurant');

      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
      restaurantContainer.classList.add('grid__edit');

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        restaurant,
      });

      LoaderCss.__removeLoader();
    } catch (error) {
      const restaurantContainerError = document.querySelector('#content');

      restaurantContainerError.innerHTML += errorHandlingGetData();
    }

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', (event) => {
      event.preventDefault();
      postData();
    });
  },
};

export default Detail;
