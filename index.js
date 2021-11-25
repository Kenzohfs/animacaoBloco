let divMain = document.querySelector('main');
let div = document.createElement('div');
let count = 0;

let largura = window.innerWidth;
let altura = window.innerHeight;
console.log(largura);
console.log(altura);

let larguraBloco;
let alturaBloco;

div.className = 'divPequena';

divMain.appendChild(div);

let proporcao = largura / altura

function contador() {
    count++;
    div.style.top = count * proporcao;
    div.style.left = count * proporcao;

    console.log(altura, largura, count);

    if(count == altura - 100) {
        clearInterval(timer);
    }
}

let timer = setInterval(contador, 10);

