import * as Yup from 'yup';

export const EventScalarFieldEnumSchema = Yup.mixed().oneOf(["id","v","completed","description","endDate","participantsID","startDate","title","updatedAt","createdAt"])