class Sidenav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!-- Sidebar Menu -->
      <div id="sidenav" class="min-h-screen w-60 transition-all duration-200">
        <div class="flex items-center justify-center p-4">
          <span class="flex-1 text-xl font-semibold">CoShop</span>
          <button><i id="btn" class="fa-solid fa-bars-staggered fa-lg"></i></button>
        </div>
        <nav class="p-4 flex flex-col gap-5">
          <a href="./index.html" class="flex items-center hover:bg-cream rounded-md">
            <i class="fa-solid fa-house fa-lg p-5"></i>
            <span class="ml-2 font-medium">Dashboard</span>
          </a>
          <a href="" class="cursor-not-allowed flex items-center hover:bg-cream rounded-md">
            <i class="fa-solid fa-message fa-lg p-5"></i>
            <span class="ml-2 font-medium">Messages</span>
          </a>
          <a href="./lists.html" class="flex items-center hover:bg-cream rounded-md">
            <i class="fa-solid fa-list fa-lg p-5"></i>
            <span class="ml-2 font-medium">Lists</span>
          </a>
          <a href="./groups.html" class="flex items-center hover:bg-cream rounded-md">
            <i class="fa-solid fa-user-group fa-lg p-5"></i>
            <span class="ml-2 font-medium">Groups</span>
          </a>
          <a href="./settings.html" class="flex items-center hover:bg-cream rounded-md">
            <i class="fa-solid fa-gear fa-lg p-5"></i>
            <span class="ml- font-medium">Settings</span>
          </a>
        </nav>
      </div>
    `;
  }
}

customElements.define("sidenav-component", Sidenav);

let sidenav = document.getElementById("sidenav");
let colorPicker = document.getElementById("colorpicker");
const btn = document.getElementById("btn");
const span = document.querySelectorAll("span");

const shrink = () => {
  sidenav.classList.toggle("w-[97px]");
  span.forEach((s) => {
    s.classList.toggle("hidden");
  });
};

btn.addEventListener("click", () => {
  shrink();
});

// load localstorage on initial load with defaults as backup
sidenav.style.backgroundColor = localStorage.getItem("navColor") ?? "#F2BB7F";
colorPicker.setAttribute(
  "value",
  localStorage.getItem("navColor") ?? "#F2BB7F"
);

// save and update on change
colorPicker.addEventListener("input", () => {
  localStorage.setItem("navColor", colorPicker.value);
  sidenav.style.backgroundColor = localStorage.getItem("navColor");
});
