// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleCreateWithoutProductsInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateWithoutProductsInputObjectSchema } from '../internals';;
import { SaleCreateOrConnectWithoutProductsInputObjectSchema } from '../internals';;
import { SaleWhereUniqueInputObjectSchema } from '../internals';

export const SaleCreateNestedOneWithoutProductsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SaleCreateWithoutProductsInputObjectSchema,
SaleUncheckedCreateWithoutProductsInputObjectSchema]),  connectOrCreate: SaleCreateOrConnectWithoutProductsInputObjectSchema,  connect: SaleWhereUniqueInputObjectSchema
});
