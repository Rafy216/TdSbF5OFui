const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const my_name = document.getElementById("my_name");
const date = document.getElementById("date");
const anim_bgs = document.querySelectorAll(".animated-bg");
const anim_bg_texts = document.querySelectorAll(".animated-bg-text");
// const dtnow = new Date();
// let currentDate = `${dtnow.getDate()}-${dtnow.getMonth()+1}-${dtnow.getFullYear()}`

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="https://images.jpost.com/image/upload/c_fill,g_faces:center,h_537,w_822/549998" alt="Black Hole" />';
    title.innerHTML = 'Supermassive Black Hole';
    excerpt.innerHTML = 'Supermassive black holes sit at the center of many galaxies and are often surrounded by accretion disks that they feed on.';
    profile_img.innerHTML = '<img src="images/fgo-gil.jpg" alt="Profile Image" />';
    my_name.innerHTML = 'Rafianto';
    date.innerHTML = '9 Nov 2023';
    anim_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    anim_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}