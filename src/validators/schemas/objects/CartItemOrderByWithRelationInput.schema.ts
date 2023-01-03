// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { ProductOrderByWithRelationInputObjectSchema } from '../internals';;
import { CartDetailOrderByInputObjectSchema } from '../internals';;
import { CartOrderByWithRelationInputObjectSchema } from '../internals';;
import { SaleOrderByWithRelationInputObjectSchema } from '../internals';;
import { WishlistOrderByWithRelationInputObjectSchema } from '../internals';

export const CartItemOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  product: ProductOrderByWithRelationInputObjectSchema,  quantity: SortOrderSchema,  detail: CartDetailOrderByInputObjectSchema,  cart: CartOrderByWithRelationInputObjectSchema,  cartId: SortOrderSchema,  productsId: SortOrderSchema,  sales: SaleOrderByWithRelationInputObjectSchema,  salesId: SortOrderSchema,  wishlist: WishlistOrderByWithRelationInputObjectSchema,  wishlistId: SortOrderSchema
});
