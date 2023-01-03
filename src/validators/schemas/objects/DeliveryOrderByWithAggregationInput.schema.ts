// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { DeliveryCountOrderByAggregateInputObjectSchema } from '../internals';;
import { DeliveryAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { DeliveryMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { DeliveryMinOrderByAggregateInputObjectSchema } from '../internals';;
import { DeliverySumOrderByAggregateInputObjectSchema } from '../internals';

export const DeliveryOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  service: SortOrderSchema,  status: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  _count: DeliveryCountOrderByAggregateInputObjectSchema,  _avg: DeliveryAvgOrderByAggregateInputObjectSchema,  _max: DeliveryMaxOrderByAggregateInputObjectSchema,  _min: DeliveryMinOrderByAggregateInputObjectSchema,  _sum: DeliverySumOrderByAggregateInputObjectSchema
});
