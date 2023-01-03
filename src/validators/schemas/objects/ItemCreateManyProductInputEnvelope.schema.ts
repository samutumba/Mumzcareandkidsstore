// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ItemCreateManyProductInputObjectSchema } from '../internals';

export const ItemCreateManyProductInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(ItemCreateManyProductInputObjectSchema)
});
