let meny = document.querySelector('.meny');
let menylink = document.querySelector('.burger-meny');
menylink.addEventListener(
        'click',
        ()=>{
            meny.classList.toggle('burger-meny-active');
        }
    );
