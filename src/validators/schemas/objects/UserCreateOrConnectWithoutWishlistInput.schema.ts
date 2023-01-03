// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserCreateWithoutWishlistInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutWishlistInputObjectSchema } from '../internals';

export const UserCreateOrConnectWithoutWishlistInputObjectSchema = Yup.object({
    where: UserWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([UserCreateWithoutWishlistInputObjectSchema,
UserUncheckedCreateWithoutWishlistInputObjectSchema])
});
