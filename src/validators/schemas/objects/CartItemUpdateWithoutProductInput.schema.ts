// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { CartDetailNullableUpdateEnvelopeInputObjectSchema } from '../internals';;
import { CartDetailCreateInputObjectSchema } from '../internals';;
import { CartUpdateOneWithoutItemsNestedInputObjectSchema } from '../internals';;
import { SaleUpdateOneWithoutProductsNestedInputObjectSchema } from '../internals';;
import { WishlistUpdateOneWithoutItemsNestedInputObjectSchema } from '../internals';

export const CartItemUpdateWithoutProductInputObjectSchema = Yup.object({
    quantity: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  detail: Yup.mixed().oneOfSchemas([CartDetailNullableUpdateEnvelopeInputObjectSchema,
CartDetailCreateInputObjectSchema]),  cart: CartUpdateOneWithoutItemsNestedInputObjectSchema,  sales: SaleUpdateOneWithoutProductsNestedInputObjectSchema,  wishlist: WishlistUpdateOneWithoutItemsNestedInputObjectSchema
});
