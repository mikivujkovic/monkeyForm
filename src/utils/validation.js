/*
   Validation helper functions
*/

// validate required field
export const validateRequired = (value) => {
  return value;
};

// validate email using regex
export const validateEmail = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

// validate minimu m length
export const validateMinLength = (value, length) => {
  return value.length >= length;
};

// validate maximum length
export const validateMaxLength = (value, length) => {
  return value.length <= length;
};

// validate if only letters are used
export const validateLetters = (value) => {
  return /[a-zA-Z]+/g.test(value);
};

// validate regex pattern
export const validatePattern = (value, pattern) => {
  if (value.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

// validate if two values are equal
export const validateEqual = (value1, value2) => {
  return value1 === value2;
};

// run all validators on a field, if any of them is false, the field is invalid
export const validateMulti = (validators) => {
  return !validators.includes(false);
};
