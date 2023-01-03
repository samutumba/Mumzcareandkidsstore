// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DetailValueOrderByCompositeAggregateInputObjectSchema } from '../internals';

export const DetailOrderByInputObjectSchema = Yup.object({
    color: DetailValueOrderByCompositeAggregateInputObjectSchema,  material: DetailValueOrderByCompositeAggregateInputObjectSchema,  model: DetailValueOrderByCompositeAggregateInputObjectSchema,  size: DetailValueOrderByCompositeAggregateInputObjectSchema
});
