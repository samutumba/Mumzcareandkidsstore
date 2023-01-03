// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductUpdateWithoutItemsInputObjectSchema } from '../internals';;
import { ProductUncheckedUpdateWithoutItemsInputObjectSchema } from '../internals';;
import { ProductCreateWithoutItemsInputObjectSchema } from '../internals';;
import { ProductUncheckedCreateWithoutItemsInputObjectSchema } from '../internals';

export const ProductUpsertWithoutItemsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([ProductUpdateWithoutItemsInputObjectSchema,
ProductUncheckedUpdateWithoutItemsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ProductCreateWithoutItemsInputObjectSchema,
ProductUncheckedCreateWithoutItemsInputObjectSchema])
});
