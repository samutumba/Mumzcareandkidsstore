// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutWishlistInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutWishlistInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutWishlistInputObjectSchema } from '../internals';;
import { UserUpsertWithoutWishlistInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserUpdateWithoutWishlistInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutWishlistInputObjectSchema } from '../internals';

export const UserUpdateOneRequiredWithoutWishlistNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutWishlistInputObjectSchema,
UserUncheckedCreateWithoutWishlistInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutWishlistInputObjectSchema,  upsert: UserUpsertWithoutWishlistInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([UserUpdateWithoutWishlistInputObjectSchema,
UserUncheckedUpdateWithoutWishlistInputObjectSchema])
});
