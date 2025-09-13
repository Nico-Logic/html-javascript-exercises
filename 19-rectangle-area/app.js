let variable_01 = parseFloat ( prompt ("Escolher primeira dimensão do rentângulo:"))
let variable_02 = parseFloat ( prompt ("Escolher segunda dimensão do rentângulo:"))

let area = variable_01 * variable_02
let perimetro = (variable_01 * 2) + (variable_02 * 2) 

document.getElementById ("sentence_01").innerHTML = "Dimensões do retângulo: " + variable_01 + " e " + variable_02
document.getElementById ("sentence_02").innerHTML = "Área do retângulo: " + area
document.getElementById ("sentence_03").innerHTML = "Perímetro do retângulo: " + perimetro

console.log ("Área do retângulo: " + area) 

console.log ("Perímetro do retângulo: " + perimetro)
