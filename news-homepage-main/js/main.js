"use strict";

const btnMenuOpenPhone = document.querySelector(".img-menu");
const btnMenuClosePhone = document.querySelector(".img-menu-close");
const menuPhone = document.querySelector(".container-popup-phone");

const displayMenuPhone = function () {
  menuPhone.classList.remove("hidden");
};

const hideMenuPhone = function () {
  menuPhone.classList.add("hidden");
};

btnMenuOpenPhone.addEventListener("click", displayMenuPhone);

btnMenuClosePhone.addEventListener("click", hideMenuPhone);
