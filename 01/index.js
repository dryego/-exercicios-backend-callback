const tabuada = (numero, callback) => {
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let busca of numeros) {
        let total = numero * busca;
        //callback(`${numero} X ${busca} = ${total}`)
        callback(numero, busca, total);
    }

}
tabuada(3, (numero, busca, total) => {
    console.log((`${numero} X ${busca} = ${total}`))
});