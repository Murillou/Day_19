function cont(){
    let conta = 0
        function contador(){
            conta ++
            return conta
        }
    return contador
}
const resultado = cont()
console.log(resultado())
console.log(resultado())
console.log(resultado())
console.log(resultado())