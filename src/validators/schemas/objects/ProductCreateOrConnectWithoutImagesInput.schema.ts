// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductWhereUniqueInputObjectSchema } from '../internals';;
import { ProductCreateWithoutImagesInputObjectSchema } from '../internals';;
import { ProductUncheckedCreateWithoutImagesInputObjectSchema } from '../internals';

export const ProductCreateOrConnectWithoutImagesInputObjectSchema = Yup.object({
    where: ProductWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ProductCreateWithoutImagesInputObjectSchema,
ProductUncheckedCreateWithoutImagesInputObjectSchema])
});
