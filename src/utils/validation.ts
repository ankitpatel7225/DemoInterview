import React from 'react';

const stringValidation = string => {
  let validate;
  // regex for string
  let stringValidation = /^[a-zA-Z0-9]+$/;
  for (let i = 0; i < string.length; i++) {
    if (stringValidation.test(string.charAt(i))) {
      validate = true;
      break;
    } else {
      validate = false;
    }
  }
  return validate;
};

const passwordValidation = string => {
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(string);
};

const emailValidation = string => {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return emailRegex.test(string);
};

export {stringValidation, passwordValidation, emailValidation};
