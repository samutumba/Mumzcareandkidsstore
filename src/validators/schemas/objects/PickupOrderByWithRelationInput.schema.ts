// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { LocationOrderByWithRelationInputObjectSchema } from '../internals';;
import { FileOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { UserOrderByWithRelationInputObjectSchema } from '../internals';

export const PickupOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  location: LocationOrderByWithRelationInputObjectSchema,  files: FileOrderByRelationAggregateInputObjectSchema,  service: SortOrderSchema,  status: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  user: UserOrderByWithRelationInputObjectSchema,  contact: SortOrderSchema,  note: SortOrderSchema,  locationsId: SortOrderSchema,  usersId: SortOrderSchema
});
