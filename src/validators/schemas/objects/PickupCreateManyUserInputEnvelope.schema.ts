// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupCreateManyUserInputObjectSchema } from '../internals';

export const PickupCreateManyUserInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(PickupCreateManyUserInputObjectSchema)
});
