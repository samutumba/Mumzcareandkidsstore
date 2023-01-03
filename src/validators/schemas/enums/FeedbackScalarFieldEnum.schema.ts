import * as Yup from 'yup';

export const FeedbackScalarFieldEnumSchema = Yup.mixed().oneOf(["id","message","updatedAt","createdAt","inquiriesId","adminsId"])