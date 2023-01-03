// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleCreateManyUserInputObjectSchema } from '../internals';

export const SaleCreateManyUserInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(SaleCreateManyUserInputObjectSchema)
});
