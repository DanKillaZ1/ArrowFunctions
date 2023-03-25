import { months } from "./months.js";
import { carros } from "./carros.js";

const filteredMonths = months.filter( (months)=>{
    return months.days === 31
})
console.log(filteredMonths)

let toPrint = ''

filteredMonths.forEach(month => {
   toPrint += ', ' + month.month
})

let meses = [30,30,30] //array comum
// reduce = funçao com todos os itens do array e devolve um valor unico
let sumMonthDays = filteredMonths.reduce( (prev, next) => {
    return {days: prev.days + next.days}
})

//Map

let cachorros = [10, 15, 7, 8, 9]

let years = cachorros.map((cachorros =>{
    return cachorro * 7
}))

document.getElementById("main").innerHTML = toPrint.month + '<br> Soma dos dias dos meses selecionados: ' + sumMonthDays.days + '<br> Em 10 anos tem: ' + years + 'dias'