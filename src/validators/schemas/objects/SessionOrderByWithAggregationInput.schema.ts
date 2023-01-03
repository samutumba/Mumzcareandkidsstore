// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SessionCountOrderByAggregateInputObjectSchema } from '../internals';;
import { SessionMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { SessionMinOrderByAggregateInputObjectSchema } from '../internals';

export const SessionOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  expires: SortOrderSchema,  session: SortOrderSchema,  _count: SessionCountOrderByAggregateInputObjectSchema,  _max: SessionMaxOrderByAggregateInputObjectSchema,  _min: SessionMinOrderByAggregateInputObjectSchema
});
