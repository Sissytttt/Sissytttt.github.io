
const projects = [
    {
        title: "Ethereal Alchemy",
        tags: ["Coding", "featured"],
        description: "An emotional healing experience helping the audience to achieve holistic well-being and find their emotional state of balance through the expressive body movement and interactive media experience.",
        image: "assets/Projects-featuredImage/ethereal.png",
        link: "proj-etherealAlchemy.html",
        filter: ["coding", "featured"]
    },
    {
        title: "Descendant Of The Desert",
        tags: ["Installation", "featured"],
        description: "A thought-provoking installation exploring the themes of isolation and survival in a desert environment.",
        image: "assets/Projects-featuredImage/desert.png",
        link: "descendantOfTheDesert.html",
        filter: ["installation", "featured"]
    },
    {
        title: "City Of Belonging",
        tags: ["XR & UX", "featured"],
        description: "A project focusing on creating a sense of belonging and community through XR and UX design.",
        image: "assets/Projects-featuredImage/belonging.png",
        link: "cityOfBelonging.html",
        filter: ["xr-development", "ux-design", "featured"]
    },
    {
        title: "The Lost Letter",
        tags: ["Game Dev", "featured"],
        description: "An engaging game development project that tells the story of a lost letter and the journey to find it.",
        image: "assets/Projects-featuredImage/letter.png",
        link: "theLostLetter.html",
        filter: ["game-dev", "featured"]
    },
    {
        title: "Disconnect",
        tags: ["Installation", "featured"],
        description: "An installation that explores the theme of disconnection in the modern world.",
        image: "assets/Projects-featuredImage/disconnect.png",
        link: "disconnect.html",
        filter: ["installation", "featured"]
    },
    {
        title: "True Dream Home",
        tags: ["UX & XR"],
        description: "A project aiming to design the true dream home using UX and XR technologies.",
        image: "assets/otherWorks/trueDreamHome/coverImage.png",
        link: "other-trueDreamHome.html",
        filter: ["ux-design", "xr-development"]
    },
    {
        title: "Wooden Mandala",
        tags: ["Installation & Internship"],
        description: "An installation created during an internship, focusing on the use of wood to create intricate mandala designs.",
        image: "assets/otherWorks/woodenMandala/coverImage.jpg",
        link: "other-woodenMandala.html",
        filter: ["installation"]
    },
    {
        title: "Future Of Greens",
        tags: ["XR & Coding"],
        description: "A project that explores the future of greens using XR and coding technologies.",
        image: "assets/otherWorks/futureOfGreens/coverImage.jpg",
        link: "other-futureOfGreens.html",
        filter: ["xr-development", "coding"]
    },
    {
        title: "Sharing Company",
        tags: ["UX & Product"],
        description: "A project focused on designing user experience and product strategies for a sharing company.",
        image: "assets/otherWorks/sharingCompany/coverImage.jpg",
        link: "other-sharingCompany.html",
        filter: ["ux-design", "product-marketing-design"]
    },
    // {
    //     title: "Teaching & Learning Creative Coding with Conversational AI",
    //     tags: ["Publishings"],
    //     description: "A publication that delves into teaching and learning creative coding using conversational AI.",
    //     image: "assets/otherWorks/teachingLearningCreativeCoding/coverImage.jpg",
    //     link: "other-teachingLearningCreativeCoding.html",
    //     filter: ["publishings"]
    // },
    {
        title: "Scattered and Reassembled | Han-Tang Dance",
        tags: ["Dance"],
        description: "A YouTube video showcasing the Han-Tang dance, scattered and reassembled.",
        image: "assets/otherWorks/scatteredAndReassembled/coverImage.jpg",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        filter: ["dance"]
    },
    {
        title: "Foundation Keeper",
        tags: ["UX & Product / Marketing Design"],
        description: "A project on designing user experience and marketing strategies for a foundation.",
        image: "assets/otherWorks/foundationKeeper/coverImage.jpg",
        link: "other-foundationKeeper.html",
        filter: ["ux-design", "product-marketing-design"]
    },
    {
        title: "Starry Night",
        tags: ["Fine Art"],
        description: "A fine art project that captures the beauty of a starry night.",
        image: "assets/otherWorks/fineArts/feltedwoolartwork.jpg",
        link: "#",
        filter: ["fine-arts"]
    },
    {
        title: "Sound Of Nature",
        tags: ["Coding"],
        description: "A project that explores the sounds of nature through coding.",
        image: "assets/otherWorks/soundOfNature/coverImage.png",
        link: "other-soundOfNature.html",
        filter: ["coding"]
    },
    {
        title: "Tmall Campus",
        tags: ["UX"],
        description: "A project focusing on designing user experience for Tmall Campus.",
        image: "assets/otherWorks/tmallCampus/coverImage.jpg",
        link: "other-tmallCampus.html",
        filter: ["ux-design"]
    },
    {
        title: "Fallin' Out",
        tags: ["Dance"],
        description: "A YouTube video showcasing the Fallin' Out dance performance.",
        image: "assets/otherWorks/fallinOut/coverImage.jpg",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        filter: ["dance"]
    },
    {
        title: "Break My Heart Myself",
        tags: ["Dance"],
        description: "A YouTube video showcasing the Break My Heart Myself dance performance.",
        image: "assets/otherWorks/breakMyHeartMyself/coverImage.jpg",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        filter: ["dance"]
    },
    {
        title: "Real Me",
        tags: ["Product / Marketing Design"],
        description: "A project on designing marketing strategies for the 'Real Me' campaign.",
        image: "assets/otherWorks/realMe/coverImage.png",
        link: "other-realMe.html",
        filter: ["product-marketing-design"]
    },
    {
        title: "Afternoon Tea",
        tags: ["Fine Art"],
        description: "A fine art project capturing the essence of an afternoon tea.",
        image: "assets/otherWorks/afternoonTea/coverImage.jpg",
        link: "#",
        filter: ["fine-arts"]
    },
    {
        title: "Tmall Campus",
        tags: ["Fine Art"],
        description: "A fine art project focusing on Tmall Campus.",
        image: "assets/otherWorks/tmallCampusFineArt/coverImage.jpg",
        link: "#",
        filter: ["fine-arts"]
    },
    {
        title: "KindRoot",
        tags: ["Game"],
        description: "A game development project called KindRoot.",
        image: "assets/otherWorks/kindRoot/coverImage.png",
        link: "other-kindRoot.html",
        filter: ["game-dev"]
    },
    {
        title: "AR playGround",
        tags: ["XR"],
        description: "A project focusing on creating an AR playground.",
        image: "assets/otherWorks/arPlayGround/coverImage.png",
        link: "other-arPlayGround.html",
        filter: ["xr-development"]
    },
    {
        title: "BeautifyAI",
        tags: ["UX & Product / Marketing Design"],
        description: "A project on designing user experience and marketing strategies for BeautifyAI.",
        image: "assets/otherWorks/beautifyAI/coverImage.jpg",
        link: "other-beautifyAI.html",
        filter: ["ux-design", "product-marketing-design"]
    },
    {
        title: "My Favorite Snack",
        tags: ["Fine Art"],
        description: "A fine art project capturing the essence of a favorite snack.",
        image: "assets/otherWorks/myFavoriteSnack/coverImage.jpg",
        link: "#",
        filter: ["fine-arts"]
    },
    {
        title: "Water Shadows",
        tags: ["Fine Art"],
        description: "A fine art project capturing the beauty of water shadows.",
        image: "assets/otherWorks/waterShadows/coverImage.jpg",
        link: "#",
        filter: ["fine-arts"]
    },
    {
        title: "Installation Design",
        tags: ["Fine Art"],
        description: "A fine art project focusing on installation design.",
        image: "assets/otherWorks/installationDesign/coverImage.jpg",
        link: "#",
        filter: ["fine-arts"]
    },
];

