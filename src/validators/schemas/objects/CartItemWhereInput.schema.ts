// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { ProductRelationFilterObjectSchema } from '../internals';;
import { ProductWhereInputObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';;
import { CartDetailNullableCompositeFilterObjectSchema } from '../internals';;
import { CartDetailObjectEqualityInputObjectSchema } from '../internals';;
import { CartRelationFilterObjectSchema } from '../internals';;
import { CartWhereInputObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { SaleRelationFilterObjectSchema } from '../internals';;
import { SaleWhereInputObjectSchema } from '../internals';;
import { WishlistRelationFilterObjectSchema } from '../internals';;
import { WishlistWhereInputObjectSchema } from '../internals';

export const CartItemWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => CartItemWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CartItemWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => CartItemWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => CartItemWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CartItemWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  product: Yup.mixed().oneOfSchemas([ProductRelationFilterObjectSchema,
ProductWhereInputObjectSchema]),  quantity: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  detail: Yup.mixed().oneOfSchemas([CartDetailNullableCompositeFilterObjectSchema,
CartDetailObjectEqualityInputObjectSchema]),  cart: Yup.mixed().oneOfSchemas([CartRelationFilterObjectSchema,
CartWhereInputObjectSchema]),  cartId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  productsId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  sales: Yup.mixed().oneOfSchemas([SaleRelationFilterObjectSchema,
SaleWhereInputObjectSchema]),  salesId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  wishlist: Yup.mixed().oneOfSchemas([WishlistRelationFilterObjectSchema,
WishlistWhereInputObjectSchema]),  wishlistId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()])
});
