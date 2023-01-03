// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { FloatFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';

export const ReviewScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ReviewScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ReviewScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ReviewScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ReviewScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ReviewScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  rating: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema,
Yup.number()]),  description: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  productsId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  usersId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
