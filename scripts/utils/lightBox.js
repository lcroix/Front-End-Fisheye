// Open the lightbox
function openLightboxModal() {
  document.getElementById('lightbox_modal').style.display = 'block';
  // Removing scrollbar
  document.body.style.overflow = 'hidden';

  const main = document.querySelector('#main');
  main.setAttribute('aria-hidden', 'true');

  // We add the focus on the modal
  document.getElementById('lightbox_modal').focus();

  // We listen escape, arrow left and arrow right to navigate in the lightbox / close lightbox
  // mettre dans une fonction
  document.addEventListener('keydown',eventHandler); 
}
function eventHandler(e) {
  if (e.key === 'Escape') {
      closeLightboxModal();
  } else if (e.key === 'ArrowLeft') {
      plusSlides(-1);
  } else if (e.key === 'ArrowRight') {
      plusSlides(1);
  }
}

function closeLightboxModal() {
  document.removeEventListener('keydown', eventHandler);
  document.getElementById("lightbox_modal").style.display = "none";
  document.body.style.overflow = "auto";
}
 

let slideIndex = 0;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("lightbox_slide");
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
