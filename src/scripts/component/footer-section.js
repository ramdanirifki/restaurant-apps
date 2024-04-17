class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
      <footer>
        <p>Copyright © 2024 - DeliziosoResto</p>
      </footer>
    `;
  }
}

customElements.define('footer-section', Footer);

export default Footer;
