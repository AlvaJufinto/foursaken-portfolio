window.onload = function() {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
    const video = preloader.querySelector("video");
    
    setTimeout(function() {
        preloader.classList.add("hide");
        content.style.display = "block";
    }, 3000);
    
      // add an event listener for the end of the animation
      preloader.addEventListener("animationend", function() {
        // remove the preloader from the DOM
        preloader.remove();
        
        // start the video playback
        video.play();
      });
  };