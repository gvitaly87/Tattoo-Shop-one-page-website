function toggleHam() {
  const navMenu = document.querySelector(".navigation");
  navMenu.classList.toggle("hidden");
}

function openForm() {
  const formElem = document.querySelector(".form-container");
  formElem.classList.remove("hidden");
}

function closeForm() {
  const formElem = document.querySelector(".form-container");
  formElem.classList.add("hidden");
}