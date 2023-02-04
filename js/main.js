window.onload = function () {
    let burger = document.querySelector(".burger");
    let nav = document.querySelector(".nav");
    let body = document.querySelector("body");
    burger.addEventListener("click", function () {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
        body.classList.toggle("hidden");
    })
}

window.addEventListener("scroll", function () {
    let headerFx = this.document.querySelector(".header-fixed");
    let scrollTop = window.pageYOffset;
    if (scrollTop > 1) headerFx.classList.add("header-fixed__bg")
    else {
        headerFx.classList.remove("header-fixed__bg")
    }
})

if (document.body.contains(document.querySelector(".video-control"))) {
    console.log(false)
    const butoom = document.querySelector(".video-control");
    const videoPlay = document.getElementById("video");
    const video = document.querySelector('.hero-video');

    function playClip(media) {
        media.play();
    }

    butoom.addEventListener("click", function () {
        video.classList.add("hide");
        butoom.style.opacity = "0";
        playClip(videoPlay)

    });
}