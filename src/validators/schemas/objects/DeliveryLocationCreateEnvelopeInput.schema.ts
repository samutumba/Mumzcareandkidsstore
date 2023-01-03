// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DeliveryLocationCreateInputObjectSchema } from '../internals';

export const DeliveryLocationCreateEnvelopeInputObjectSchema = Yup.object({
    set: DeliveryLocationCreateInputObjectSchema
});
