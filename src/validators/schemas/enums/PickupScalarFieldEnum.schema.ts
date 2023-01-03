import * as Yup from 'yup';

export const PickupScalarFieldEnumSchema = Yup.mixed().oneOf(["id","v","service","status","updatedAt","createdAt","contact","note","locationsId","usersId"])