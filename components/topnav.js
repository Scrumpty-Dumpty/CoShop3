class Topnav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <!-- Top Menu -->
      <div class="absolute top-0 right-0 z-10 flex items-center gap-8 p-4">
        <button><i class="fa-solid fa-plus fa-xl"></i></button>
        <a href="./messages.html">
          <i class="fa-solid fa-message fa-xl"></i>
        </a>
        <img src="./assets/img/man-1.png" alt="" class="h-10" />
      </div>
    `;
  }
}

customElements.define("topnav-component", Topnav);
