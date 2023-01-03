// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductCreateWithoutItemsInputObjectSchema } from '../internals';;
import { ProductUncheckedCreateWithoutItemsInputObjectSchema } from '../internals';;
import { ProductCreateOrConnectWithoutItemsInputObjectSchema } from '../internals';;
import { ProductWhereUniqueInputObjectSchema } from '../internals';

export const ProductCreateNestedOneWithoutItemsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ProductCreateWithoutItemsInputObjectSchema,
ProductUncheckedCreateWithoutItemsInputObjectSchema]),  connectOrCreate: ProductCreateOrConnectWithoutItemsInputObjectSchema,  connect: ProductWhereUniqueInputObjectSchema
});
