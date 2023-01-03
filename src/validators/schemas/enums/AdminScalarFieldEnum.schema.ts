import * as Yup from 'yup';

export const AdminScalarFieldEnumSchema = Yup.mixed().oneOf(["id","v","createdAt","email","employed","name","password","phone","role","updatedAt","filesId","eventsId"])