"use strict";
const menu = document.querySelector(".menu");
const nav = document.querySelector("#navigation");
menu.addEventListener("click", () => {
 const expanded = menu.getAttribute("aria-expanded") === "true";
 menu.setAttribute("aria-expanded", String(!expanded));
 nav.classList.toggle("is-open", !expanded);
});
nav.addEventListener("click", event => {
 if (event.target.closest("a")) { menu.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); }
});
document.addEventListener("keydown", event => {
 if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") { menu.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); menu.focus(); }
});
const filters = [...document.querySelectorAll("[data-filter]")];
const projects = [...document.querySelectorAll(".project")];
filters.forEach(button => button.addEventListener("click", () => {
 filters.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
 let count = 0;
 projects.forEach(project => {
  project.hidden = button.dataset.filter !== "all" && project.dataset.category !== button.dataset.filter;
  if (!project.hidden) count++;
 });
 document.querySelector("#filter-status").textContent = `${count}개 프로젝트를 표시합니다.`;
}));
