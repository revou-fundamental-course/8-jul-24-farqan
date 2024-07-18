document.getElementById('calculateBtn').addEventListener('click', function() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100; // Convert cm to meters
    const bmi = (weight / (height * height)).toFixed(1);
    document.getElementById('result').innerText = bmi;

    let resultText = 'Anda memiliki berat badan ';
    let adviceText = '';
    if (bmi < 18.5) {
        resultText += 'kurang';
        adviceText = 'Anda berada dalam kategori underweight. Disarankan untuk menambah asupan makanan bergizi dan konsultasikan dengan dokter atau ahli gizi.';
    } else if (bmi < 24.9) {
        resultText += 'normal';
        adviceText = 'Anda berada dalam kategori berat badan ideal. Pertahankan pola makan dan gaya hidup sehat Anda.';
    } else if (bmi < 29.9) {
        resultText += 'berlebih';
        adviceText = 'Anda berada dalam kategori overweight. Disarankan untuk mengatur pola makan dan meningkatkan aktivitas fisik.';
    } else {
        resultText += 'obesitas';
        adviceText = 'Anda berada dalam kategori obesitas. Disarankan untuk segera berkonsultasi dengan dokter atau ahli gizi untuk mendapatkan penanganan yang tepat.';
    }
    document.getElementById('result').innerText = bmi + ' - ' + resultText;
    document.getElementById('advice').innerText = adviceText;
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('weight').value = '';
    document.getElementById('age').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').innerText = '-';
    document.getElementById('advice').innerText = '';
});
