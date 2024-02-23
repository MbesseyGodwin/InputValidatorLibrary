// src/sanitizer.js

// Function to escape HTML characters
export function escapeHtml(input) {
    return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  