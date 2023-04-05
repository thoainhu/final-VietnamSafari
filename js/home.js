


let playVideo = document.querySelector(".video .play")
// let closeVideo = document.querySelector(".modal-header button")
let closeVideoout = document.querySelector(".modal")
let video = document.querySelector(".modalVideo")
playVideo.addEventListener("click", function () {
  video.innerHTML = `<iframe
                                width="100%"
                                height="800"
                                src="https://www.youtube.com/embed/P8frC_cLLD4"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>`
})
// closeVideo.addEventListener("click", function () {
//   video.innerHTML = ""
// })
closeVideoout.addEventListener("click", function () {
    video.innerHTML = ""
  });

  new WOW().init();