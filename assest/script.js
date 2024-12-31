document.querySelector('.header-close').addEventListener('click', ()=>{
    document.querySelector('header').style.display = 'none';
    document.querySelector('nav').style.margin = "0 0 0 0";
    document.querySelector('main').style.top='100px';
});