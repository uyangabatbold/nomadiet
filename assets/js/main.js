// Mobile nav toggle
(function () {
  var toggle = document.getElementById("navToggle");
  var mobile = document.getElementById("navMobile");
  if (!toggle || !mobile) return;
  toggle.addEventListener("click", function () {
    mobile.classList.toggle("is-open");
  });
})();

// Scheduling page: consult-type selection + static booking form
(function () {
  var form = document.getElementById("bookingForm");
  if (!form) return;

  var options = document.querySelectorAll(".consult-option");
  var summary = document.getElementById("selectedSummary");

  options.forEach(function (option) {
    var input = option.querySelector("input[type=radio]");
    option.addEventListener("click", function () {
      options.forEach(function (o) { o.classList.remove("is-selected"); });
      option.classList.add("is-selected");
      input.checked = true;
      summary.textContent = "Сонгосон үйлчилгээ: " + input.value;
      summary.classList.add("is-visible");
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var name = document.getElementById("fullName").value.trim();
    var confirmation = document.getElementById("confirmation");
    var confirmationText = document.getElementById("confirmationText");
    var bookingCard = form.querySelector(".booking-form");
    var optionsWrap = form.querySelector(".consult-options");

    confirmationText.textContent = name
      ? "Баярлалаа, " + name + ". Бид тантай удахгүй холбогдож, цагийг баталгаажуулна."
      : "Баярлалаа. Бид тантай удахгүй холбогдож, цагийг баталгаажуулна.";

    optionsWrap.style.display = "none";
    bookingCard.style.display = "none";
    confirmation.classList.add("is-visible");
    confirmation.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
