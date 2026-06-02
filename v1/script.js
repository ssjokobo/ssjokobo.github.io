// Placeholder for future JavaScript code
console.log("Jazz Website script loaded.");

// Show or hide the "To the Top" button based on scroll position
window.onscroll = function() {
  var toTop = document.getElementById("toTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
};

// Smooth scroll to top
document.getElementById("toTop").addEventListener("click", function(event) {
  event.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});
