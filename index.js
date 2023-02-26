function preloaderShow() {

  window.addEventListener('load', function() {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
    const video = preloader.querySelector("video");
    
    setTimeout(function() {
        preloader.classList.add("hide");
        content.style.display = "block";
    }, 0);
    
      // add an event listener for the end of the animation
      preloader.addEventListener("animationend", function() {
        // remove the preloader from the DOM
        preloader.remove();
        
        // start the video playback
        video.play();
      });
  })
}
preloaderShow();

  
function articleShow() {
  const articles = document.querySelectorAll('.article');
  const moreButton = document.querySelector('.article-button');

  console.log(articles);

  moreButton.addEventListener('click', () => {
    articles.forEach((article) => {
      article.classList.toggle('article-fade')
    })

    if(moreButton.innerText  === "More") {
      moreButton.innerText  = "Less"
    } else {
      moreButton.innerText  = "More"
    }
  })


}
articleShow()

function toggleBlur() {
  const jumbotron = document.querySelector('.jumbotron');
  const navbar = document.querySelector('.navbar');

  let jumbotronHeight = jumbotron.offsetHeight;

  console.log(jumbotronHeight);
  
  window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset );
    if(window.pageYOffset >= jumbotronHeight - 100) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  })

}
toggleBlur();