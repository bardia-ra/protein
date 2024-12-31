document.querySelector('.header-close').addEventListener('click', ()=>{
    document.querySelector('header').style.display = 'none';
    document.querySelector('nav').style.margin = "0 0 0 0";
    document.querySelector('main').style.top='100px';
});

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) { 
        const img=document.querySelector('#main-img');
        img.setAttribute('src', 'img/mobile-main.png');
        
    }
});

document.querySelector('.nav-bar').addEventListener('click', ()=>{
    document.querySelector('.side-nav').classList.toggle('active');
    document.querySelector('.close-bar').classList.toggle('active');
    document.querySelector('.open-bar').classList.toggle('active');
    document.querySelector('main').classList.toggle('active');
});