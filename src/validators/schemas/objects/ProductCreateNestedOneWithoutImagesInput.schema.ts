// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductCreateWithoutImagesInputObjectSchema } from '../internals';;
import { ProductUncheckedCreateWithoutImagesInputObjectSchema } from '../internals';;
import { ProductCreateOrConnectWithoutImagesInputObjectSchema } from '../internals';;
import { ProductWhereUniqueInputObjectSchema } from '../internals';

export const ProductCreateNestedOneWithoutImagesInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ProductCreateWithoutImagesInputObjectSchema,
ProductUncheckedCreateWithoutImagesInputObjectSchema]),  connectOrCreate: ProductCreateOrConnectWithoutImagesInputObjectSchema,  connect: ProductWhereUniqueInputObjectSchema
});
