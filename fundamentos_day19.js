// Closure ou Fecho

/* No JavaScript podemos por várias funções dentro da outra 
caso a função interna acesse a variável da função externa é chamado de fechamento/fecho*/

function contaFunction(){
    let conta = 0
        function contador(){ // exemplo de fecho
            conta ++
            return conta
        }
    return contador
}
const func = contaFunction()
console.log(func())
console.log(func())
console.log(func())
