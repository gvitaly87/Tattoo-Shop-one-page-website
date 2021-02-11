function toggleHam() {
  const navMenu = document.querySelector(".navigation");
  navMenu.classList.toggle("hidden");
}

function openForm() {
  document.getElementById("book-form").style.display ="block";  
}

function closeForm() {
  document.getElementById("book-form").style.display ="none";  
}