const btn = document.querySelector("#trigger");
const wrapper = document.querySelector(".modal_wrapper");
const closeBtn = document.querySelector(".close");

trigger.addEventListener("click", () => {
  wrapper.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

wrapper.addEventListener("click", (e) => {
  if (e.target !== wrapper) return;
  wrapper.classList.remove("active");
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    wrapper.classList.remove("active");
  }
});
