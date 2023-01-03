// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const InquiryMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  category: SortOrderSchema,  contact: SortOrderSchema,  message: SortOrderSchema,  name: SortOrderSchema,  reference: SortOrderSchema,  responded: SortOrderSchema,  type: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  usersId: SortOrderSchema
});
