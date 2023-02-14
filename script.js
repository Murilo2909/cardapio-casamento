const cards_single = document.querySelectorAll(".card_single");
const cards_img = document.querySelectorAll(".card_img img");
const modal = document.querySelector(".custom-modal");
const modalbg = document.querySelector(".custom-modal-bg");
const modalImg = document.querySelector(".custom-modal-img img");
const closeModal = document.querySelector(".custom-modal-close");

cards_img.forEach((card_img) => {
  card_img.addEventListener("click", () => {
    modal.classList.add("open-custom-modal");
    const imgSrc = card_img.getAttribute("src");
    modalImg.setAttribute("src", imgSrc);
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("open-custom-modal");
  modalImg.setAttribute("src", "");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("open-custom-modal");
  modalImg.setAttribute("src", "");
});

const content = document.querySelectorAll(".card_container .menus");
const btns = document.querySelectorAll(".dropdown-item ");

btns.forEach((btn) => {
  $(btn).click(() => {
    $(content).hide();
    const idBtn = btn.getAttribute("id");
    const idPage = idBtn.replace("btn", "page");
    $("#" + idPage).show();
  });
});
