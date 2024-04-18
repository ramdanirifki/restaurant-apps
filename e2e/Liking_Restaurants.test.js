const assert = require('assert');

Feature('Liking and Cancel Liking a Restaurants');

Scenario('liking one restaurant and cancel liking this restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant__title a');
  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // cancel liking a restaurant
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.dontSeeElement('.restaurant-item');

  pause();
});

Scenario('e2e customer review feature', async ({ I }) => {
  I.amOnPage('/');

  const firstRestaurant = locate('.restaurant__title a').first();
  I.click(firstRestaurant);

  I.seeElement('.customer__review__card__container');
  I.seeElement('.customer__add__review');

  const name = 'Rifaldi';
  I.fillField('input[name="name"]', name);

  const review = 'makanannya enak!';
  I.fillField('textarea[name="message"]', review);

  I.click('#submitBtn');

  const initialNumberOfReviews = await I.grabNumberOfVisibleElements('.customer__review__card__container');
  const finalNumberOfReviews = await I.grabNumberOfVisibleElements('.customer__review__card__container');

  assert.strictEqual(finalNumberOfReviews, initialNumberOfReviews + 1);

  pause();
});
