// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { WishlistWhereUniqueInputObjectSchema } from '../internals';;
import { WishlistCreateWithoutUsersInputObjectSchema } from '../internals';;
import { WishlistUncheckedCreateWithoutUsersInputObjectSchema } from '../internals';

export const WishlistCreateOrConnectWithoutUsersInputObjectSchema = Yup.object({
    where: WishlistWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([WishlistCreateWithoutUsersInputObjectSchema,
WishlistUncheckedCreateWithoutUsersInputObjectSchema])
});
