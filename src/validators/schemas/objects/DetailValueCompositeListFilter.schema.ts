// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DetailValueObjectEqualityInputObjectSchema } from '../internals';;
import { DetailValueWhereInputObjectSchema } from '../internals';

export const DetailValueCompositeListFilterObjectSchema = Yup.object({
    equals: Yup.array().of(DetailValueObjectEqualityInputObjectSchema),  every: DetailValueWhereInputObjectSchema,  some: DetailValueWhereInputObjectSchema,  none: DetailValueWhereInputObjectSchema,  isEmpty: Yup.boolean(),  isSet: Yup.boolean()
});
