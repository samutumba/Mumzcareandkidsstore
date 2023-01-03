// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { EventCountOrderByAggregateInputObjectSchema } from '../internals';;
import { EventAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { EventMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { EventMinOrderByAggregateInputObjectSchema } from '../internals';;
import { EventSumOrderByAggregateInputObjectSchema } from '../internals';

export const EventOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  completed: SortOrderSchema,  description: SortOrderSchema,  endDate: SortOrderSchema,  participantsID: SortOrderSchema,  startDate: SortOrderSchema,  title: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  _count: EventCountOrderByAggregateInputObjectSchema,  _avg: EventAvgOrderByAggregateInputObjectSchema,  _max: EventMaxOrderByAggregateInputObjectSchema,  _min: EventMinOrderByAggregateInputObjectSchema,  _sum: EventSumOrderByAggregateInputObjectSchema
});
