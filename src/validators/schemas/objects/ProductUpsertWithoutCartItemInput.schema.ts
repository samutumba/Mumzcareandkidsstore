// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductUpdateWithoutCartItemInputObjectSchema } from '../internals';;
import { ProductUncheckedUpdateWithoutCartItemInputObjectSchema } from '../internals';;
import { ProductCreateWithoutCartItemInputObjectSchema } from '../internals';;
import { ProductUncheckedCreateWithoutCartItemInputObjectSchema } from '../internals';

export const ProductUpsertWithoutCartItemInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([ProductUpdateWithoutCartItemInputObjectSchema,
ProductUncheckedUpdateWithoutCartItemInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ProductCreateWithoutCartItemInputObjectSchema,
ProductUncheckedCreateWithoutCartItemInputObjectSchema])
});
