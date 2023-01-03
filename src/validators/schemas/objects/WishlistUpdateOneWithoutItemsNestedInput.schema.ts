// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { WishlistCreateWithoutItemsInputObjectSchema } from '../internals';;
import { WishlistUncheckedCreateWithoutItemsInputObjectSchema } from '../internals';;
import { WishlistCreateOrConnectWithoutItemsInputObjectSchema } from '../internals';;
import { WishlistUpsertWithoutItemsInputObjectSchema } from '../internals';;
import { WishlistWhereUniqueInputObjectSchema } from '../internals';;
import { WishlistUpdateWithoutItemsInputObjectSchema } from '../internals';;
import { WishlistUncheckedUpdateWithoutItemsInputObjectSchema } from '../internals';

export const WishlistUpdateOneWithoutItemsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([WishlistCreateWithoutItemsInputObjectSchema,
WishlistUncheckedCreateWithoutItemsInputObjectSchema]),  connectOrCreate: WishlistCreateOrConnectWithoutItemsInputObjectSchema,  upsert: WishlistUpsertWithoutItemsInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: WishlistWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([WishlistUpdateWithoutItemsInputObjectSchema,
WishlistUncheckedUpdateWithoutItemsInputObjectSchema])
});
