// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ReviewWhereInputObjectSchema } from '../internals';

export const ReviewListRelationFilterObjectSchema = Yup.object({
    every: ReviewWhereInputObjectSchema,  some: ReviewWhereInputObjectSchema,  none: ReviewWhereInputObjectSchema
});
