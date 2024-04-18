import CONFIG from '../../globals/config';
import CustomersReview from './customer-review-template';
import DetailMenu from './menu-template';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="content__heading" tabindex="0">Detail Restaurant</h2>
  <section class="restaurant__container">
    <img class="lazyload restaurant__picture" data-src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__text__container" tabindex="0">
      <h2 class="restaurant__name">${restaurant.name}</h2>
      <h4>${restaurant.city}</h4>
      <p>${restaurant.address}</p>
      <p class="restaurant__description">${restaurant.description}</p>
    </div>
  </section>
  <section class="restaurant__info">
    <div class="restaurant__info__all__menu">
      <div class="detail__menu">
        <h3 class="detail__label__menu" tabindex="0">Foods Menu</h3>
        <ul>
        ${DetailMenu(restaurant.menus.foods)}
        </ul>
      </div>
      <div class="detail__menu">
        <h3 class="detail__label__menu" tabindex="0">Drinks Menu</h3>
        <ul>
          ${DetailMenu(restaurant.menus.drinks)}
        </ul>
      </div>
    </div>
  </section>
  <section class="customer__review">
    <h2 class="content__heading" tabindex="0">Customer Review</h2>
    <div class="customer__review__container">
      ${CustomersReview(restaurant.customerReviews)}
    </div>
  </div>
  <section class="customer__add__review">
    <h4 class="content__heading" tabindex="0">Add Review</h4>
    <form class="form__container" id="formReview">
      <label for="name" class="label__name">Nama :</label><br>
      <input type="text" id="name" name="name" class="input__name" required><br>
      <label for="message" class="label__message">Review :</label><br>
      <textarea id="message" name="message" rows="4" required></textarea><br>
      <div class="container__button">
        <button type="button" id="submitBtn">Submit</button>
      </div>
    </form>
  </section>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <h4>${restaurant.city || '-'}</h4>
      <picture>
        <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name || '-'}" type="image/jpeg">
        <img class="lazyload restaurant-item__header__poster" data-src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.name || '-'}">
      </picture>
    </div>
    <div class="restaurant-item__content">
      <div class="restaurant-item__name__and__rating">
        <h3 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating || '-'}</span></p>
      </div>
      <p>${restaurant.description || '-'}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
