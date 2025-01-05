document.querySelector('.nav-bar').addEventListener('click', ()=>{
    document.querySelector('.side-nav').classList.toggle('active');
    document.querySelector('.close-bar').classList.toggle('active');
    document.querySelector('.open-bar').classList.toggle('active');
    document.querySelector('main').classList.toggle('active');
    // document.querySelector('.footer').classList.toggle('index');
});
document.querySelector('#nav-shop').addEventListener('mouseenter', ()=>{
    document.querySelector('.shop-nav').style.display="block";
})
document.querySelector('#nav-shop').addEventListener('mouseleave', ()=>{
    document.querySelector('.shop-nav').style.display="none";
})
document.querySelector('.shop-nav').addEventListener('mouseenter', ()=>{
    document.querySelector('.shop-nav').style.display="block";
})
document.querySelector('.shop-nav').addEventListener('mouseleave', ()=>{
    document.querySelector('.shop-nav').style.display="none";
})


document.querySelector('.nav-icon').addEventListener('click', ()=>{
    document.querySelector('.cart-container').classList.add('active');
    document.querySelector('main').classList.add('blur');
    document.querySelector('nav').classList.add('blur');
    document.querySelector('header').classList.add('blur');
    document.querySelector('footer').classList.add('blur');
})
document.querySelector('.cart-close').addEventListener('click',()=>{
    document.querySelector('.cart-container').classList.remove('active');
    document.querySelector('main').classList.remove('blur');
    document.querySelector('nav').classList.remove('blur');
    document.querySelector('header').classList.remove('blur');
    document.querySelector('footer').classList.remove('blur');
})
document.addEventListener('click',(e)=>{
    let cart=document.querySelector('.cart-container');
    let icon=document.querySelector('.nav-icon');
    if(!cart.contains(e.target) && !icon.contains(e.target)){
        document.querySelector('.cart-container').classList.remove('active');
        document.querySelector('nav').classList.remove('blur');
        document.querySelector('main').classList.remove('blur');
        document.querySelector('header').classList.remove('blur');
        document.querySelector('footer').classList.remove('blur');
    }
})
document.querySelector('.header-close').addEventListener('click', ()=>{
    document.querySelector('header').style.display = 'none';
    document.querySelector('nav').style.margin = "0 0 0 0";
    document.querySelector('main').style.top='100px';
});