let variable_01 = Number ( prompt ("Choose the first number:"))
let variable_02 = parseFloat (prompt ("Choose the second number:"))

let sum = variable_01 + variable_02
let sub = variable_01 - variable_02
let mult = variable_01 * variable_02
let div = variable_01 / variable_02
let ave = (variable_01 + variable_02) / 2


document.getElementById ("sentence_01").innerHTML = "Os números digitados foram " + variable_01 + " e " + variable_02
document.getElementById ("sentence_02").innerHTML = "A soma dos números " + variable_01 + " e " + variable_02 + " é " + sum
document.getElementById ("sentence_03").innerHTML = "A subtração dos números " + variable_01 + " e " + variable_02 + " é " + sub
document.getElementById ("sentence_04").innerHTML = "A multiplicação dos números " + variable_01 + " e " + variable_02 + " é " + mult
document.getElementById ("sentence_05").innerHTML = "A divisão dos números " + variable_01 + " e " + variable_02 + " é " + div
document.getElementById ("sentence_06").innerHTML = "A média dos números " + variable_01 + " e " + variable_02 + " é " + ave
