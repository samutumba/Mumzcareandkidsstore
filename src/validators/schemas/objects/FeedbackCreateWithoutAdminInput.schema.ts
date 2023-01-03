// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InquiryCreateNestedOneWithoutFeedbackInputObjectSchema } from '../internals';

export const FeedbackCreateWithoutAdminInputObjectSchema = Yup.object({
    id: Yup.string(),  message: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  inquiries: InquiryCreateNestedOneWithoutFeedbackInputObjectSchema
});
