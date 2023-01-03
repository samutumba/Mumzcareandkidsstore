// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { WishlistWhereUniqueInputObjectSchema } from '../internals';;
import { WishlistUpdateWithoutUsersInputObjectSchema } from '../internals';;
import { WishlistUncheckedUpdateWithoutUsersInputObjectSchema } from '../internals';

export const WishlistUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Yup.object({
    where: WishlistWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([WishlistUpdateWithoutUsersInputObjectSchema,
WishlistUncheckedUpdateWithoutUsersInputObjectSchema])
});
