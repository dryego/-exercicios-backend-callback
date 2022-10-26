const tabuada = (numero, callback) => {
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let fator1 of numero) {
        for (let fator2 of numeros) {
            let total = fator1 * fator2;
            //callback(`${numero} X ${fator2} = ${total}`)
            callback(fator1, fator2, total);
        }
        console.log("\n-----------")
    }

}
tabuada([1, 2, 3], (fator1, fator2, total) => {
    console.log((`${fator1} X ${fator2} = ${total}`))
});