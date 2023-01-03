// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { ProductOrderByWithRelationInputObjectSchema } from '../internals';;
import { UserOrderByWithRelationInputObjectSchema } from '../internals';

export const ReviewOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  products: ProductOrderByWithRelationInputObjectSchema,  user: UserOrderByWithRelationInputObjectSchema,  rating: SortOrderSchema,  description: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  productsId: SortOrderSchema,  usersId: SortOrderSchema
});
