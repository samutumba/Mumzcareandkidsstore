// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductCreateWithoutImagesInputObjectSchema } from '../internals';;
import { ProductUncheckedCreateWithoutImagesInputObjectSchema } from '../internals';;
import { ProductCreateOrConnectWithoutImagesInputObjectSchema } from '../internals';;
import { ProductUpsertWithoutImagesInputObjectSchema } from '../internals';;
import { ProductWhereUniqueInputObjectSchema } from '../internals';;
import { ProductUpdateWithoutImagesInputObjectSchema } from '../internals';;
import { ProductUncheckedUpdateWithoutImagesInputObjectSchema } from '../internals';

export const ProductUpdateOneWithoutImagesNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ProductCreateWithoutImagesInputObjectSchema,
ProductUncheckedCreateWithoutImagesInputObjectSchema]),  connectOrCreate: ProductCreateOrConnectWithoutImagesInputObjectSchema,  upsert: ProductUpsertWithoutImagesInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: ProductWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ProductUpdateWithoutImagesInputObjectSchema,
ProductUncheckedUpdateWithoutImagesInputObjectSchema])
});
