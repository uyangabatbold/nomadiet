// Mobile nav toggle
(function () {
  var toggle = document.getElementById("navToggle");
  var mobile = document.getElementById("navMobile");
  if (!toggle || !mobile) return;
  toggle.addEventListener("click", function () {
    mobile.classList.toggle("is-open");
  });
})();

// Scheduling page: consult-type selection swaps the Cal.com embed
(function () {
  var options = document.querySelectorAll(".consult-option[data-cal-url]");
  var embed = document.getElementById("calEmbed");
  if (!options.length || !embed) return;

  options.forEach(function (option) {
    option.addEventListener("click", function () {
      if (option.classList.contains("is-selected")) return;
      options.forEach(function (o) { o.classList.remove("is-selected"); });
      option.classList.add("is-selected");
      embed.src = option.getAttribute("data-cal-url");
      embed.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
