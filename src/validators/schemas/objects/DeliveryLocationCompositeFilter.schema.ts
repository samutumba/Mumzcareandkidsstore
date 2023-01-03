// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DeliveryLocationObjectEqualityInputObjectSchema } from '../internals';;
import { DeliveryLocationWhereInputObjectSchema } from '../internals';

export const DeliveryLocationCompositeFilterObjectSchema = Yup.object({
    equals: DeliveryLocationObjectEqualityInputObjectSchema,  is: DeliveryLocationWhereInputObjectSchema,  isNot: DeliveryLocationWhereInputObjectSchema
});
