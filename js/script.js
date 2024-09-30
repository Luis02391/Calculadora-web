function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    const expresion = resultField.value;
    try {
        const result = eval(expresion);
        resultField.value = result;

        storeHistory(`${expresion} = ${result}`)

    } catch (error) {
        resultField.value = 'Error';
    }

    setTimeout(() => {
        clearResult();
    }, 2000);
}

function storeHistory(entry) {
    let history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    history.push(entry);
    localStorage.setItem('calculatorHistory', JSON.stringify(history));
    displayHistory();
}

function displayHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    
    history.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        historyList.appendChild(li);
    });
}

function clearHistory() {
    localStorage.removeItem('calculatorHistory');
    displayHistory();
}

document.addEventListener('DOMContentLoaded', displayHistory);
