// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartWhereUniqueInputObjectSchema } from '../internals';;
import { CartCreateWithoutItemsInputObjectSchema } from '../internals';;
import { CartUncheckedCreateWithoutItemsInputObjectSchema } from '../internals';

export const CartCreateOrConnectWithoutItemsInputObjectSchema = Yup.object({
    where: CartWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([CartCreateWithoutItemsInputObjectSchema,
CartUncheckedCreateWithoutItemsInputObjectSchema])
});
