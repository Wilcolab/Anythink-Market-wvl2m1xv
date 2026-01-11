/**
 * Converts a string to camelCase format.
 * 
 * Transforms input strings by splitting on separators (spaces, underscores, hyphens),
 * converting the first word to lowercase, and capitalizing the first letter of
 * subsequent words. Special characters are removed.
 * 
 * @param {string} str - The input string to convert to camelCase
 * @returns {string} The converted camelCase string
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is not a string
 * 
 * @example
 * toCamelCase(" first_name "); // "firstName"
 * toCamelCase("hello-world-test"); // "helloWorldTest"
 * toCamelCase("  multiple   spaces  "); // "multipleSpaces"
 * toCamelCase("MixedCasing"); // "mixedcasing"
 * toCamelCase(""); // ""
 */

/**
 * Converts a string to dot.case format.
 * 
 * Transforms input strings by splitting on separators (spaces, underscores, hyphens),
 * converting all words to lowercase, and joining them with dots. Special characters
 * are removed.
 * 
 * @param {string} str - The input string to convert to dot.case
 * @returns {string} The converted dot.case string
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is not a string
 * 
 * @example
 * toDotCase(" first_name "); // "first.name"
 * toDotCase("hello-world-test"); // "hello.world.test"
 * toDotCase("  multiple   spaces  "); // "multiple.spaces"
 * toDotCase("MixedCasing"); // "mixedcasing"
 * toDotCase(""); // ""
 */
function toCamelCase(str) {
    // Error handling for invalid input
    if (str === null || str === undefined) {
        throw new Error("Input cannot be null or undefined");
    }
    
    if (typeof str !== "string") {
        throw new Error(`Input must be a string, received ${typeof str}`);
    }
    
    // Handle empty string
    if (str.trim().length === 0) {
        return "";
    }
    
    // Trim leading and trailing spaces
    str = str.trim();
    
    // Replace separators (spaces, underscores, hyphens) and special characters
    // Split by separators and filter out empty strings
    const words = str
        .split(/[\s_-]+/)
        .filter(word => word.length > 0);
    
    if (words.length === 0) {
        return "";
    }
    
    // Convert first word to lowercase, rest to capitalize first letter
    return words
        .map((word, index) => {
            // Remove any remaining special characters
            const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
            
            if (cleanWord.length === 0) {
                return "";
            }
            
            if (index === 0) {
                return cleanWord.toLowerCase();
            }
            
            return cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1).toLowerCase();
        })
        .join("");
}

// Test cases
console.log(toCamelCase(" first_name ")); // "firstName"
console.log(toCamelCase("hello-world-test")); // "helloWorldTest"
console.log(toCamelCase("  multiple   spaces  ")); // "multipleSpaces"
console.log(toCamelCase("MixedCasing")); // "mixedcasing"
console.log(toCamelCase("")); // ""

try {
    toCamelCase(123);
} catch (error) {
    console.error(error.message); // "Input must be a string, received number"
}

try {
    toCamelCase(null);
} catch (error) {
    console.error(error.message); // "Input cannot be null or undefined"
}
function toDotCase(str) {
    // Error handling for invalid input
    if (str === null || str === undefined) {
        throw new Error("Input cannot be null or undefined");
    }
    
    if (typeof str !== "string") {
        throw new Error(`Input must be a string, received ${typeof str}`);
    }
    
    // Handle empty string
    if (str.trim().length === 0) {
        return "";
    }
    
    // Trim leading and trailing spaces
    str = str.trim();
    
    // Split by separators and filter out empty strings
    const words = str
        .split(/[\s_-]+/)
        .filter(word => word.length > 0);
    
    if (words.length === 0) {
        return "";
    }
    
    // Convert to lowercase and join with dots
    return words
        .map(word => {
            // Remove any remaining special characters
            const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
            return cleanWord.toLowerCase();
        })
        .filter(word => word.length > 0)
        .join(".");
}

// Test cases
console.log(toDotCase(" first_name ")); // "first.name"
console.log(toDotCase("hello-world-test")); // "hello.world.test"
console.log(toDotCase("  multiple   spaces  ")); // "multiple.spaces"
console.log(toDotCase("MixedCasing")); // "mixedcasing"
console.log(toDotCase("")); // ""
