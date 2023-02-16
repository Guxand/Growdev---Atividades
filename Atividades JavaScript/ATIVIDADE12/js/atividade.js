const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
salario: 3350.25,
},
];
//1
console.log(`Quantidade de pessoas: ${data.length}`);

//2
console.log(`${data.filter(pessoa => pessoa.sexo === 'F').length}`);

//3
let soma = 0
data.forEach(function (funcionario)  {
  soma += funcionario.salario
})

console.log(`A soma de todos os salários é: ${soma}`)

//4
console.log(`A media do salario de todos os funcionarios é de: ${(soma / (data.length)).toFixed(2)} `);

//5
let somaSalarioMasculino = 0;

data.forEach(function(elemento){
    if(elemento.sexo == 'M'){
        somaSalarioMasculino += elemento.salario;
    
    }
})
console.log(` O resultado da soma de todos os salários masculinos é R$: ${somaSalarioMasculino} `);

//6
// let funcMasc = 
// data.forEach(function(pessoa){
//     if(pessoa.sexo === 'M'){
//         funcMasc++
//     }
// })

//console.log(`A media do salário de todos os funcionários do sexo masculino é ${(somaSalarioMasculino/funcMasc).toFixed(2)}`)


const funcMasc = data.filter(function(pessoa){
    return pessoa.sexo === 'M'
})
console.log(funcMasc)


console.log(`A media do salário de todos os funcionários do sexo masculino é ${(somaSalarioMasculino/funcMasc.length).toFixed(2)}`)

//7
const salarioSuperior = data.some(function(pessoa){
    return pessoa.salario > 7000
})
console.log(salarioSuperior);

//8
const posicaoEvaTrindade = data.findIndex(function (acharEva) {
    return acharEva.nome === 'Eva Trindade'
})

console.log(`A posição de Eva é ${posicaoEvaTrindade}`);

//9
const pessoasSilva = data.filter(function (pessoa){
    return pessoa.nome.includes('Silva')
})
console.log(pessoaSilva)

//10

console.log(data.map(function(pessoa){
    return pessoa.nome
}));