function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('container-proj');
    card.classList.add('scroll-reveal');

    const isClickable = project.link !== "#";

    if (isClickable) {
        const link = document.createElement('a');
        link.href = project.link;
        link.classList.add('container-proj');
        card.appendChild(link);

        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;
        img.classList.add('proj-image');
        link.appendChild(img);

        const textDiv = document.createElement('div');
        textDiv.classList.add('text-block');
        link.appendChild(textDiv);

        const title = document.createElement('h3');
        title.classList.add('menu-project-title');
        title.innerText = project.title;
        textDiv.appendChild(title);

        const tags = document.createElement('p');
        tags.classList.add('menu-project-tages');
        tags.innerText = project.tags.join(" | ");
        textDiv.appendChild(tags);

        const description = document.createElement('p');
        description.classList.add('proj-description');
        description.innerText = project.description;
        textDiv.appendChild(description);
    } else {
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;
        img.classList.add('proj-image'); // image for fine arts -- shouldn;t be cropped
        card.appendChild(img);

        const textDiv = document.createElement('div');
        textDiv.classList.add('text-block');
        card.appendChild(textDiv);

        const title = document.createElement('h3');
        title.classList.add('menu-project-title');
        title.innerText = project.title;
        textDiv.appendChild(title);

        const tags = document.createElement('p');
        tags.classList.add('menu-project-tages');
        tags.innerText = project.tags.join(" | ");
        textDiv.appendChild(tags);

        const description = document.createElement('p');
        description.classList.add('proj-description');
        description.innerText = project.description;
        textDiv.appendChild(description);
    }

    return card;
}

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

    // Initialize scroll effect on newly added elements
    document.dispatchEvent(new Event('scroll'));
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterProjects(filter);
        });
    });

    // Initial filter: default
    filterProjects('default');
});

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