class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
      <div class="hero" id="home">
        <h1 class="hero-description">Get your favorite food <br>at various restaurants <br>in Indonesia</h1>
      </div>
    `;
  }
}

customElements.define('hero-section', HeroSection);

export default HeroSection;
