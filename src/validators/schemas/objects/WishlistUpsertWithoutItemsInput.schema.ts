// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { WishlistUpdateWithoutItemsInputObjectSchema } from '../internals';;
import { WishlistUncheckedUpdateWithoutItemsInputObjectSchema } from '../internals';;
import { WishlistCreateWithoutItemsInputObjectSchema } from '../internals';;
import { WishlistUncheckedCreateWithoutItemsInputObjectSchema } from '../internals';

export const WishlistUpsertWithoutItemsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([WishlistUpdateWithoutItemsInputObjectSchema,
WishlistUncheckedUpdateWithoutItemsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([WishlistCreateWithoutItemsInputObjectSchema,
WishlistUncheckedCreateWithoutItemsInputObjectSchema])
});
