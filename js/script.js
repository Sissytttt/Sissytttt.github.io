function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = '../index.html';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // navbar scrolling animation
    const floatingNavbar = document.querySelector('.floating-navbar');
    let timer;
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        clearTimeout(timer);
        const currentScrollTop = window.scrollY;

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            if (currentScrollTop > 100) {
                floatingNavbar.style.top = '0';
                floatingNavbar.style.opacity = '1';
            }
        } else {
            // Scrolling up
            floatingNavbar.style.opacity = '0';
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

        timer = setTimeout(() => {
            if (window.scrollY > 100) {
                floatingNavbar.style.top = '0';
                floatingNavbar.style.opacity = '1';
            } else {
                floatingNavbar.style.top = '0';
                floatingNavbar.style.opacity = '0';
            }
        }, 200);
    });


    // Footer gallery animation
    let currentIndex = 0;
    const itemsPerPage = 2;
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const totalItems = galleryItems.length;
    const totalPages = totalItems - 1;

    function updateGallery() {
        const offset = (currentIndex * 100) / 2;
        galleryContainer.style.transform = `translateX(-${offset}%)`;
    }

    window.nextSlide = function () {
        currentIndex = (currentIndex + 1) % totalPages;
        updateGallery();
    };

    window.prevSlide = function () {
        currentIndex = (currentIndex - 1 + totalPages) % totalPages;
        updateGallery();
    };

    updateGallery();
});



// Index page - Menu - Project hover animation
document.querySelector('.container-proj1').addEventListener('mouseenter', function () {
    if (!this.classList.contains('triggered')) {
        this.classList.add('triggered');
    }
});
document.querySelector('.container-proj2').addEventListener('mouseenter', function () {
    if (!this.classList.contains('triggered')) {
        this.classList.add('triggered');
    }
});
document.querySelector('.container-proj3').addEventListener('mouseenter', function () {
    if (!this.classList.contains('triggered')) {
        this.classList.add('triggered');
    }
});
document.querySelector('.container-proj4').addEventListener('mouseenter', function () {
    if (!this.classList.contains('triggered')) {
        this.classList.add('triggered');
    }
});
document.querySelector('.container-proj5').addEventListener('mouseenter', function () {
    if (!this.classList.contains('triggered')) {
        this.classList.add('triggered');
    }
});
document.querySelector('.container-proj6').addEventListener('mouseenter', function () {
    if (!this.classList.contains('triggered')) {
        this.classList.add('triggered');
    }
});