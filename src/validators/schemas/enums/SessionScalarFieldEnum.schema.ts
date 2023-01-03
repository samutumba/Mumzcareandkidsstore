import * as Yup from 'yup';

export const SessionScalarFieldEnumSchema = Yup.mixed().oneOf(["id","expires","session"])