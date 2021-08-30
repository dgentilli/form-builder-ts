export enum Field {
  Email = 'email',
  Password = 'password',
  FirstName = 'first name',
  LastName = 'last name',
}

export interface BasicFormProps {
  fields: Field[];
  requiredFields?: Field[];
}
