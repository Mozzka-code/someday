function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.muted = false;
    audio.play();

    // Mengatur Media Session API
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: "I Quit Drinking",
            artist: "Kelsea Ballerini, LANY",
            artwork: [
                { src: "all/cover.jpg", sizes: "512x512", type: "image/jpeg" }
            ]
        });
    }
}

document.body.addEventListener("click", playAudio);
document.body.addEventListener("touchstart", playAudio);

function disableScroll() {
    document.body.style.overflow = 'hidden';
}
function enableScroll() {
    document.body.style.overflow = 'auto';
}
disableScroll();
