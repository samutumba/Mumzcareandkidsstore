// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartDetailCreateInputObjectSchema } from '../internals';;
import { CartDetailUpdateInputObjectSchema } from '../internals';

export const CartDetailUpsertInputObjectSchema = Yup.object({
    set: Yup.mixed().oneOfSchemas([CartDetailCreateInputObjectSchema]),  update: CartDetailUpdateInputObjectSchema
});
