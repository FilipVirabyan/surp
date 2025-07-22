document.addEventListener('DOMContentLoaded', () => { // Replace with your actual image, title, and audio files
    const slides = [
        { src: 'assets/images/1.jpg', title: 'Цветы лишь повод... а настоящее чудо — это ты' },
        { src: 'assets/images/2.jpg', title: 'Ты умеешь быть красивой так, будто это происходит случайно… но это волшебство' },
        { src: 'assets/images/3.jpg', title: 'Ты как солнечный луч среди снега — такая жизнерадостная, свободная и влюблённая в каждый момент' },
        { src: 'assets/images/4.jpg', title: 'Даже самый страшный монстр становится милым, когда внутри — ты' }
    ];
    const audioSrc = 'assets/audio.mp3'; // Placeholder audio
    const clickMeButton = document.getElementById('click-me');
    const carouselContainer = document.getElementById('carousel-container');
    const carouselImage = document.getElementById('carousel-image');
    const carouselTitle = document.getElementById('carousel-title');
    const romanceAudio = document.getElementById('romance-audio');
    const heartsContainer = document.getElementById('hearts-container');

    let currentSlideIndex = 0;

    function showSlide() {
        carouselImage.src = slides[currentSlideIndex].src;
        carouselTitle.textContent = slides[currentSlideIndex].title;
        carouselImage.classList.remove('fade');
        carouselTitle.classList.remove('fade');
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 8 + 's'; // Between 8 and 10 seconds
        heart.innerHTML = '&#10084;';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000); // Remove heart after 10 seconds
    }

    clickMeButton.addEventListener('click', () => {
        clickMeButton.classList.add('hidden');
        carouselContainer.classList.remove('hidden');

        romanceAudio.src = audioSrc;
        romanceAudio.play();

        showSlide();

        setInterval(createHeart, 300);

        setInterval(() => {
            carouselImage.classList.add('fade');
            carouselTitle.classList.add('fade');
            setTimeout(() => {
                currentSlideIndex = (currentSlideIndex + 1) % slides.length;
                showSlide();
            }, 500);
        }, 5000);
    });
});