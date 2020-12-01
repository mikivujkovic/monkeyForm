export const validateRequired = (value) => {
  return value;
};

export const validateEmail = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

export const validateMinLength = (value, length) => {
  return value.length >= length;
};

export const validateMaxLength = (value, length) => {
  return value.length <= length;
};

export const validateLetters = (value) => {
  return /[a-zA-Z]+/g.test(value);
};

export const validatePattern = (value, pattern) => {
  if (value.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

export const validateEqual = (value1, value2) => {
  return value1 === value2;
};

export const validateMulti = (validators) => {
  return !validators.includes(false);
};
