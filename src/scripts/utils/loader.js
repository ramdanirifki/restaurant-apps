const LoaderCss = {
  async __showLoader() {
    const loader = document.querySelector('#loader__container');
    loader.classList.add('show');
  },

  async __removeLoader() {
    const loader = document.querySelector('#loader__container');
    loader.classList.remove('show');
  },
};

export default LoaderCss;
