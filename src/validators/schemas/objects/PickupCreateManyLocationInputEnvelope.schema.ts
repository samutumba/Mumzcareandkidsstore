// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupCreateManyLocationInputObjectSchema } from '../internals';

export const PickupCreateManyLocationInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(PickupCreateManyLocationInputObjectSchema)
});
