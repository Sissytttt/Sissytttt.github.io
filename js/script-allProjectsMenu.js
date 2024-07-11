function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('all-proj-container');
    card.classList.add('scroll-reveal');

    const isClickable = project.link !== "#";
    const isPlayable = project.video !== "#";

    if (isClickable) {
        const link = document.createElement('a');
        link.href = project.link;
        link.classList.add('all-proj-container');
        card.appendChild(link);

        console.log("add", project.title);

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        link.appendChild(imageContainer);

        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;
        img.classList.add('static-img');
        imageContainer.appendChild(img);

        if (isPlayable) {
            const video = document.createElement('video');
            video.classList.add('video-img');
            video.muted = true;
            video.loop = true;
            imageContainer.appendChild(video);

            const source = document.createElement('source');
            source.src = project.video;
            source.type = 'video/mp4';
            video.appendChild(source);

        }

    }
    else { // not clickable
        console.log("add", project.title);

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        card.appendChild(imageContainer);

        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;
        img.classList.add('static-img');
        imageContainer.appendChild(img);
    }

    const textDiv = document.createElement('div');
    textDiv.classList.add('text-block');
    card.appendChild(textDiv);

    const title = document.createElement('h3');
    title.classList.add('all-project-title');
    title.innerText = project.title;
    textDiv.appendChild(title);

    const tags = document.createElement('p');
    tags.classList.add('all-project-tages');
    tags.innerText = project.tags.join(" | ");
    textDiv.appendChild(tags);

    const description = document.createElement('p');
    description.classList.add('all-proj-description');
    description.innerText = project.description;
    textDiv.appendChild(description);
    return card;
}

//============================================================================================
//================== filter: default when every refresh ========================
//============================================================================================
// function filterProjects(filter) {
//     const projBlock = document.getElementById('proj-block');
//     projBlock.innerHTML = '';
//     projects.forEach(project => {
//         if (filter === 'all') {
//             const projectCard = createProjectCard(project);
//             projBlock.appendChild(projectCard);
//         }
//         else if (project.filter.includes(filter)) {
//             const projectCard = createProjectCard(project);
//             projBlock.appendChild(projectCard);
//         }
//         else if (filter === 'default' && !project.filter.includes('featured') && !project.filter.includes('dance') && !project.filter.includes('fine-arts')) {
//             const projectCard = createProjectCard(project);
//             projBlock.appendChild(projectCard);
//         }
//     });

//     //scroll effect on page load
//     document.dispatchEvent(new Event('scroll'));

//     // hover effect 
//     const containers = document.querySelectorAll('.all-proj-container');
//     containers.forEach(container => {
//         const staticImg = container.querySelector('.static-img');
//         const videoImg = container.querySelector('.video-img');

//         if (videoImg !== null) {
//             container.addEventListener('mouseenter', () => {
//                 staticImg.style.display = 'none';
//                 videoImg.style.display = 'block';
//                 // console.log(videoImg.style.display);
//                 videoImg.play();
//             });

//             container.addEventListener('mouseleave', () => {
//                 staticImg.style.display = 'block';
//                 videoImg.style.display = 'none';
//                 videoImg.pause();
//                 videoImg.currentTime = 0;
//             });
//         }
//     });
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const buttons = document.querySelectorAll('.filter-button');

//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             buttons.forEach(btn => btn.classList.remove('active'));
//             button.classList.add('active');

//             const filter = button.getAttribute('data-filter');
//             filterProjects(filter);
//         });
//     });

//     // Initial filter: default
//     filterProjects('default');
// });


//============================================================================================
//================== Test: save the filter when window.history.back() ========================
//============================================================================================
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-button');

    function filterProjects(filter) {
        const projBlock = document.getElementById('proj-block');
        projBlock.innerHTML = '';
        projects.forEach(project => {
            if (filter === 'all') {
                const projectCard = createProjectCard(project);
                projBlock.appendChild(projectCard);
            }
            else if (project.filter.includes(filter)) {
                const projectCard = createProjectCard(project);
                projBlock.appendChild(projectCard);
            }
            else if (filter === 'default' && !project.filter.includes('featured') && !project.filter.includes('dance') && !project.filter.includes('fine-arts')) {
                const projectCard = createProjectCard(project);
                projBlock.appendChild(projectCard);
            }
        });

        //scroll effect
        document.dispatchEvent(new Event('scroll'));

        // hover effect 
        const containers = document.querySelectorAll('.all-proj-container');
        containers.forEach(container => {
            const staticImg = container.querySelector('.static-img');
            const videoImg = container.querySelector('.video-img');

            if (videoImg !== null) {
                container.addEventListener('mouseenter', () => {
                    staticImg.style.display = 'none';
                    videoImg.style.display = 'block';
                    // console.log(videoImg.style.display);
                    videoImg.play();
                });

                container.addEventListener('mouseleave', () => {
                    staticImg.style.display = 'block';
                    videoImg.style.display = 'none';
                    videoImg.pause();
                    videoImg.currentTime = 0;
                });
            }
        });
    }

    // Load the last selected filter from localStorage
    const lastSelectedFilter = localStorage.getItem('selectedFilter') || 'default';

    // Apply the last selected filter
    filterProjects(lastSelectedFilter);

    // Set the active class on the correct button
    buttons.forEach(button => {
        if (button.getAttribute('data-filter') === lastSelectedFilter) {
            button.classList.add('active');
        }
    });

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            filterProjects(filter);

            // Save the selected filter to localStorage
            localStorage.setItem('selectedFilter', filter);
        });
    });
});
//================================================================


document.addEventListener('scroll', function () {
    const reveals = document.querySelectorAll('.scroll-reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach(function (reveal) {
        const revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('visible');
        } else {
            reveal.classList.remove('visible');
        }
    });
});

// Initialize scroll effect on page load
document.dispatchEvent(new Event('scroll'));


