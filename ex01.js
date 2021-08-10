// Para isso, crie um script que permita adicionar uma sequência de números (um array de números) consecutivamente para receber as notas dos 4 bimestres.
// Após isso, crie uma estrutura na qual todos os números do array sejam somados sequencialmente: o primeiro número seja somado ao segundo e o resultado seja impresso no console.
// Então, temos que pegar esse resultado e adicionar o terceiro número a ele, e assim por diante, até terminarmos de percorrer o array.

//array de notas por bimestre
//let notas = [1,6,7,9]
let notas = [7,8,9,7]
// variavel acumuladora
let soma = 0

console.log("Fazendo cálculo da média final do(a) aluno(a):")
// metodo de array para fazer as somas das medias
notas.forEach(nota => {
    console.log(`${soma}+ ${nota} =`)
    soma += nota
    console.log(soma)
})
// calculo da media final
let media = soma/notas.length
console.log(`A média final do aluno é de ${media}`)
// condicional de aprovação
if (media >=7){
    console.log("Parabéns, você foi aprovado(a).")
}else console.log("Infelizmente, você foi reprovado(a).")





// OUTRA FORMA DE FAZER!!
//let media = (notas.reduce((sum,n)=> sum+=n))/notas.length

//console.log(media)

// let sum = 0
// for (let i=0; i<notas.length; i++) {
//     console.log(`${sum} + ${notas[i]} =`)
//     sum+= notas[i]
//     console.log(sum)
// }

// let media = sum/notas.length
// console.log(`A média final do aluno é de ${media}`)




