// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { FileOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { AdminOrderByRelationAggregateInputObjectSchema } from '../internals';

export const EventOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  files: FileOrderByRelationAggregateInputObjectSchema,  completed: SortOrderSchema,  description: SortOrderSchema,  endDate: SortOrderSchema,  participantsID: SortOrderSchema,  participants: AdminOrderByRelationAggregateInputObjectSchema,  startDate: SortOrderSchema,  title: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema
});
