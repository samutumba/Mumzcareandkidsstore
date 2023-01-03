// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleUpdateWithoutProductsInputObjectSchema } from '../internals';;
import { SaleUncheckedUpdateWithoutProductsInputObjectSchema } from '../internals';;
import { SaleCreateWithoutProductsInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateWithoutProductsInputObjectSchema } from '../internals';

export const SaleUpsertWithoutProductsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([SaleUpdateWithoutProductsInputObjectSchema,
SaleUncheckedUpdateWithoutProductsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([SaleCreateWithoutProductsInputObjectSchema,
SaleUncheckedCreateWithoutProductsInputObjectSchema])
});
