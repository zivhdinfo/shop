var themeToggleBtn = document.getElementById("theme-toggle");
if (
  ("dark" !== localStorage.getItem("str1-color-theme") &&
  "str1-color-theme" in localStorage
    ? ((themeToggleBtn.checked = !1),
      document.documentElement.classList.remove("dark"))
    : ((themeToggleBtn.checked = !0),
      document.documentElement.classList.add("dark")),
  themeToggleBtn.addEventListener("change", function () {
    localStorage.getItem("str1-color-scheme")
      ? "light" === localStorage.getItem("str1-color-theme")
        ? (document.documentElement.classList.add("dark"),
          localStorage.setItem("str1-color-theme", "dark"))
        : (document.documentElement.classList.remove("dark"),
          localStorage.setItem("str1-color-theme", "light"))
      : document.documentElement.classList.contains("dark")
      ? (document.documentElement.classList.remove("dark"),
        localStorage.setItem("str1-color-theme", "light"))
      : (document.documentElement.classList.add("dark"),
        localStorage.setItem("str1-color-theme", "dark"));
  }),
  document.querySelector(".js-vv-social-links-floating-toggle"))
) {
  const a = document.querySelector(".js-vv-social-links-floating-toggle");
  a.onclick = () => {
    a.classList.toggle("active");
  };
}
if (document.querySelector(".js-vv-streams-filter-toggle")) {
  const b = document.querySelector(".js-vv-streams-filter-toggle");
  b.onclick = () => {
    b.classList.toggle("active");
  };
}
if (document.querySelector(".js-vv-modal")) {
  const c = document.querySelector(".js-vv-modal"),
    d = document.querySelectorAll(".js-vv-modal__open-btn-login-register");
  d.forEach((e) => {
    e.addEventListener("click", () => {
      c.showModal();
    });
  });
}
const swiperProductsNav = new Swiper(".js-vv-product-swiper-nav", {
    spaceBetween: 20,
    slidesPerView: 3,
    watchSlidesProgress: !0,
    breakpoints: {
      576: { slidesPerView: 4 },
      768: { spaceBetween: 24, slidesPerView: 4 },
      992: { spaceBetween: 36, slidesPerView: 4 },
    },
  }),
  swiperProducts = new Swiper(".js-vv-product-swiper", {
    thumbs: { swiper: swiperProductsNav },
  }),
  swiperTwitterFeed = new Swiper(".js-vv-twitter-feed-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: !0,
    autoplay: { delay: 7e3, disableOnInteraction: !0 },
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 3 },
      1210: { slidesPerView: 3 },
    },
    navigation: {
      nextEl: ".js-vv-twitter-feed-swiper-btn-next",
      prevEl: ".js-vv-twitter-feed-swiper-btn-prev",
    },
  }),
  swiperGamesTop = new Swiper(".js-vv-games-swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: !0,
    breakpoints: {
      576: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      992: { slidesPerView: 5 },
      1210: { slidesPerView: 6 },
    },
    navigation: {
      nextEl: ".js-vv-games-swiper-btn-next",
      prevEl: ".js-vv-games-swiper-btn-prev",
    },
  });
if (document.querySelector(".js-vv-countdown-container")) {
  const f = new Date("May 30, 2023 00:00:00").getTime(),
    g = () => {
      var e = new Date().getTime(),
        e = f - e,
        t = Math.floor(e / 1e3 / 86400),
        t = 100 - t || 10;
      let s = "00",
        o = "00",
        r = "00",
        l = "00";
      0 < e &&
        ((s = Math.floor(e / 864e5)),
        (o = Math.floor((e % 864e5) / 36e5)),
        (r = Math.floor((e % 36e5) / 6e4)),
        (l = Math.floor((e % 6e4) / 1e3)),
        s <= 9 ? (s = "0" + s) : s,
        o <= 9 ? (o = "0" + o) : o,
        r <= 9 ? (r = "0" + r) : r,
        l <= 9 ? (l = "0" + l) : l),
        (document.querySelector(".js-vv-days").textContent = s),
        (document.querySelector(".js-vv-hours").textContent = o),
        (document.querySelector(".js-vv-minutes").textContent = r),
        (document.querySelector(".js-vv-seconds").textContent = l),
        (document.querySelector(".js-vv-countdown-progress-bar").style.width =
          t + "%");
    };
  g(), setInterval(g, 1e3);
}
const swiperHeroSlider = new Swiper(".js-vv-hero-swiper", {
  slidesPerView: 1,
  loop: !0,
  speed: 400,
  effect: "fade",
  fadeEffect: { crossFade: !0 },
  autoplay: { delay: 8e3, disableOnInteraction: !1 },
  pagination: { el: ".js-vv-hero-swiper-pagination", clickable: !0 },
  navigation: {
    nextEl: ".js-vv-hero-swiper-btn-next",
    prevEl: ".js-vv-hero-swiper-btn-prev",
  },
  on: {
    slideChange: function () {
      var e = this.realIndex;
      const t = this.slides[e];
      t.classList.add("vv-slide-played");
    },
  },
});
