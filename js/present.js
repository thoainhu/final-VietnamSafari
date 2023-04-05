$(".presentlist").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dots: false,
  speed: 300,
  responsive: [
    {
      breakpoint: 991,
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

$(function () {
  $(".tableafter .terms .text").click(function () {
    $(this).toggleClass("active")
    $(this).parent().siblings().find(".text").removeClass("active")
    $(this).parent().find(".content").slideToggle()
    $(this).parent().siblings().find(".content").slideUp()
  })
})
new WOW().init()
