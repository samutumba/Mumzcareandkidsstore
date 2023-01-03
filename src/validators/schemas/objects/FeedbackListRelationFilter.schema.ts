// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackWhereInputObjectSchema } from '../internals';

export const FeedbackListRelationFilterObjectSchema = Yup.object({
    every: FeedbackWhereInputObjectSchema,  some: FeedbackWhereInputObjectSchema,  none: FeedbackWhereInputObjectSchema
});
