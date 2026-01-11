function toCamelCase(str) {
    return str
        .split(/[\s_-]+/) // Split by spaces, underscores, or hyphens
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            // Capitalize first letter of all words except the first one
            return index === 0 ? lowerWord : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');
}

// Test cases
console.log(toCamelCase('first name'));      // firstName
console.log(toCamelCase('user_id'));         // userId
console.log(toCamelCase('SCREEN_NAME'));     // screenName
console.log(toCamelCase('mobile-number'));   // mobileNumber