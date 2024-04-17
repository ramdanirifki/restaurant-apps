const CustomersReview = (customerReviews) => {
  const menuDom = customerReviews.map((customerReview) => `
    <div class="customer__review__card__container" tabindex="0">
      <div class="customer__review__item">
        <div class="review__name" tabindex="0">
          ${customerReview.name}
        </div>
        <div class="review__date" tabindex="0">
          ${customerReview.date}
        </div>
        <div class="review__description" tabindex="0">
          ${customerReview.review}
        </div>
      </div>
    </div>
  `);
  return menuDom.join('');
};

export default CustomersReview;
