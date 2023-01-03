// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductWhereUniqueInputObjectSchema } from '../internals';;
import { ProductCreateWithoutCartItemInputObjectSchema } from '../internals';;
import { ProductUncheckedCreateWithoutCartItemInputObjectSchema } from '../internals';

export const ProductCreateOrConnectWithoutCartItemInputObjectSchema = Yup.object({
    where: ProductWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ProductCreateWithoutCartItemInputObjectSchema,
ProductUncheckedCreateWithoutCartItemInputObjectSchema])
});
