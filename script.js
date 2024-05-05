let inputbox = document.querySelector('input');
inputbox.value = '';

let del = document.querySelector('#del');

function delchar(){
    deltext = inputbox.value.slice(0,inputbox.value.length-1);
    inputbox.value = deltext;
};

del.addEventListener('click',delchar);

let reset = document.querySelector('#reset');

reset.addEventListener('click',() => {
    inputbox.value = '';
});

let button = document.querySelectorAll('button');

button.forEach((btn) => {
    btn.addEventListener('click',res = () =>{
        inputbox.value += btn.value;
        result = Math.round(eval(inputbox.value)/0.01)*0.01;
        return result;
    });
});

let equals = document.querySelector('#equals');

equals.addEventListener('click',() => {
    newres = res()
    inputbox.value = newres;
});
