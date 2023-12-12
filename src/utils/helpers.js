src/utils/helpers.js

// Helper function to format a date string
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

// Helper function to truncate a string
export const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + '...';
};

// Helper function to capitalize the first letter of a string
export const capitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Helper function to check if a string is empty
export const isEmptyString = (str) => {
  return str.trim() === '';
};

// Helper function to validate an email address
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Helper function to validate a password
export const isValidPassword = (password) => {
  // Add your password validation logic here
  return password.length >= 8;
};

// Helper function to calculate the average of an array of numbers
export const calculateAverage = (numbers) => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
};

// Helper function to generate a random number within a range
export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Helper function to shuffle an array
export const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
