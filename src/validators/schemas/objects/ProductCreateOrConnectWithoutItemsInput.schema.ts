// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductWhereUniqueInputObjectSchema } from '../internals';;
import { ProductCreateWithoutItemsInputObjectSchema } from '../internals';;
import { ProductUncheckedCreateWithoutItemsInputObjectSchema } from '../internals';

export const ProductCreateOrConnectWithoutItemsInputObjectSchema = Yup.object({
    where: ProductWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ProductCreateWithoutItemsInputObjectSchema,
ProductUncheckedCreateWithoutItemsInputObjectSchema])
});
