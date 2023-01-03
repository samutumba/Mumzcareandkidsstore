// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DeliveryLocationCreateInputObjectSchema } from '../internals';;
import { DeliveryLocationUpdateInputObjectSchema } from '../internals';

export const DeliveryLocationUpdateEnvelopeInputObjectSchema = Yup.object({
    set: DeliveryLocationCreateInputObjectSchema,  update: DeliveryLocationUpdateInputObjectSchema
});
