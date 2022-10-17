function init_header_scrolling() {
  var header = $(".header");
  if ($(window).scrollTop() > 0) {
    header.addClass("header--scrolling");
  } else {
    header.removeClass("header--scrolling");
  }
}

$(window).scroll(function (e) {
  init_header_scrolling();
});

/**
 * active link and # remove from link
 *
 * @param void
 * @return void
 */
(function () {
  //'use strict';
  var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 1;
  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });
  window.onscroll = function () {
    var scrollPosition =
      document.documentElement.scrollTop + 100 || document.body.scrollTop + 100;
    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector(".active-link").setAttribute("class", "");
        document
          .querySelector("a[href*=" + i + "]")
          .setAttribute("class", "active-link");
      }
    }
  };
})();

/**
 *  # remove from link
 *
 * @param void
 * @return void
 */
$(function () {
  $("a[href*=\\#]:not([href=\\#])").on("click", function () {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.substr(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top - 76,
        },
        76
      );
      return false;
    }
  });
});

/**
 * scrollProgress
 *
 * @param void
 * @return void
 */
const scrollProgress = () => {
  return {
    init() {
      window.addEventListener("scroll", () => {
        let winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        let height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        this.percent = Math.round((winScroll / height) * 100);
      });
    },
    circumference: 30 * 2 * Math.PI,
    percent: 0,
  };
};
