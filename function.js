function calculateTax(amount) {
  return amount * 0.1;
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}

function isPalindrome(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr === lowerStr.split('').reverse().join('');
}

function calculateDiscountedPrice(originalPrice, discountPercent) {
  return originalPrice - (originalPrice * discountPercent / 100);
}