let expression='';

function appendNumber (number) {

document.getElementById ('result'). value = expression;
}

function appendOperator (operator){
expression += operator;
document.getElementById('result'). value=expression;
}

function calculate () {
try {
 const result = eval(expression);
 document.getElementById('result').value = result;
 expression = '';
} catch (error) {
document.getElementById('result').value="Error";