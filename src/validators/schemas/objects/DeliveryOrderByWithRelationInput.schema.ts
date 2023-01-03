// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { FileOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { DeliveryLocationOrderByInputObjectSchema } from '../internals';

export const DeliveryOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  documents: FileOrderByRelationAggregateInputObjectSchema,  service: SortOrderSchema,  status: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  location: DeliveryLocationOrderByInputObjectSchema
});
