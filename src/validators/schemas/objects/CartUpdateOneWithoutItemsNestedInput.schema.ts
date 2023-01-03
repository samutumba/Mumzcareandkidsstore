// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartCreateWithoutItemsInputObjectSchema } from '../internals';;
import { CartUncheckedCreateWithoutItemsInputObjectSchema } from '../internals';;
import { CartCreateOrConnectWithoutItemsInputObjectSchema } from '../internals';;
import { CartUpsertWithoutItemsInputObjectSchema } from '../internals';;
import { CartWhereUniqueInputObjectSchema } from '../internals';;
import { CartUpdateWithoutItemsInputObjectSchema } from '../internals';;
import { CartUncheckedUpdateWithoutItemsInputObjectSchema } from '../internals';

export const CartUpdateOneWithoutItemsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CartCreateWithoutItemsInputObjectSchema,
CartUncheckedCreateWithoutItemsInputObjectSchema]),  connectOrCreate: CartCreateOrConnectWithoutItemsInputObjectSchema,  upsert: CartUpsertWithoutItemsInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: CartWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([CartUpdateWithoutItemsInputObjectSchema,
CartUncheckedUpdateWithoutItemsInputObjectSchema])
});
