const carousel = document.querySelector('#carouselExampleCaptions');
carousel.focus
const indicators = document.querySelectorAll('.carousel-indicators button');
const labels = document.querySelectorAll('.carousel-indicators label');

carousel.addEventListener('slid.bs.carousel', function (event) {

    indicators.forEach((btn) => btn.classList.remove('active'));
    labels.forEach((label) => label.classList.remove('active'));

    const activeIndex = event.to; 
    indicators[activeIndex].classList.add('active');
    labels[activeIndex].classList.add('active');




});
let currentIndex = 0;
const cards = document.querySelectorAll('.carousel-card');
const totalCards = cards.length;
const carouselTrack = document.querySelector('.carousel-track');

function moveCarousel() {
  if (currentIndex >= totalCards - 3) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  carouselTrack.style.transform = `translateX(-${currentIndex * 33.33}%)`;
}

document.querySelector('.carousel-next').addEventListener('click', moveCarousel);
document.querySelector('.carousel-prev').addEventListener('click', () => {
  if (currentIndex <= 0) {
    currentIndex = totalCards - 3;
  } else {
    currentIndex--;
  }
  carouselTrack.style.transform = `translateX(-${currentIndex * 33.33}%)`;
});
 

    
