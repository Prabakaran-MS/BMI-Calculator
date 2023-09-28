function calculateBMI() {

    const result = document.getElementById('result');
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;


    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const bmi = weight / (height * height);
        const category = getBMICategory(bmi);

        result.textContent = `Your BMI: ${bmi.toFixed(2)} (${category})`;
    } else {
        result.textContent = "Please enter valid weight and height.";
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 24.9) {
        return "Normal Weight";
    } else if (bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}