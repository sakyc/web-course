import type { cardKelas } from "./course_type";
import type { button } from "./course_type";
const CardKelas_model: cardKelas[] = [
    {
        img: "/img/kelas/kelas-1.jpg",
        start: ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star-half-stroke"],
        title: "Character Illustration with Adobe Illustrator",
        price: 300000
    },
    {
        img: "/img/kelas/kelas-2.jpg",
        start: ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"],
        title: "UI UX Website Design for Beginner with Figma",
        price: 250000
    },
    {
        img: "/img/kelas/kelas-3.jpg",
        start: ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"],
        title: "Mastering Web Developer Bootstrap 5",
        price: 275000
    },
    {
        img: "/img/kelas/kelas-4.jpg",
        start: ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star-half"],
        title: "Mastering Logo with Adobe Illustrator",
        price: 320000
    },
    {
        img: "/img/kelas/kelas-5.jpg",
        start: ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"],
        title: "3D Modelling for Beginner with 3D Blender",
        price: 280000
    },
    {
        img: "/img/kelas/kelas-6.jpg",
        start: ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"],
        title: "Advanced Digital Painting Techniques",
        price: 350000
    },
    
];

const Navbar_model: button[] = [
    {
        name:"Home",
        link:"/"
    },
    {
        name:"Kelas",
        link:"/kelas"
    },
    {
        name:"Testimonial",
        link:"/testimoni"
    },
    {
        name:"FAQ",
        link:"/faq"
    },
    {
        name:"Syarat & Ketentuan",
        link:"/ketentuan"
    }
]

export {CardKelas_model, Navbar_model}