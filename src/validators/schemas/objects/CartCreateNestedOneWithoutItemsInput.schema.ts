// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartCreateWithoutItemsInputObjectSchema } from '../internals';;
import { CartUncheckedCreateWithoutItemsInputObjectSchema } from '../internals';;
import { CartCreateOrConnectWithoutItemsInputObjectSchema } from '../internals';;
import { CartWhereUniqueInputObjectSchema } from '../internals';

export const CartCreateNestedOneWithoutItemsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CartCreateWithoutItemsInputObjectSchema,
CartUncheckedCreateWithoutItemsInputObjectSchema]),  connectOrCreate: CartCreateOrConnectWithoutItemsInputObjectSchema,  connect: CartWhereUniqueInputObjectSchema
});
