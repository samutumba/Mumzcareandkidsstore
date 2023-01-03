// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserUpdateWithoutWishlistInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutWishlistInputObjectSchema } from '../internals';;
import { UserCreateWithoutWishlistInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutWishlistInputObjectSchema } from '../internals';

export const UserUpsertWithoutWishlistInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([UserUpdateWithoutWishlistInputObjectSchema,
UserUncheckedUpdateWithoutWishlistInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([UserCreateWithoutWishlistInputObjectSchema,
UserUncheckedCreateWithoutWishlistInputObjectSchema])
});
