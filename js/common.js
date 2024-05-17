// 검색 관련
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// 카피라이트 연도 관련
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();

// 드롭다운  메뉴 관련
const dropdownEl = document.querySelector(".main-menu");
