function toggleHam() {
  var navMenu = document.getElementById("navigation");

  if (navMenu.style.display === "block") {
    navMenu.style.display = null;
  } else {
    navMenu.style.display = "block";
  }
}

function openForm() {
  document.getElementById("book-form").style.display ="block";  
}

function closeForm() {
  document.getElementById("book-form").style.display ="none";  
}