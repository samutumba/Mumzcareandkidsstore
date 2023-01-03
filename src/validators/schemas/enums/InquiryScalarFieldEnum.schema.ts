import * as Yup from 'yup';

export const InquiryScalarFieldEnumSchema = Yup.mixed().oneOf(["id","v","category","contact","message","name","reference","responded","type","updatedAt","createdAt","usersId"])