// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const SaleOrderByRelationAggregateInputObjectSchema = Yup.object({
    _count: SortOrderSchema
});
