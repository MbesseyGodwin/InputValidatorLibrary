// src/validators.js

// Function to check if a value is empty
export function isEmpty(value) {
    return value.trim() === '';
  }
  
  // Function to validate an email address
  export function isEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }
  