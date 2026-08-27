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

// Scheduling page: "Асуулга бөглөх" opens a dialog listing the 4 questionnaires
(function () {
  var trigger = document.getElementById("formMenuTrigger");
  var dialog = document.getElementById("formDialog");
  if (!trigger || !dialog) return;

  var closers = dialog.querySelectorAll("[data-dialog-close]");
  var lastFocused = null;

  function openDialog() {
    lastFocused = document.activeElement;
    dialog.hidden = false;
    document.body.style.overflow = "hidden";
    var firstItem = dialog.querySelector(".form-dialog__item");
    if (firstItem) firstItem.focus();
  }

  function closeDialog() {
    dialog.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  trigger.addEventListener("click", openDialog);
  closers.forEach(function (el) {
    el.addEventListener("click", closeDialog);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !dialog.hidden) closeDialog();
  });
})();
