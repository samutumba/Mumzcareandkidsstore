// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { ProductRelationFilterObjectSchema } from '../internals';;
import { ProductWhereInputObjectSchema } from '../internals';;
import { UserRelationFilterObjectSchema } from '../internals';;
import { UserWhereInputObjectSchema } from '../internals';;
import { FloatFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';

export const ReviewWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ReviewWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ReviewWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ReviewWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ReviewWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ReviewWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  products: Yup.mixed().oneOfSchemas([ProductRelationFilterObjectSchema,
ProductWhereInputObjectSchema]),  user: Yup.mixed().oneOfSchemas([UserRelationFilterObjectSchema,
UserWhereInputObjectSchema]),  rating: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema,
Yup.number()]),  description: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  productsId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  usersId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
