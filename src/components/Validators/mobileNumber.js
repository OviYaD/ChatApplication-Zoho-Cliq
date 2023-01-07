import validator from "validator";

export const validateMobileNumber = (number) => {
  const isValidPhoneNumber = validator.isMobilePhone(number);
  return number.length < 10 || number.length > 10 || isValidPhoneNumber;
};
