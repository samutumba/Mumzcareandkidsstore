// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { AdminOrderByWithRelationInputObjectSchema } from '../internals';;
import { InquiryOrderByWithRelationInputObjectSchema } from '../internals';

export const FeedbackOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  admin: AdminOrderByWithRelationInputObjectSchema,  message: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  inquiries: InquiryOrderByWithRelationInputObjectSchema,  inquiriesId: SortOrderSchema,  adminsId: SortOrderSchema
});
