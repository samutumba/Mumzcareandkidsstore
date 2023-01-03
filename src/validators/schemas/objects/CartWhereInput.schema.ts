// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { CartItemListRelationFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { UserRelationFilterObjectSchema } from '../internals';;
import { UserWhereInputObjectSchema } from '../internals';

export const CartWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => CartWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CartWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => CartWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => CartWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CartWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  items: CartItemListRelationFilterObjectSchema,  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  usersId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  users: Yup.mixed().oneOfSchemas([UserRelationFilterObjectSchema,
UserWhereInputObjectSchema])
});
