document.getElementById('calculateBtn').addEventListener('click', function() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100; // Convert cm to meters
    const bmi = (weight / (height * height)).toFixed(1);
    document.getElementById('result').innerText = bmi;

    let resultText = 'Anda memiliki berat badan ';
    if (bmi < 18.5) {
        resultText += 'kurang';
    } else if (bmi < 24.9) {
        resultText += 'normal';
    } else if (bmi < 29.9) {
        resultText += 'berlebih';
    } else {
        resultText += 'obesitas';
    }
    document.getElementById('result').innerText = bmi + ' - ' + resultText;
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('weight').value = '';
    document.getElementById('age').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').innerText = '-';
});
