class MyNav extends HTMLElement {
  connectedCallback() {
    const page = location.pathname.split('/').pop();

    this.innerHTML = `
      <nav>
        <a href="index.html" class="${page === 'index.html' ? 'active' : ''}">Главная</a>
        <a href="about.html" class="${page === 'about.html' ? 'active' : ''}">Обо мне</a>
        <a href="gallery.html" class="${page === 'gallery.html' ? 'active' : ''}">Галерея</a>
        <a href="game.html" class="${page === 'game.html' ? 'active' : ''}">Игра</a>
        <a href="outfit.html" class="${page === 'outfit.html' ? 'active' : ''}">Аутфиты</a>
      </nav>

      <style>
        nav {
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        nav a {
          color: white;
          text-decoration: none;
          font-size: 28px;
        }
      </style>
    `;
  }
}

customElements.define('my-nav', MyNav);
