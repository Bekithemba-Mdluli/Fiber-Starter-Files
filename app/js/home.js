// const backdrop = document.getElementById('ccc');
const backdrop = document.querySelector('.header-backdrop')
const nav = document.querySelector('.header-mobile')

const menu = document.querySelector('.menu')
const header = document.querySelector('.header-mobile')
// const backdrop = 

const open = () => {
    console.log("Open")
    header.style.display = "unset";
    backdrop.style.width = "100%"
    backdrop.style.height = "100%"
}

const close = () => {
    // console.log("Close")
    header.style.display = "none";
    backdrop.style.width = "0"
    backdrop.style.height = "0"
}

menu.addEventListener('click', open);
backdrop.addEventListener('click', close);