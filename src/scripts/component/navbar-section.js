class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
      <header class="nav-bar">
        <div class="nav-bar__menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <div class="nav-bar__brand" tabindex="0">
          <p>
            <a href="" class="firstname" tabindex="-1">Delizioso</a>
            <a href="" class="lastname" tabindex="-1">Resto</a>
          </p>
        </div>
        <nav id="navigationDrawer" class="nav-bar__navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#/like">Favorite</a></li>
            <li><a href="https://www.instagram.com/ramdrifki3" target="_blank">About</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('navigation-bar', Navbar);

export default Navbar;
