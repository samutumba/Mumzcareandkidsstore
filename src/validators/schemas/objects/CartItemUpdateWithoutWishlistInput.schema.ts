// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductUpdateOneRequiredWithoutCartItemNestedInputObjectSchema } from '../internals';;
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { CartDetailNullableUpdateEnvelopeInputObjectSchema } from '../internals';;
import { CartDetailCreateInputObjectSchema } from '../internals';;
import { CartUpdateOneWithoutItemsNestedInputObjectSchema } from '../internals';;
import { SaleUpdateOneWithoutProductsNestedInputObjectSchema } from '../internals';

export const CartItemUpdateWithoutWishlistInputObjectSchema = Yup.object({
    product: ProductUpdateOneRequiredWithoutCartItemNestedInputObjectSchema,  quantity: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  detail: Yup.mixed().oneOfSchemas([CartDetailNullableUpdateEnvelopeInputObjectSchema,
CartDetailCreateInputObjectSchema]),  cart: CartUpdateOneWithoutItemsNestedInputObjectSchema,  sales: SaleUpdateOneWithoutProductsNestedInputObjectSchema
});
