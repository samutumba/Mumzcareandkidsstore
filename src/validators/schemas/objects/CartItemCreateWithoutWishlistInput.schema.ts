// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductCreateNestedOneWithoutCartItemInputObjectSchema } from '../internals';;
import { CartDetailNullableCreateEnvelopeInputObjectSchema } from '../internals';;
import { CartDetailCreateInputObjectSchema } from '../internals';;
import { CartCreateNestedOneWithoutItemsInputObjectSchema } from '../internals';;
import { SaleCreateNestedOneWithoutProductsInputObjectSchema } from '../internals';

export const CartItemCreateWithoutWishlistInputObjectSchema = Yup.object({
    id: Yup.string(),  product: ProductCreateNestedOneWithoutCartItemInputObjectSchema,  quantity: Yup.number(),  detail: Yup.mixed().oneOfSchemas([CartDetailNullableCreateEnvelopeInputObjectSchema,
CartDetailCreateInputObjectSchema]),  cart: CartCreateNestedOneWithoutItemsInputObjectSchema,  sales: SaleCreateNestedOneWithoutProductsInputObjectSchema
});
