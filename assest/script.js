

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) { 
        const img=document.querySelector('#main-img');
        img.setAttribute('src', 'img/mobile-main.png');
        
    }
});

