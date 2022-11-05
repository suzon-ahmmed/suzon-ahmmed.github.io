$(document).ready(function () {
  // Preloader
  $("#preloader").css("display", "none");

  // sticky navbar on scroll script
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".header").addClass("header-scrolling");
    } else {
      $(".header").removeClass("header-scrolling");
    }
  });
  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  /**
   * active link and # remove from link
   *
   * @param void
   * @return void
   */
  (function () {
    "use strict";
    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 1;
    Array.prototype.forEach.call(section, function (e) {
      sections[e.id] = e.offsetTop;
    });
    window.onscroll = function () {
      var scrollPosition =
        document.documentElement.scrollTop + 100 ||
        document.body.scrollTop + 100;
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
   *ASO Scroll Anymation
   *
   * @param void
   * @return void
   */
  AOS.init({
    delay: 100,
    duration: 1200,
  });

  /**
   * Portfolio
   *
   * @param void
   * @return void
   */
  $(document).ready(function () {
    const Protfolio = () => {
      $.ajax({
        url: "./src/repository/portfolio.json",
        success: (response) => {
          if (response) {
            for (let i = 0; i < response.length; i++) {
              if (i % 2 == 0) {
                $("#allPortfolio").append(`
            <div 
            class="mb-6 sm:mb-8 px-2 flex flex-col-reverse lg:flex-row items-center justify-center" data-aos="fade-up" data-aos-delay="200">
            <div class="lg:w-1/2 md:w-4/5 w-[90%] space-y-4 flex flex-col  items-center lg:items-start">
                <p class="text-slate-600 dark:text-slate-200 font-medium text-2xl">${response[i]["projectName"]}</p>
                <p class="text-center lg:text-left">${response[i]["discription"]} </p>
                <div class="before-skill">${response[i]["language"]}</div>
                <div class="space-x-4">
                    <a class="btn-primary" target="_blank" href="${response[i]["viewLink"]}">View Project</a>
                    <a target="_blank" href="${response[i]["githubLink"]}"><i class="fa-brands fa-github text-2xl hover:scale-110"></i></a>
                </div>
            </div>
            <div
                class="lg:w-1/2 md:w-4/5 w-[90%] lg:h-[360px] sm:h-[300px] h-[210px] flex justify-center m-6 relative">
                <div
                    class="border border-slate-100 w-full  dark:border-slate-600 rounded flex flex-col items-center overflow-x-hidden portfolio-image after-effect">
                    <img class="w-full shadow-lg saturate-[0.2] hover:saturate-[1]"
                        src="${response[i]["image"]}" alt="">
                </div>
            </div>
        </div>
						`);
              } else {
                $("#allPortfolio").append(`
              <div
              class="mb-6 sm:mb-8 px-2 flex flex-col lg:flex-row items-center justify-center" data-aos="fade-up" data-aos-delay="200">
              <div
                  class="lg:w-1/2 md:w-4/5 w-[90%] lg:h-[360px] sm:h-[300px] h-[210px] flex justify-center m-6 relative">
                  <div
                      class="border border-slate-100 w-full  dark:border-slate-600 rounded flex flex-col items-center overflow-x-hidden portfolio-image after-effect">
                      <img class="w-full shadow-lg saturate-[0.2] hover:saturate-[1]"
                          src="${response[i]["image"]}" alt="">
                  </div>
              </div>
              <div class="lg:w-1/2 md:w-4/5 w-[90%] space-y-4 flex flex-col  items-center lg:items-end">
                  <p class="text-slate-600 dark:text-slate-200 font-medium text-2xl">${response[i]["projectName"]}</p>
                  <p class="text-center lg:text-right">${response[i]["discription"]}</p>
                  <div class="before-skill">${response[i]["language"]}</div>
                  <div class="space-x-4">
                  <a target="_blank" href="${response[i]["githubLink"]}"><i class="fa-brands fa-github text-2xl hover:scale-110"></i></a>
                      <a class="btn-primary" target="_blank" href="${response[i]["viewLink"]}">View Project</a>
                  </div>
              </div>
          </div>

						`);
              }
            }
          }
        },
      });
    };
    Protfolio();
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
