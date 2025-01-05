document.querySelector('.filter-top-time').addEventListener('click', ()=>{
    document.querySelector('.time-menha').classList.toggle('active');
    document.querySelector('.time-jam').classList.toggle('active');
    document.querySelector('.time-menu').classList.toggle('active');
})
document.querySelector('.filter-top-gear').addEventListener('click', ()=>{
    document.querySelector('.gear-menha').classList.toggle('active');
    document.querySelector('.gear-jam').classList.toggle('active');
    document.querySelector('.gear-menu').classList.toggle('active');
})