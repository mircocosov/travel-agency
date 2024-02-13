const modalEl = document.querySelector(".modal__container");
const buttonEl = document.querySelector(".menu");

const openModal = () => {
  modalEl.classList.add("active");
  buttonEl.classList.add("active");
};

const closeModal = () => {
  modalEl.classList.remove("active");
  buttonEl.classList.remove("active");
};
