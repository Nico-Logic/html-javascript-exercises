let variable_01 = parseFloat ( prompt ("Choose the first number:"))
let variable_02 = parseFloat (prompt ("Choose the second number:"))
let variable_03 = parseFloat (prompt ("Choose the third number:"))
let variable_04 = parseFloat (prompt ("Choose the fourth number:"))
let variable_05 = parseFloat (prompt ("Choose the fith number:"))

let sum_01 = variable_01 + variable_02 + variable_03 + variable_04 + variable_05

document.getElementById ("sentence").innerHTML = "Os números digitados foram " + variable_01 + ", " + variable_02 + ", " +variable_03 + ", " +variable_04 +   ", " +variable_05 + " e sua soma é " + sum_01
