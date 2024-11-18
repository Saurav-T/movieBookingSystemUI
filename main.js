let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        968: {
            slidesPerView: 5,
        },

    }
  });

  function showTrailer() {
    event.preventDefault(); // Prevent the default link behavior

    // Get the clicked element (the play button)
    const playButton = event.currentTarget;

    // Get the trailer URL from the data-trailer attribute
    const trailerURL = playButton.getAttribute('data-trailer');

    // Get the iframe element inside the popup
    const iframe = document.querySelector('.popup-video iframe');

    // Set the iframe's src to the trailer URL
    iframe.src = trailerURL.replace('watch?v=', 'embed/'); // Ensure it's an embed URL

    // Show the popup
    const popup = document.querySelector('.popup-video');
    popup.style.display = 'flex';
}

document.querySelector('.popup-video .close').addEventListener('click', function() {
  const popup = document.querySelector('.popup-video');
  const iframe = popup.querySelector('iframe');

  // Stop the video by clearing the iframe src
  iframe.src = '';

  // Hide the popup
  popup.style.display = 'none';
});

// Close the popup if the user clicks anywhere outside the iframe
document.querySelector('.popup-video').addEventListener('click', function(event) {
  if (event.target === this) {
      const iframe = this.querySelector('iframe');
      iframe.src = ''; // Stop the video when closing the popup
      this.style.display = 'none';
  }
});
