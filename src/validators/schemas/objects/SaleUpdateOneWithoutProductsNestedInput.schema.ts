// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleCreateWithoutProductsInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateWithoutProductsInputObjectSchema } from '../internals';;
import { SaleCreateOrConnectWithoutProductsInputObjectSchema } from '../internals';;
import { SaleUpsertWithoutProductsInputObjectSchema } from '../internals';;
import { SaleWhereUniqueInputObjectSchema } from '../internals';;
import { SaleUpdateWithoutProductsInputObjectSchema } from '../internals';;
import { SaleUncheckedUpdateWithoutProductsInputObjectSchema } from '../internals';

export const SaleUpdateOneWithoutProductsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SaleCreateWithoutProductsInputObjectSchema,
SaleUncheckedCreateWithoutProductsInputObjectSchema]),  connectOrCreate: SaleCreateOrConnectWithoutProductsInputObjectSchema,  upsert: SaleUpsertWithoutProductsInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: SaleWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([SaleUpdateWithoutProductsInputObjectSchema,
SaleUncheckedUpdateWithoutProductsInputObjectSchema])
});
