import * as Yup from 'yup';

export const ErrorScalarFieldEnumSchema = Yup.mixed().oneOf(["id","message","content","updatedAt","createdAt"])