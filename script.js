// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sizes = {
      small: { size: 3, quantity: 5 },
      medium: { size: 5, quantity: 5 },
      large: { size: 7, quantity: 5 }
    };
    
    let sugarAmount = 20;
    let coffeeAmount = 50;
  
    const dispenseButton = document.getElementById('dispense');
    const messageDiv = document.getElementById('message');
  
    dispenseButton.addEventListener('click', () => {
      const sizeSelect = document.getElementById('size').value;
      const sugarInput = parseInt(document.getElementById('sugar').value);
  
      if (sizes[sizeSelect].quantity <= 0) {
        messageDiv.textContent = "No hay Vasos";
      } else if (coffeeAmount < sizes[sizeSelect].size) {
        messageDiv.textContent = "No hay Cafe";
      } else if (sugarAmount < sugarInput) {
        messageDiv.textContent = "No hay Azucar";
      } else {
        sizes[sizeSelect].quantity -= 1;
        coffeeAmount -= sizes[sizeSelect].size;
        sugarAmount -= sugarInput;
        messageDiv.textContent = "Disfruta tu café";
      }
    });
  });
  