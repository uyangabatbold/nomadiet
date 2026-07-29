// Mobile nav toggle
(function () {
  var toggle = document.getElementById("navToggle");
  var mobile = document.getElementById("navMobile");
  if (!toggle || !mobile) return;
  toggle.addEventListener("click", function () {
    mobile.classList.toggle("is-open");
  });
})();
