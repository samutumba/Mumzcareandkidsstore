// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const LocationMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  address: SortOrderSchema,  isStore: SortOrderSchema,  maps: SortOrderSchema,  name: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema
});
