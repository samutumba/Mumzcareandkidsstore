// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductCreateWithoutCartItemInputObjectSchema } from '../internals';;
import { ProductUncheckedCreateWithoutCartItemInputObjectSchema } from '../internals';;
import { ProductCreateOrConnectWithoutCartItemInputObjectSchema } from '../internals';;
import { ProductWhereUniqueInputObjectSchema } from '../internals';

export const ProductCreateNestedOneWithoutCartItemInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ProductCreateWithoutCartItemInputObjectSchema,
ProductUncheckedCreateWithoutCartItemInputObjectSchema]),  connectOrCreate: ProductCreateOrConnectWithoutCartItemInputObjectSchema,  connect: ProductWhereUniqueInputObjectSchema
});
