// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminCreateNestedOneWithoutFeedbacksInputObjectSchema } from '../internals';;
import { InquiryCreateNestedOneWithoutFeedbackInputObjectSchema } from '../internals';

export const FeedbackCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  admin: AdminCreateNestedOneWithoutFeedbacksInputObjectSchema,  message: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  inquiries: InquiryCreateNestedOneWithoutFeedbackInputObjectSchema
});
