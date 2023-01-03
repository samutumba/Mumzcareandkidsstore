// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductCreateWithoutCartItemInputObjectSchema } from '../internals';;
import { ProductUncheckedCreateWithoutCartItemInputObjectSchema } from '../internals';;
import { ProductCreateOrConnectWithoutCartItemInputObjectSchema } from '../internals';;
import { ProductUpsertWithoutCartItemInputObjectSchema } from '../internals';;
import { ProductWhereUniqueInputObjectSchema } from '../internals';;
import { ProductUpdateWithoutCartItemInputObjectSchema } from '../internals';;
import { ProductUncheckedUpdateWithoutCartItemInputObjectSchema } from '../internals';

export const ProductUpdateOneRequiredWithoutCartItemNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ProductCreateWithoutCartItemInputObjectSchema,
ProductUncheckedCreateWithoutCartItemInputObjectSchema]),  connectOrCreate: ProductCreateOrConnectWithoutCartItemInputObjectSchema,  upsert: ProductUpsertWithoutCartItemInputObjectSchema,  connect: ProductWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ProductUpdateWithoutCartItemInputObjectSchema,
ProductUncheckedUpdateWithoutCartItemInputObjectSchema])
});
