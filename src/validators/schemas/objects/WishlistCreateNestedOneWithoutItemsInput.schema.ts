// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { WishlistCreateWithoutItemsInputObjectSchema } from '../internals';;
import { WishlistUncheckedCreateWithoutItemsInputObjectSchema } from '../internals';;
import { WishlistCreateOrConnectWithoutItemsInputObjectSchema } from '../internals';;
import { WishlistWhereUniqueInputObjectSchema } from '../internals';

export const WishlistCreateNestedOneWithoutItemsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([WishlistCreateWithoutItemsInputObjectSchema,
WishlistUncheckedCreateWithoutItemsInputObjectSchema]),  connectOrCreate: WishlistCreateOrConnectWithoutItemsInputObjectSchema,  connect: WishlistWhereUniqueInputObjectSchema
});
