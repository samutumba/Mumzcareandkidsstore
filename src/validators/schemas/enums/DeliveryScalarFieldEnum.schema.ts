import * as Yup from 'yup';

export const DeliveryScalarFieldEnumSchema = Yup.mixed().oneOf(["id","v","service","status","updatedAt","createdAt"])