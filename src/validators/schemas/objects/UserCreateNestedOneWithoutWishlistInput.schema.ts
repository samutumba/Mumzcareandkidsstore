// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutWishlistInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutWishlistInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutWishlistInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';

export const UserCreateNestedOneWithoutWishlistInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutWishlistInputObjectSchema,
UserUncheckedCreateWithoutWishlistInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutWishlistInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema
});
