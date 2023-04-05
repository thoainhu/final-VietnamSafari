$(function () {
  $(".kid").click(function () {
    $go = $(this).attr("href")
    console.log($go)
    $("html,body").animate({
      scrollTop: $($go).offset().top - 100,
    })
  })
  $(".adult").click(function () {
    $go = $(this).attr("href")
    console.log($go)
    $("html,body").animate({
      scrollTop: $($go).offset().top - 80,
    })
  })
})

let playVideo = document.querySelectorAll(".soon .image .play")
// let closeVideo = document.querySelector(".modal-header button");
let closeVideoout = document.querySelector(".modal")
let video = document.querySelector(".modalVideo")
playVideo.forEach((playItem) => {
  playItem.addEventListener("click", function () {
    let srcYT = playItem.getAttribute("data-src")
    video.innerHTML = `<iframe
                                width="100%"
                                height="800"
                                src="https://www.youtube.com/embed/${srcYT}"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>`
  })
})
// closeVideo.addEventListener("click", function () {
//   video.innerHTML = ""
// })
closeVideoout.addEventListener("click", function () {
  video.innerHTML = ""
})
new WOW().init()
