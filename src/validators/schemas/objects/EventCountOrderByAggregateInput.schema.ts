// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const EventCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  completed: SortOrderSchema,  description: SortOrderSchema,  endDate: SortOrderSchema,  participantsID: SortOrderSchema,  startDate: SortOrderSchema,  title: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema
});
