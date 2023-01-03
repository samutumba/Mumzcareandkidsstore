// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartDetailNullableCreateEnvelopeInputObjectSchema } from '../internals';;
import { CartDetailCreateInputObjectSchema } from '../internals';;
import { CartCreateNestedOneWithoutItemsInputObjectSchema } from '../internals';;
import { SaleCreateNestedOneWithoutProductsInputObjectSchema } from '../internals';;
import { WishlistCreateNestedOneWithoutItemsInputObjectSchema } from '../internals';

export const CartItemCreateWithoutProductInputObjectSchema = Yup.object({
    id: Yup.string(),  quantity: Yup.number(),  detail: Yup.mixed().oneOfSchemas([CartDetailNullableCreateEnvelopeInputObjectSchema,
CartDetailCreateInputObjectSchema]),  cart: CartCreateNestedOneWithoutItemsInputObjectSchema,  sales: SaleCreateNestedOneWithoutProductsInputObjectSchema,  wishlist: WishlistCreateNestedOneWithoutItemsInputObjectSchema
});
