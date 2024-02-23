// test/validators.test.js

import { isEmpty, isEmail } from '../src/validators';

// Test cases for isEmpty function
test('isEmpty returns true for empty string', () => {
  expect(isEmpty('')).toBe(true);
});

test('isEmpty returns false for non-empty string', () => {
  expect(isEmpty('Hello')).toBe(false);
});

// Test cases for isEmail function
test('isEmail returns true for valid email', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('isEmail returns false for invalid email', () => {
  expect(isEmail('test@example')).toBe(false);
});
