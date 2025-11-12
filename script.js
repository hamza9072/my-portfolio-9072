document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msg").textContent = "നന്ദി! നിങ്ങളുടെ സന്ദേശം ലഭിച്ചു 😊";
  this.reset();
});
