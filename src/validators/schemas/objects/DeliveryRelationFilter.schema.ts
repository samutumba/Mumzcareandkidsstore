// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DeliveryWhereInputObjectSchema } from '../internals';

export const DeliveryRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([DeliveryWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([DeliveryWhereInputObjectSchema])
});
