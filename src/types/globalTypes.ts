export enum Field {
  Email = 'email',
  Password = 'password',
  ConfirmPassword = 'confirm password',
  FirstName = 'first name',
  LastName = 'last name',
}

export interface BasicFormProps {
  fields: Field[];
  validations?: Field[];
  requiredFields?: Field[];
}
