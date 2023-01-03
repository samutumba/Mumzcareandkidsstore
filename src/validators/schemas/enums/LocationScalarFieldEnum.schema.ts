import * as Yup from 'yup';

export const LocationScalarFieldEnumSchema = Yup.mixed().oneOf(["id","v","address","email","isStore","maps","name","phone","updatedAt","createdAt"])