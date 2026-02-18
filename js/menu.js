const mealid = document.getElementById("mealsid");
const sweetid = document.getElementById("sweetsid");
const juiceid = document.getElementById("Juicesid");

const meals = document.querySelector(".meals");
const sweets = document.querySelector(".sweets");
const juices = document.querySelector(".Juices");

const spans = document.querySelectorAll(".filter span");

function reset() {
  meals.style.display = "none";
  sweets.style.display = "none";
  juices.style.display = "none";
  spans.forEach(span => span.classList.remove("active"));
}

mealid.addEventListener("click", () => {
  reset();
  meals.style.display = "flex";
  mealid.classList.add("active");
});

sweetid.addEventListener("click", () => {
  reset();
  sweets.style.display = "flex";
  sweetid.classList.add("active");
});

juiceid.addEventListener("click", () => {
  reset();
  juices.style.display = "flex";
  juiceid.classList.add("active");
});

