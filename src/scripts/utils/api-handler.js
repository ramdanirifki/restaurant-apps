import RestaurantDbSource from '../data/restaurants-source';
import UrlParser from '../routes/url-parser';

const postData = async () => {
  try {
    const today = new Date();
    const monthNames = [
      'Januari', 'Februari', 'Maret',
      'April', 'Mei', 'Juni', 'Juli',
      'Agustus', 'September', 'Oktober',
      'November', 'Desember',
    ];

    const monthIndex = today.getMonth();
    const date = `${today.getDate()} ${monthNames[monthIndex]} ${today.getFullYear()}`;

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const name = document.getElementById('name');
    const review = document.getElementById('message');
    const detailsReviewContainer = document.querySelector('.customer__review__container');

    const data = {
      'id': url.id,
      'name': name.value,
      'review': review.value,
    };

    const reviewTemplate = `
        <div class="customer__review__card__container" tabindex="0">
        <div class="customer__review__item">
          <div class="review__name" tabindex="0">
            ${data.name}
          </div>
          <div class="review__date" tabindex="0">
            ${date}
          </div>
          <div class="review__description" tabindex="0">
            ${data.review}
          </div>
        </div>
      `;

    await RestaurantDbSource.postReviewCustomer(data);

    detailsReviewContainer.innerHTML += reviewTemplate;
    name.value = '';
    review.value = '';
  } catch (error) {
    console.error('Error:', error);
  }
};

export default postData;
