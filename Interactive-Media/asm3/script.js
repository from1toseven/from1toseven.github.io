//necessary elements
const threadButtons = document.querySelectorAll('.thread_button');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close_button');
const carouselImages = document.querySelectorAll('.carousel-image');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
let currentIndex = 0;

// Add event listeners to each thread button
threadButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    // Show the overlay
    overlay.style.display = 'flex';

    // Set the active image
    carouselImages.forEach(function (image) {
      image.style.display = 'none';
    });
    carouselImages[index].style.display = 'block';
    currentIndex = index;
  });
});

// Add event listener to the overlay to close the image when clicked outside of it
overlay.addEventListener('click', function (event) {
  if (event.target === overlay || event.target === closeButton) {
    overlay.style.display = 'none'; // Hide the overlay
  }
});

// Add event listener to the previous arrow
prevArrow.addEventListener('click', function () {
  carouselImages[currentIndex].style.display = 'none';
  currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  carouselImages[currentIndex].style.display = 'block';
});

// Add event listener to the next arrow
nextArrow.addEventListener('click', function () {
  carouselImages[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImages[currentIndex].style.display = 'block';
});


const aboutButton = document.getElementById('about_button');
const overlay2 = document.getElementById('overlay2');
const closeAnnouncementButton = document.getElementById('close_announcement_button');

aboutButton.addEventListener('click', () => {
  overlay2.style.display = 'flex';
});

closeAnnouncementButton.addEventListener('click', () => {
  overlay2.style.display = 'none';
});

