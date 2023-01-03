// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductUpdateOneRequiredWithoutCartItemNestedInputObjectSchema } from '../internals';;
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { CartDetailNullableUpdateEnvelopeInputObjectSchema } from '../internals';;
import { CartDetailCreateInputObjectSchema } from '../internals';;
import { SaleUpdateOneWithoutProductsNestedInputObjectSchema } from '../internals';;
import { WishlistUpdateOneWithoutItemsNestedInputObjectSchema } from '../internals';

export const CartItemUpdateWithoutCartInputObjectSchema = Yup.object({
    product: ProductUpdateOneRequiredWithoutCartItemNestedInputObjectSchema,  quantity: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  detail: Yup.mixed().oneOfSchemas([CartDetailNullableUpdateEnvelopeInputObjectSchema,
CartDetailCreateInputObjectSchema]),  sales: SaleUpdateOneWithoutProductsNestedInputObjectSchema,  wishlist: WishlistUpdateOneWithoutItemsNestedInputObjectSchema
});
