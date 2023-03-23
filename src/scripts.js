const item = document.getElementById("item");
const checkbox = document.querySelector("input[type=checkbox]");

checkbox.addEventListener("change", function () {
  item.classList.toggle("line-through");
  item.classList.toggle("text-gray-600");
  this.checked ? console.log("Bought") : console.log("Unbought");
});
