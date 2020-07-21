let num = [5, 2, 3, 6, 8]
num.push(1) //add valor do () no prox apos o ultimo indice
num.sort() //organizar os valores das chaves em ordem crescrente
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`) //se achando retorna -1
}