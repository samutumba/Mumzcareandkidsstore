// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const LocationCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  address: SortOrderSchema,  email: SortOrderSchema,  isStore: SortOrderSchema,  maps: SortOrderSchema,  name: SortOrderSchema,  phone: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema
});
