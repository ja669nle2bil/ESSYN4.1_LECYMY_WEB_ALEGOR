console.log('Hello world!');

function ishappynumber(n) {
    // Initialize seen values set
    const seen = new Set();

    // Recursive helper function
    function _isHappy(number) {
        if (number === 1) {
            return true;
        }

        if (seen.has(number)) {
            return false;
        }

        seen.add(number);

        // Calculate sum of squares of digits
        const sqDigits = Math.floor(number % 10) ** 2 + Math.floor(number / 10) ** 2;

        // Recursively check if sqDigits is happy
        return _isHappy(sqDigits);
    }

    // Call the recursive function with the input number
    return _isHappy(n);
}
console.log(ishappynumber(1)); // Output: true
console.log(ishappynumber(44)); // Output: true
console.log(ishappynumber(15)); // Output: false