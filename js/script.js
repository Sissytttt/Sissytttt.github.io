document.addEventListener('DOMContentLoaded', () => {
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
});

