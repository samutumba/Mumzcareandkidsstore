// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const EventSumOrderByAggregateInputObjectSchema = Yup.object({
    v: SortOrderSchema
});
