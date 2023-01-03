// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { WishlistWhereUniqueInputObjectSchema } from '../internals';;
import { WishlistCreateWithoutItemsInputObjectSchema } from '../internals';;
import { WishlistUncheckedCreateWithoutItemsInputObjectSchema } from '../internals';

export const WishlistCreateOrConnectWithoutItemsInputObjectSchema = Yup.object({
    where: WishlistWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([WishlistCreateWithoutItemsInputObjectSchema,
WishlistUncheckedCreateWithoutItemsInputObjectSchema])
});
