// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { ItemCountOrderByAggregateInputObjectSchema } from '../internals';;
import { ItemAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { ItemMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { ItemMinOrderByAggregateInputObjectSchema } from '../internals';;
import { ItemSumOrderByAggregateInputObjectSchema } from '../internals';

export const ItemOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  color: SortOrderSchema,  material: SortOrderSchema,  size: SortOrderSchema,  model: SortOrderSchema,  sold: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  salesId: SortOrderSchema,  productsId: SortOrderSchema,  _count: ItemCountOrderByAggregateInputObjectSchema,  _avg: ItemAvgOrderByAggregateInputObjectSchema,  _max: ItemMaxOrderByAggregateInputObjectSchema,  _min: ItemMinOrderByAggregateInputObjectSchema,  _sum: ItemSumOrderByAggregateInputObjectSchema
});
