// test/sanitizer.test.js

import { escapeHtml } from '../src/sanitizer';

// Test case for escapeHtml function
test('escapeHtml escapes HTML characters', () => {
  expect(escapeHtml('<script>alert("XSS");</script>')).toBe('&lt;script&gt;alert("XSS");&lt;/script&gt;');
});
