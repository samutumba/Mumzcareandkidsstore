// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DetailObjectEqualityInputObjectSchema } from '../internals';;
import { DetailWhereInputObjectSchema } from '../internals';

export const DetailNullableCompositeFilterObjectSchema = Yup.object({
    equals: Yup.mixed().oneOfSchemas([DetailObjectEqualityInputObjectSchema]),  is: Yup.mixed().oneOfSchemas([DetailWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([DetailWhereInputObjectSchema]),  isSet: Yup.boolean()
});
