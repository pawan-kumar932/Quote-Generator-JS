
const parent = document.getElementById('parent');
const about = document.querySelector('h2');
const body = document.querySelector('body');
parent.addEventListener('click',(e)=>{
    const btn = e.target;
    console.log(btn);
    body.style.backgroundColor = btn.id;
    about.style.color = btn.id;

    

})