let variable_01 = parseFloat ( prompt ("Escolher o valor do lado do quadrado:"))

let area = variable_01 * variable_01
let perimetro = variable_01 * 4 

document.getElementById ("sentence_01").innerHTML = "Lado do quadrado: " + variable_01
document.getElementById ("sentence_02").innerHTML = "Área do quadrado: " + area
document.getElementById ("sentence_03").innerHTML = "Perímetro do quadrado: " + perimetro

console.log ("Área do quadrado: " + area)
console.log ("Perímetro do quadrado: " + perimetro)
