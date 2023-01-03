// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { AdminCountOrderByAggregateInputObjectSchema } from '../internals';;
import { AdminAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { AdminMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { AdminMinOrderByAggregateInputObjectSchema } from '../internals';;
import { AdminSumOrderByAggregateInputObjectSchema } from '../internals';

export const AdminOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  createdAt: SortOrderSchema,  email: SortOrderSchema,  employed: SortOrderSchema,  name: SortOrderSchema,  password: SortOrderSchema,  phone: SortOrderSchema,  role: SortOrderSchema,  updatedAt: SortOrderSchema,  filesId: SortOrderSchema,  eventsId: SortOrderSchema,  _count: AdminCountOrderByAggregateInputObjectSchema,  _avg: AdminAvgOrderByAggregateInputObjectSchema,  _max: AdminMaxOrderByAggregateInputObjectSchema,  _min: AdminMinOrderByAggregateInputObjectSchema,  _sum: AdminSumOrderByAggregateInputObjectSchema
});
