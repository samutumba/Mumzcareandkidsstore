// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { WishlistCreateManyUsersInputObjectSchema } from '../internals';

export const WishlistCreateManyUsersInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(WishlistCreateManyUsersInputObjectSchema)
});
