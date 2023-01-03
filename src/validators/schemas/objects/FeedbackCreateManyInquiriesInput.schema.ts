// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const FeedbackCreateManyInquiriesInputObjectSchema = Yup.object({
    id: Yup.string(),  message: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  adminsId: Yup.string().required()
});
