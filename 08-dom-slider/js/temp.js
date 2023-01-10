const myInput = document.querySelector('#in');
const mybody = document.querySelector('body');
const btn = document.querySelector('#btn');

const fillSpan = () => {
    myInput.value = 'To jest naprawde super dlugi tekst';
    console.log('dsfsfds');
}

btn.addEventListener('click', fillSpan);
mybody.addEventListener('load', fillSpan);