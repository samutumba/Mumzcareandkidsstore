// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleWhereUniqueInputObjectSchema } from '../internals';;
import { SaleCreateWithoutProductsInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateWithoutProductsInputObjectSchema } from '../internals';

export const SaleCreateOrConnectWithoutProductsInputObjectSchema = Yup.object({
    where: SaleWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([SaleCreateWithoutProductsInputObjectSchema,
SaleUncheckedCreateWithoutProductsInputObjectSchema])
});
