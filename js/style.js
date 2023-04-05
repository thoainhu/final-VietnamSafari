$(function () {
  $(".slide").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
    speed: 300,
  })
  $(".slide-feedback").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      }
      
    ],
  })
  $(".gallery").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 444,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })
  $(".staff").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  })

  $(".soon").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: false,
    cssEase: "linear",
  })

  $(".aboutSafari .animal .choose .choosen").click(function () {
    $imgSrc = $(this).find("img").attr("src")

    $(".aboutSafari .animal .picture img").attr("src", $imgSrc)
  })
  $(".event .card .text .age .item").click(function () {
    $(this).addClass("active")
    $(this).siblings().removeClass("active")
    $id = $(this).attr("datatab")
    $($id).addClass("active")
    $($id).siblings().removeClass("active")
  })
})

$('[data-fancybox="gallery"]').fancybox({
  buttons: ["slideShow", "thumbs", "zoom", "fullScreen", "share", "close"],
  loop: false,
  protect: true,
})

let headerMenu = document.querySelector(".headerMenu")
window.onscroll = function () {
  let value = window.scrollY
  if (value > 100) {
    headerMenu.classList.add("fixed")
  } else {
    headerMenu.classList.remove("fixed")
  }
}

let valueDisplays = document.querySelectorAll(".num")
let interval = 1000
valueDisplays.forEach((valueDisplays) => {
  let startValue = 0
  let endValue = parseInt(valueDisplays.getAttribute("data-val"))
  let duration = Math.floor(interval / endValue)
  let counter = setInterval(function () {
    startValue += 1
    valueDisplays.textContent = startValue
    if (startValue == endValue) {
      clearInterval(counter)
    }
  }, duration)
})

let backtop = document.querySelector(".backtop")
backtop.onclick = function () {
  window.scrollTo(0, 0)
}
new WOW().init();