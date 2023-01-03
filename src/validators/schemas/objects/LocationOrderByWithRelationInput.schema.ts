// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { FileOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { PickupOrderByRelationAggregateInputObjectSchema } from '../internals';

export const LocationOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  address: SortOrderSchema,  email: SortOrderSchema,  images: FileOrderByRelationAggregateInputObjectSchema,  isStore: SortOrderSchema,  maps: SortOrderSchema,  name: SortOrderSchema,  phone: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  pickups: PickupOrderByRelationAggregateInputObjectSchema
});
