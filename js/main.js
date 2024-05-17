// 배지 & 탑버튼 관련
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지 숨김
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 탑버튼 표시
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      // 배지 표시
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 탑버튼 숨김
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
// _.throttle(함수, 시간)

// 탑버튼 기능 관련

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

// 메인 상단 이미지 관련
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1,
  });
});

// 공지사항 Swiper 관련
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

// 프로모션 이미지 Swiper 관련
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

// 어워드 Swiper 관련
new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

// 프로모션 토글 버튼 관련
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add("hide");
  } else {
    // 보임 처리
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// 플로팅 이미지 관련
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// scrollMagic 관련
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
  })
    .setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});
