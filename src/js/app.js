let meny = document.querySelector('.meny');
let menylink = document.querySelector('.burger-meny');
let textarea = document.getElementById('textform');
let input = document.querySelectorAll('input');

menylink.addEventListener(
        'click',
        ()=>{
            meny.classList.toggle('burger-meny-active');
        }
    );

textarea.value = localStorage.getItem('text');
textarea.addEventListener(
    'change',
    function () {
        localStorage.setItem('text', textarea.value)
    }
);

inputArray = Array.from(input);

inputArray[0].value = localStorage.getItem('input');
inputArray[0].addEventListener(
    'change',
    function () {
        localStorage.setItem('input', inputArray[0].value)
    }
);


inputArray[1].value = localStorage.getItem('input1');
inputArray[1].addEventListener(
    'change',
    function () {
        localStorage.setItem('input1', inputArray[1].value)
    }
);


