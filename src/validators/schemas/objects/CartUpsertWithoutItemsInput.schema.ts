// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartUpdateWithoutItemsInputObjectSchema } from '../internals';;
import { CartUncheckedUpdateWithoutItemsInputObjectSchema } from '../internals';;
import { CartCreateWithoutItemsInputObjectSchema } from '../internals';;
import { CartUncheckedCreateWithoutItemsInputObjectSchema } from '../internals';

export const CartUpsertWithoutItemsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([CartUpdateWithoutItemsInputObjectSchema,
CartUncheckedUpdateWithoutItemsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([CartCreateWithoutItemsInputObjectSchema,
CartUncheckedCreateWithoutItemsInputObjectSchema])
});
