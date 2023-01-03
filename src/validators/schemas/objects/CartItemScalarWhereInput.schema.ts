// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';

export const CartItemScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => CartItemScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CartItemScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => CartItemScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => CartItemScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CartItemScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  quantity: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  cartId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  productsId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  salesId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  wishlistId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()])
});
