// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { InquiryCountOrderByAggregateInputObjectSchema } from '../internals';;
import { InquiryAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { InquiryMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { InquiryMinOrderByAggregateInputObjectSchema } from '../internals';;
import { InquirySumOrderByAggregateInputObjectSchema } from '../internals';

export const InquiryOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  category: SortOrderSchema,  contact: SortOrderSchema,  message: SortOrderSchema,  name: SortOrderSchema,  reference: SortOrderSchema,  responded: SortOrderSchema,  type: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  usersId: SortOrderSchema,  _count: InquiryCountOrderByAggregateInputObjectSchema,  _avg: InquiryAvgOrderByAggregateInputObjectSchema,  _max: InquiryMaxOrderByAggregateInputObjectSchema,  _min: InquiryMinOrderByAggregateInputObjectSchema,  _sum: InquirySumOrderByAggregateInputObjectSchema
});
