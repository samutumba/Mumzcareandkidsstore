// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductCreateWithoutItemsInputObjectSchema } from '../internals';;
import { ProductUncheckedCreateWithoutItemsInputObjectSchema } from '../internals';;
import { ProductCreateOrConnectWithoutItemsInputObjectSchema } from '../internals';;
import { ProductUpsertWithoutItemsInputObjectSchema } from '../internals';;
import { ProductWhereUniqueInputObjectSchema } from '../internals';;
import { ProductUpdateWithoutItemsInputObjectSchema } from '../internals';;
import { ProductUncheckedUpdateWithoutItemsInputObjectSchema } from '../internals';

export const ProductUpdateOneRequiredWithoutItemsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ProductCreateWithoutItemsInputObjectSchema,
ProductUncheckedCreateWithoutItemsInputObjectSchema]),  connectOrCreate: ProductCreateOrConnectWithoutItemsInputObjectSchema,  upsert: ProductUpsertWithoutItemsInputObjectSchema,  connect: ProductWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ProductUpdateWithoutItemsInputObjectSchema,
ProductUncheckedUpdateWithoutItemsInputObjectSchema])
});
