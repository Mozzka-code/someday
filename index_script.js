function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.muted = false;
    audio.play();
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