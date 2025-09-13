let variable_01 = parseFloat ( prompt ("Quantidade de amigos convidados:"))


let presentes = variable_01 * 2

document.getElementById ("sentence_01").innerHTML = "Quantidade de convidados: " + variable_01 
document.getElementById ("sentence_02").innerHTML = "Quantidade total de presentes: " + presentes

console.log ("Quantidade de convidados: " + variable_01) 

console.log ("Quantidade total de presentes:" + presentes)
