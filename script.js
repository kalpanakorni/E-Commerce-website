// Form validation
const form = document.getElementById("subscribeForm");
const emailInput = document.getElementById("emailInput");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (isValid) {
    formMsg.textContent = "Thanks for subscribing!";
    formMsg.classList.remove("hidden", "text-red-600");
    formMsg.classList.add("text-green-600");
    form.reset();
  } else {
    formMsg.textContent = "Please enter a valid email.";
    formMsg.classList.remove("hidden", "text-green-600");
    formMsg.classList.add("text-red-600");
  }
});

// Dark mode toggle
const toggleBtn = document.getElementById("darkToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("bg-white");
  document.body.classList.toggle("bg-gray-900");
  document.body.classList.toggle("text-white");
  document.body.classList.toggle("text-gray-800");

  toggleBtn.classList.toggle("bg-blue-600");
  toggleBtn.classList.toggle("bg-yellow-400");
  toggleBtn.classList.toggle("text-white");
  toggleBtn.classList.toggle("text-black");
});
