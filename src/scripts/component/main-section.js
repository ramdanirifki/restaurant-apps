class MainSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
      <main id="content" class="content">
      </main>
    `;
  }
}

customElements.define('main-section', MainSection);

export default MainSection;
