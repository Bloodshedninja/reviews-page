'use strict';

let userData = [
    {
        id: 0,
        img: "./src/salman.jpg",
        author: "Salman",
        job: "Frontend Developer",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
    {
        id: 1,
        img: "./src/shahrukh.jpg",
        author: "Shah rukh",
        job: "MBA",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
    {
        id: 2,
        img: "./src/akshay.webp",
        author: "Akshay",
        job: "analyst",
        about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
    {
        id: 3,
        img: "/src/aamir.webp",
        author: "Aamir",
        job: "Teacher",
        about: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    }]


const img = document.querySelector(".img");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const about = document.querySelector(".about");

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const random = document.getElementById("random");

let counter = 0;

window.addEventListener("DOMContentLoaded", () => {
    showDetails(counter);
})

prev.addEventListener("click", () => {
    counter--;
    if (counter < 0) {
        counter = userData.length - 1;
    }
    showDetails(counter);
})

next.addEventListener("click", () => {
    counter++;
    if (counter === userData.length) {
        counter = 0;
    }
    showDetails(counter);
})

random.addEventListener("click", () => {
    var rand = Math.floor(Math.random() * userData.length);
    showDetails(rand);
})

function showDetails(count) {
    const item = userData[count];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    about.textContent = item.about;
}
