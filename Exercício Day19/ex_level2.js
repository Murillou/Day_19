function cont(){
    let conta = 0
        function contadorSoma(){
            conta ++
            return conta
        }
        function contadorSub(){
            conta --
            return conta
        }
        function contadorMult(){
            conta * conta
            return conta
        }
            return{
                soma:contadorSoma(),
                sub:contadorSub(),
                mult:contadorMult()
            }
}
const resultado = cont()
console.log(resultado.soma)
console.log(resultado.sub)
console.log(resultado.mult)