import validator from "validator";

export const validateMobileNumber = (number) => {
  const isValidPhoneNumber = validator.isMobilePhone(number);
  console.log(
    number,
    number.length < 10 || number.length > 10 || isValidPhoneNumber
  );
  return true;
  // return number.length < 10 || number.length > 10 || isValidPhoneNumber;
};
