// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { FileCountOrderByAggregateInputObjectSchema } from '../internals';;
import { FileMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { FileMinOrderByAggregateInputObjectSchema } from '../internals';

export const FileOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  fileKey: SortOrderSchema,  link: SortOrderSchema,  type: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  eventsId: SortOrderSchema,  deliveriesId: SortOrderSchema,  pickupsId: SortOrderSchema,  locationsId: SortOrderSchema,  productsId: SortOrderSchema,  _count: FileCountOrderByAggregateInputObjectSchema,  _max: FileMaxOrderByAggregateInputObjectSchema,  _min: FileMinOrderByAggregateInputObjectSchema
});
