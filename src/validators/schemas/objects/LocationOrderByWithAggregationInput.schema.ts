// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { LocationCountOrderByAggregateInputObjectSchema } from '../internals';;
import { LocationAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { LocationMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { LocationMinOrderByAggregateInputObjectSchema } from '../internals';;
import { LocationSumOrderByAggregateInputObjectSchema } from '../internals';

export const LocationOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  address: SortOrderSchema,  email: SortOrderSchema,  isStore: SortOrderSchema,  maps: SortOrderSchema,  name: SortOrderSchema,  phone: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  _count: LocationCountOrderByAggregateInputObjectSchema,  _avg: LocationAvgOrderByAggregateInputObjectSchema,  _max: LocationMaxOrderByAggregateInputObjectSchema,  _min: LocationMinOrderByAggregateInputObjectSchema,  _sum: LocationSumOrderByAggregateInputObjectSchema
});
