// Function to clear the calculator display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to append values to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression in the display
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500); // Clear display after 1.5 seconds
    }
}
