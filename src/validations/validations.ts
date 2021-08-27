import { Field } from '../types/globalTypes';
const validator = require('validator');
const isEmpty = require('is-empty');

interface FormData {
  email?: string;
  password?: string;
}

export function validateFormInput(
  data: FormData | null,
  requiredFields: Field[] | undefined
) {
  let messages: string[] = [];

  /**The validator library only works on strings.
   * Documentation here: https://www.npmjs.com/package/validator
   *
   * So we need to Convert empty fields to a string for validator functions to work
   */

  if (data && Object.keys(data).length > 0) {
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    //Email validation
    if (requiredFields?.includes(Field.Email)) {
      if (validator.isEmpty(data.email)) {
        messages.push('Email field is required');
      } else if (!validator.isEmail(data.email)) {
        messages.push('Invalid email format');
      }
    } else if (
      validator.isEmpty(data.email) ||
      !validator.isEmail(data.email)
    ) {
      messages.push('Invalid email format');
    }

    //Password Validation
    if (
      requiredFields?.includes(Field.Password) &&
      validator.isEmpty(data.password)
    ) {
      messages.push('Password field is required');
    } else if (
      requiredFields?.includes(Field.Password) &&
      !validator.isLength(data.password, { min: 8, max: 20 })
    ) {
      messages.push('Password must be between 8 and 20 characters');
    }
  }

  return {
    messages,
    isValid: isEmpty(messages),
  };
}
