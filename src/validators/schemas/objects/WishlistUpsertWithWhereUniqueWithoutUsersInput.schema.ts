// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { WishlistWhereUniqueInputObjectSchema } from '../internals';;
import { WishlistUpdateWithoutUsersInputObjectSchema } from '../internals';;
import { WishlistUncheckedUpdateWithoutUsersInputObjectSchema } from '../internals';;
import { WishlistCreateWithoutUsersInputObjectSchema } from '../internals';;
import { WishlistUncheckedCreateWithoutUsersInputObjectSchema } from '../internals';

export const WishlistUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Yup.object({
    where: WishlistWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([WishlistUpdateWithoutUsersInputObjectSchema,
WishlistUncheckedUpdateWithoutUsersInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([WishlistCreateWithoutUsersInputObjectSchema,
WishlistUncheckedCreateWithoutUsersInputObjectSchema])
});
