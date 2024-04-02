
function plus() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = "Result: " + (num1 + num2);
}

function minus() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = "Result: " + (num1 - num2);
}

function plication() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = "Result: " + (num1 * num2);
}

function antiplication() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        document.getElementById('result').innerText = "Деление на ноль!";
    } else {
        document.getElementById('result').innerText = "Result: " + (num1 / num2);
    }
}

function degree() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = "Result: " + Math.pow(num1, num2);
}

function antidegree() {
    let num1 = parseFloat(document.getElementById('num1').value);
    document.getElementById('result').innerText = "Result: " + Math.sqrt(num1);
}
