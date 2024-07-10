const projects = [
    {
        title: "Ethereal Alchemy",
        tags: ["Coding", "featured"],
        description: "An emotional healing experience helping the audience to achieve holistic well-being and find their emotional state of balance through the expressive body movement and interactive media experience.",
        image: "assets/Projects-featuredImage/ethereal.png",
        video: "#",
        link: "../featuredProjectPages/proj-etherealAlchemy.html",
        filter: ["computation", "installation", "featured"]
    },
    {
        title: "Descendant Of The Desert",
        tags: ["Installation", "featured"],
        description: "A thought-provoking installation exploring the themes of isolation and survival in a desert environment.",
        image: "assets/Projects-featuredImage/desert.png",
        video: "#",
        link: "../featuredProjectPages/proj-descendantOfTheDesert.html",
        filter: ["installation", "computation", "featured"]
    },
    {
        title: "City Of Belonging",
        tags: ["XR & UX", "featured"],
        description: "A project focusing on creating a sense of belonging and community through XR and UX design.",
        image: "assets/Projects-featuredImage/belonging.png",
        video: "#",
        link: "../featuredProjectPages/proj-cityOfBelonging.html",
        filter: ["xr", "ux", "featured"]
    },
    {
        title: "The Lost Letter",
        tags: ["Game Dev", "featured"],
        description: "An engaging game development project that tells the story of a lost letter and the journey to find it.",
        image: "../assets/Projects-featuredImage/letter.png",
        video: "#",
        link: "../featuredProjectPages/proj-theLostLetter.html",
        filter: ["game", "featured"]
    },
    {
        title: "Disconnect",
        tags: ["Installation", "featured"],
        description: "An installation that explores the theme of disconnection in the modern world.",
        image: "assets/Projects-featuredImage/disconnect.png",
        video: "#",
        link: "../featuredProjectPages/proj-disconnect.html",
        filter: ["installation", "featured"]
    },
    {
        title: "True Dream Home",
        tags: ["UX | XR | Game"],
        description: "A project aiming to design the true dream home using UX and XR technologies.",
        image: "assets/otherWorks/trueDreamHome/coverImage.png",
        video: "assets/otherWorks/trueDreamHome/coverVideo.mp4",
        link: "../otherProjectsPages/oProj-trueDreamHome.html",
        filter: ["ux", "xr", "game"]
    },
    {
        title: "Wooden Mandala",
        tags: ["Installation & Internship"],
        description: "An installation created during an internship, focusing on the use of wood to create intricate mandala designs.",
        image: "assets/otherWorks/woodenMandala/coverImage.jpg",
        video: "assets/otherWorks/woodenMandala/coverVideo.mp4",
        link: "../otherProjectsPages/oProj-woodenMandala.html",
        filter: ["installation", "computation"]
    },
    {
        title: "Future Of Greens",
        tags: ["XR & Coding"],
        description: "A project that explores the future of greens using XR and coding technologies.",
        image: "assets/otherWorks/futureOfGreens/coverImage.png",
        video: "assets/otherWorks/futureOfGreens/coverVideo.mp4",
        link: "../otherProjectsPages/oProj-futureOfGreens.html",
        filter: ["xr", "computation"]
    },
    {
        title: "Sharing Accompany",
        tags: ["UX & Product"],
        description: "A project focused on designing user experience and product strategies for a sharing company.",
        image: "assets/otherWorks/sharingCompany/coverImage.jpg",
        video: "assets/otherWorks/sharingCompany/coverVideo.mp4",
        link: "other-sharingCompany.html",
        filter: ["ux", "installation"]
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
        title: "Foundation Keeper",
        tags: ["UX & Product / Marketing Design"],
        description: "A project on designing user experience and marketing strategies for a foundation.",
        image: "assets/otherWorks/foundationKeeper/coverImage.jpg",
        video: "assets/otherWorks/foundationKeeper/coverVideo.mp4",
        link: "other-foundationKeeper.html",
        filter: ["ux"]
    },
    {
        title: "Sound Of Nature",
        tags: ["Coding"],
        description: "A project that explores the sounds of nature through coding.",
        image: "assets/otherWorks/soundOfNature/coverImage.png",
        video: "assets/otherWorks/soundOfNature/coverVideo.mp4",
        link: "other-soundOfNature.html",
        filter: ["computation"]
    },
    {
        title: "Tmall Campus",
        tags: ["UX"],
        description: "A project focusing on designing user experience for Tmall Campus.",
        image: "assets/otherWorks/TmallCampus/coverImage.png",
        video: "#",
        link: "other-tmallCampus.html",
        filter: ["ux"]
    },
    {
        title: "Real Me",
        tags: ["Product / Marketing Design"],
        description: "A project on designing marketing strategies for the 'Real Me' campaign.",
        image: "assets/otherWorks/realMe/coverImage.png",
        video: "#",
        link: "other-realMe.html",
        filter: ["ux"]
    },
    {
        title: "Afternoon Tea",
        tags: ["Fine Art"],
        description: "A fine art project capturing the essence of an afternoon tea.",
        image: "assets/otherWorks/afternoonTea/coverImage.jpg",
        video: "#",
        link: "#",
        filter: ["fine-arts"]
    },
    {
        title: "KindRoot",
        tags: ["Game"],
        description: "A game development project called KindRoot.",
        image: "assets/otherWorks/kindRoot/coverImage.png",
        video: "assets/otherWorks/kindRoot/coverVideo.mp4",
        link: "other-kindRoot.html",
        filter: ["game"]
    },
    {
        title: "Whispering Sanctuary",
        tags: ["Installation"],
        description: "An immersive installation that creates a tranquil and meditative environment through the use of sound and light.",
        image: "assets/otherWorks/whisperingSanctuary/coverImage.jpg",
        video: "assets/otherWorks/whisperingSanctuary/coverVideo.mp4",
        link: "whisperingSanctuary.html",
        filter: ["installation"]
    },
    {
        title: "AR playGround",
        tags: ["XR"],
        description: "A project focusing on creating an AR playground.",
        image: "assets/otherWorks/arPlayGround/coverImage.png",
        video: "assets/otherWorks/arPlayGround/coverImage.png",
        link: "other-arPlayGround.html",
        filter: ["xr"]
    },
    {
        title: "BeautifyAI",
        tags: ["UX & Product / Marketing Design"],
        description: "A project on designing user experience and marketing strategies for BeautifyAI.",
        image: "assets/otherWorks/beautifyAI/coverImage.jpg",
        video: "#",
        link: "other-beautifyAI.html",
        filter: ["ux"]
    },
    {
        title: "Scattered and Reassembled | Han-Tang Dance",
        tags: ["Dance"],
        description: "A YouTube video showcasing the Han-Tang dance, scattered and reassembled.",
        image: "assets/otherWorks/dance/hantangCoverImage.jpg",
        video: "assets/otherWorks/dance/hantangCoverVideo.mp4",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        filter: ["dance"]
    },
    {
        title: "Fallin' Out",
        tags: ["Dance"],
        description: "A YouTube video showcasing the Fallin' Out dance performance.",
        image: "assets/otherWorks/dance/fallCoverImage.jpg",
        video: "assets/otherWorks/dance/fallCoverVideo.mp4",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        filter: ["dance"]
    },
    {
        title: "Break My Heart Myself",
        tags: ["Dance"],
        description: "A YouTube video showcasing the Break My Heart Myself dance performance.",
        image: "assets/otherWorks/dance/breakCoverImage.png",
        video: "assets/otherWorks/dance/breakCoverVideo.mp4",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        filter: ["dance"]
    },
    {
        title: "Starry Night",
        tags: ["Fine Art"],
        description: "A fine art project that captures the beauty of a starry night.",
        image: "assets/otherWorks/fineArts/feltedwoolartwork.jpg",
        video: "#",
        link: "#",
        filter: ["fine-arts"]
    },
    {
        title: "My Favorite Snack",
        tags: ["Fine Art"],
        description: "A fine art project capturing the essence of a favorite snack.",
        image: "assets/otherWorks/myFavoriteSnack/coverImage.jpg",
        video: "#",
        link: "#",
        filter: ["fine-arts"]
    },
    {
        title: "Water Shadows",
        tags: ["Fine Art"],
        description: "A fine art project capturing the beauty of water shadows.",
        image: "assets/otherWorks/waterShadows/coverImage.jpg",
        video: "#",
        link: "#",
        filter: ["fine-arts"]
    },
    {
        title: "Installation Design",
        tags: ["Fine Art"],
        description: "A fine art project focusing on installation design.",
        image: "assets/otherWorks/installationDesign/coverImage.jpg",
        video: "#",
        link: "#",
        filter: ["fine-arts"]
    },
];