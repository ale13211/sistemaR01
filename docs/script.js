// Definimos las tasas de conversión
const conversionRates = {
    USD: 0.15,  // 1 unidad local a Dólar
    EUR: 0.14,  // 1 unidad local a Euro
};

// Inicializamos la moneda por defecto a Dólar
let selectedCurrency = 'USD';

// Función para cambiar la moneda seleccionada
document.getElementById('usd-btn').addEventListener('click', () => {
    selectedCurrency = 'USD';
    updateConversion();
});

document.getElementById('eur-btn').addEventListener('click', () => {
    selectedCurrency = 'EUR';
    updateConversion();
});

// Actualizar la conversión según el monto ingresado
function updateConversion() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('converted-amount').textContent = "0";
        document.getElementById('currency-name').textContent = selectedCurrency === 'USD' ? 'Dólar' : 'Euro';
        return;
    }
    
    const convertedAmount = (amount * conversionRates[selectedCurrency]).toFixed(2);
    document.getElementById('converted-amount').textContent = convertedAmount;
    document.getElementById('currency-name').textContent = selectedCurrency === 'USD' ? 'Dólar' : 'Euro';
}

// Función para limpiar los campos
function resetCalculator() {
    document.getElementById('amount').value = '';
    document.getElementById('converted-amount').textContent = '0';
    document.getElementById('currency-name').textContent = 'Dólar';
    selectedCurrency = 'USD';
}
