// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const AdminCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  createdAt: SortOrderSchema,  email: SortOrderSchema,  employed: SortOrderSchema,  name: SortOrderSchema,  password: SortOrderSchema,  phone: SortOrderSchema,  role: SortOrderSchema,  updatedAt: SortOrderSchema,  filesId: SortOrderSchema,  eventsId: SortOrderSchema
});
