// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { PickupCountOrderByAggregateInputObjectSchema } from '../internals';;
import { PickupAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { PickupMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { PickupMinOrderByAggregateInputObjectSchema } from '../internals';;
import { PickupSumOrderByAggregateInputObjectSchema } from '../internals';

export const PickupOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  service: SortOrderSchema,  status: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  contact: SortOrderSchema,  note: SortOrderSchema,  locationsId: SortOrderSchema,  usersId: SortOrderSchema,  _count: PickupCountOrderByAggregateInputObjectSchema,  _avg: PickupAvgOrderByAggregateInputObjectSchema,  _max: PickupMaxOrderByAggregateInputObjectSchema,  _min: PickupMinOrderByAggregateInputObjectSchema,  _sum: PickupSumOrderByAggregateInputObjectSchema
});
