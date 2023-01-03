// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { FileOrderByWithRelationInputObjectSchema } from '../internals';;
import { FeedbackOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { EventOrderByRelationAggregateInputObjectSchema } from '../internals';

export const AdminOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  createdAt: SortOrderSchema,  email: SortOrderSchema,  employed: SortOrderSchema,  name: SortOrderSchema,  password: SortOrderSchema,  phone: SortOrderSchema,  profile: FileOrderByWithRelationInputObjectSchema,  role: SortOrderSchema,  updatedAt: SortOrderSchema,  filesId: SortOrderSchema,  feedbacks: FeedbackOrderByRelationAggregateInputObjectSchema,  events: EventOrderByRelationAggregateInputObjectSchema,  eventsId: SortOrderSchema
});
