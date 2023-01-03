// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackCreateManyAdminInputObjectSchema } from '../internals';

export const FeedbackCreateManyAdminInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(FeedbackCreateManyAdminInputObjectSchema)
});
