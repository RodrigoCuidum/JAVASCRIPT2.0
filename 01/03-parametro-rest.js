"strict mode";

const suma = (frase,...num)=> {
    let resultado = 0;
    for (let i = 0; i < num.length; i++) {
        resultado += num [i];
    }
    console.log(`${frase} ${resultado}`);
}

suma("Diablo", 22, 22, 22, 300, 200, 100)