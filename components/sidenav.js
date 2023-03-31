class Sidenav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!-- Sidebar Menu -->
      <div id="sidenav" class="min-h-screen w-80 relative" style="background-color: #F2BB7F;">
        <!-- Logo and Expander -->
        <div class="flex items-center justify-between p-4">
          <img src="./assets/logo.svg" alt="logo" class="h-9 w-9" />
          <i class="fa-solid fa-arrow-left fa-xl"></i>
        </div>
        <div class="my-5 flex flex-col gap-10">
          <div>
            <!-- Home (Dashboard) -->
            <div class="bg-cream text-right px-4 py-2">
              <a href="./index.html" class="font-medium text-xl">Dashboard</a>
            </div>
            <!-- Messages -->
            <div class="bg-cream text-right px-4 py-2 mt-1">
              <a class="cursor-not-allowed font-medium text-xl">Messages</a>
            </div>
          </div>
          
          <!-- User Lists -->
          <div>
            <div class="flex items-center justify-between p-4">
              <h2 class="font-semibold text-xl">My Lists</h2>
              <button onclick="showPopUpList()">
                <i class="fa-solid fa-plus fa-lg"></i>
              </button>
            </div>
            <!-- User List 1 -->
            <div class="bg-cream text-right px-4 py-2">
              <h3 class="font-medium text-xl">Personal</h3>
            </div>
            <!-- User List 2 -->
            <div class="bg-cream text-right px-4 py-2 mt-1">
              <a href="./lists.html" class="font-medium text-xl">Weekend BBQ</a>
            </div>
          </div>

          <!-- User Groups -->
          <div>
            <div class="flex items-center justify-between p-4">
              <h2 class="font-semibold text-xl">My Groups</h2>
              <button onclick="showPopUpGroup()">
                <i class="fa-solid fa-plus fa-lg"></i>
              </button>
            </div>
            <!-- User Group 1 -->
            <div class="bg-cream text-right px-4 py-2">
              <h3 class="font-medium text-xl">Family</h3>
            </div>
            <!-- User Group 2 -->
            <div class="bg-cream text-right px-4 py-2 mt-1">
              <h3 class="font-medium text-xl">Friends</h3>
            </div>
            <!-- User Group 3 -->
            <div class="bg-cream text-right px-4 py-2 mt-1">
              <h3 class="font-medium text-xl">Office</h3>
            </div>
          </div>
        </div>

        <!-- Misc Actions -->
        <div class="flex flex-col items-center absolute bottom-5 inset-x-0">
          <div class="flex items-center gap-4">
            <i class="fa-solid fa-question fa-lg"></i>
            <p class="font-medium text-lg">FAQ</p>
          </div>
          <div class="flex items-center gap-4">
            <i class="fa-solid fa-headset fa-lg"></i>
            <p class="font-medium text-lg">Contact Us</p>
          </div>
          <div class="flex items-center gap-4">
            <i class="fa-solid fa-gear fa-lg"></i>
            <p class="font-medium text-lg">Settings</p>
          </div>
          <div class="flex items-center gap-4">
            <i class="fa-solid fa-droplet fa-lg"></i>
            <input type="color" id="colorpicker" value="#F2BB7F"> <!-- default color -->
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("sidenav-component", Sidenav);

let sidenav = document.getElementById("sidenav");
let colorPicker = document.getElementById("colorpicker");

colorPicker.addEventListener("input", () => {
  sidenav.style.backgroundColor =
    colorPicker.value; /* TODO: store value so that ot doesn't go back when changing pages */
});
