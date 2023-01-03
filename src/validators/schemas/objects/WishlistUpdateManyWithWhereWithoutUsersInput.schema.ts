// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { WishlistScalarWhereInputObjectSchema } from '../internals';;
import { WishlistUpdateManyMutationInputObjectSchema } from '../internals';;
import { WishlistUncheckedUpdateManyWithoutWishlistInputObjectSchema } from '../internals';

export const WishlistUpdateManyWithWhereWithoutUsersInputObjectSchema = Yup.object({
    where: WishlistScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([WishlistUpdateManyMutationInputObjectSchema,
WishlistUncheckedUpdateManyWithoutWishlistInputObjectSchema])
});
