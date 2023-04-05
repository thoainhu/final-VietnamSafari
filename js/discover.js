$(function () {
  $("#btnmore").click(function () {
    $("#more").addClass("active")
    $("#btnmore").addClass("active")
    $("#btnmoremore").addClass("active")
    $go = $(this).attr("href")
    $("html,body").animate({
      scrollTop: $($go).offset().top - 100,
    })
  })
  $("#btnmoremore").click(function () {
    $("#moremore").addClass("active")
    $("#btnmoremore").removeClass("active")
    $("#less").addClass("active")
    $go = $(this).attr("href")
    $("html,body").animate({
      scrollTop: $($go).offset().top - 100,
    })
  })
  $("#less").click(function () {
    $("#less").removeClass("active")
    $("#moremore").removeClass("active")
    $("#more").removeClass("active")
    $("#btnmore").removeClass("active")
    $go = $(this).closest(".all").find("#top").attr("href")
    $("html,body").animate({
      scrollTop: $($go).offset().top - 500,
    })
  })
})
new WOW().init()
