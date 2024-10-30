let currentIndex = 0

function showSlide(index) {
    const slides = document.querySelectorAll('.slide')
    const dots = document.querySelectorAll('.dot')

    if (index >= slides.length) currentIndex = 0
    if (index < 0) currentIndex = slides.length - 1

    slides.forEach((slides, i) => {
        slides.style.display = i === currentIndex ? 'block' : 'none';
    })

    dots.forEach(dot => dot.classList.remove('active'))
    dots[currentIndex].classList.add('active')

}

function moveSlide(n) {
    showSlide(currentIndex += n)
}
function currentSlide(n) {
    showSlide(currentIndex = n - 1)
}

showSlide(currentIndex);
 
