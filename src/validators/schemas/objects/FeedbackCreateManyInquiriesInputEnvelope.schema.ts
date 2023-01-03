// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackCreateManyInquiriesInputObjectSchema } from '../internals';

export const FeedbackCreateManyInquiriesInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(FeedbackCreateManyInquiriesInputObjectSchema)
});
