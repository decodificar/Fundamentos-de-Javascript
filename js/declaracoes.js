//controles de fluxo

let x = 11;
if (x > 10) {
    console.log('x é maior que dez, corram para as colinas');
}

// else

let x = 9

if (x > 10) {
    console.log('x é maior do que dez, corram para as colinas');
} else {
    console.log('está tudo bem, podem ficar tranquilos.')
}

//switch

let tinta = 'azul';
switch (tinta){
    case 'azul':
        console.log('irei pintar o carro de azul');
        break;
    case 'amarela':
        console.log('vou pintar a casa de amarelo');
        break;
    case 'verde':
        console.log('vou pintar o chão da garagem de verde');
        break;
    default:
        console.log('Não vou pintar nada');
        break;
}

let tinta = 'azul';

if (tinta === 'azul') {
    console.log('Irei pintar o carro de azul');
} else if(tinta === 'amarela') {
    console.log('vou pintar a casa de amarelo');
} else if (tinta === 'verde') {
    console.log('vou pintar o chão da garagem de verde');
} else {
    console.log('Não vou pintar nada');
}

//laços de repetição

//for

for (let i = 0; i<=10; i++) {

}

//for in

let arr = [1, 2, 3];
for(let n in arr) {
    console.log(n);
}

//foreach
/*Utilizamos o foreach quando queremos percorrer as propriedades de um objeto 
ou os itens de um array, sem precisamos nos preocupar em contar quantos são.*/


let arr = [1, 2, 3];
arr.forEach(function(each){
    console.log(each);
});