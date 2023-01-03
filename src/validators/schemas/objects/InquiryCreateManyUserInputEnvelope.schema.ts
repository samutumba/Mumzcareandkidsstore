// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InquiryCreateManyUserInputObjectSchema } from '../internals';

export const InquiryCreateManyUserInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(InquiryCreateManyUserInputObjectSchema)
});
