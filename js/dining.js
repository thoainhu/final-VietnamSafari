$(function () {
  $(".diningtable .terms .text").click(function () {
    $(this).toggleClass("active")
    $(this).parent().find("ul").slideToggle()
    $(this).parent().siblings().find("ul").slideUp()
  })
})
new WOW().init()
