// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackUncheckedCreateNestedManyWithoutInquiriesInputObjectSchema } from '../internals';

export const InquiryUncheckedCreateWithoutUserInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  category: Yup.string().required(),  contact: Yup.string().required(),  feedback: FeedbackUncheckedCreateNestedManyWithoutInquiriesInputObjectSchema,  message: Yup.string().required(),  name: Yup.string().required(),  reference: Yup.string().required(),  responded: Yup.boolean(),  type: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date()
});
