// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { FeedbackOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { UserOrderByWithRelationInputObjectSchema } from '../internals';

export const InquiryOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  category: SortOrderSchema,  contact: SortOrderSchema,  feedback: FeedbackOrderByRelationAggregateInputObjectSchema,  message: SortOrderSchema,  name: SortOrderSchema,  reference: SortOrderSchema,  user: UserOrderByWithRelationInputObjectSchema,  responded: SortOrderSchema,  type: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  usersId: SortOrderSchema
});
