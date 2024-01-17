import {nike, project2, project5, project3d, project3d_2, facebook, twitter, instagram, reactlogo, css, html} from '../assets/images'


export const projects = [
    {imgurl: nike, label: "Nike Project", url : "https://soft-pika-d80bcd.netlify.app/"}, 
    {imgurl: project2, label: "Project1", url : "https://spectacular-bonbon-397ecc.netlify.app/"}, 
    {imgurl: project5, label: "Project 5", url : "https://spectacular-starship-b9d7b6.netlify.app/"}, 
    {imgurl: project3d, label: "Project 3D", url : "https://helpful-cheesecake-7cfd01.netlify.app/"}, 
    {imgurl: project3d_2, label: "Project 3D Tow", url : "https://deft-heliotrope-5cdb0b.netlify.app/"}
]


export const nav = ['home', 'MyWork', 'MySkils', 'MyFavorite', 'Contect_Us']

export const sociallicon = [{url: facebook, label:"facebook", href: "https://www.facebook.com/karime.fekir/"}, {url: instagram, label:"instagram" , href: "https://www.instagram.com/fekiraymen/"}, {url: twitter, label:"twitter", href:"https://twitter.com/Aymen7417890659"}]

export const skills = [
    {icon : reactlogo, label: "Html 5",description : "Using Html-5 to build structure of your web-site and Somthing else"},
    
    {icon : html, label: "css 3",description : "Styling your web-site Using using Css and Framwork like tailwind"},
    {icon : css, label: "React js",description : "Developing and maintaining web applications using React.js and other related technologies."}
]


export const footerLinks = [
    {
        title: "Link Github ",
        links: [
            { name: "Nike Project", link: "https://github.com/aymen-fekir-123/NIKE-PROJECT" },
            { name: "Project1", link: "https://github.com/aymen-fekir-123/Project1" },
            { name: "Project 5", link: "https://github.com/aymen-fekir-123/project-react-app" },
            { name: "Project 3D", link: "https://github.com/aymen-fekir-123/3d-Project" },
            { name: "Project 3D Tow", link: "https://github.com/aymen-fekir-123/3d-Project-Tow" },
            { name: "My_Repository", link: "https://github.com/aymen-fekir-123?tab=repositories" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "My_Github", link: "https://github.com/aymen-fekir-123" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "fekiramine29@gmail.com", link: "mailto:fekiramine29@gmail.com" },
            { name: "fekirm73@gmail.com", link: "mailto:fekirm73@gmail.com" },
        ],
    },
];

