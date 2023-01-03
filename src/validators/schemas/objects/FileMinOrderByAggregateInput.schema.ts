// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const FileMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  fileKey: SortOrderSchema,  link: SortOrderSchema,  type: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  eventsId: SortOrderSchema,  deliveriesId: SortOrderSchema,  pickupsId: SortOrderSchema,  locationsId: SortOrderSchema,  productsId: SortOrderSchema
});
