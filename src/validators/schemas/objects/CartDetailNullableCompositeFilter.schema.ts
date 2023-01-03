// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartDetailObjectEqualityInputObjectSchema } from '../internals';;
import { CartDetailWhereInputObjectSchema } from '../internals';

export const CartDetailNullableCompositeFilterObjectSchema = Yup.object({
    equals: Yup.mixed().oneOfSchemas([CartDetailObjectEqualityInputObjectSchema]),  is: Yup.mixed().oneOfSchemas([CartDetailWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([CartDetailWhereInputObjectSchema]),  isSet: Yup.boolean()
});
