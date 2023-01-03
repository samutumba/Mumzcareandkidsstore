// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DetailValueCompositeListFilterObjectSchema } from '../internals';;
import { DetailValueObjectEqualityInputObjectSchema } from '../internals';

export const DetailWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => DetailWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => DetailWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => DetailWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => DetailWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => DetailWhereInputObjectSchema.default(undefined)))]),  color: Yup.mixed().oneOfSchemas([DetailValueCompositeListFilterObjectSchema,
Yup.array().of(DetailValueObjectEqualityInputObjectSchema)]),  material: Yup.mixed().oneOfSchemas([DetailValueCompositeListFilterObjectSchema,
Yup.array().of(DetailValueObjectEqualityInputObjectSchema)]),  model: Yup.mixed().oneOfSchemas([DetailValueCompositeListFilterObjectSchema,
Yup.array().of(DetailValueObjectEqualityInputObjectSchema)]),  size: Yup.mixed().oneOfSchemas([DetailValueCompositeListFilterObjectSchema,
Yup.array().of(DetailValueObjectEqualityInputObjectSchema)])
});
