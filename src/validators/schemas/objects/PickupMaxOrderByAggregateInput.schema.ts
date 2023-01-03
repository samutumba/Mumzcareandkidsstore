// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const PickupMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  service: SortOrderSchema,  status: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  contact: SortOrderSchema,  note: SortOrderSchema,  locationsId: SortOrderSchema,  usersId: SortOrderSchema
});
