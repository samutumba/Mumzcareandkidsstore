// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleWhereUniqueInputObjectSchema } from '../internals';;
import { SaleCreateWithoutItemsInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateWithoutItemsInputObjectSchema } from '../internals';

export const SaleCreateOrConnectWithoutItemsInputObjectSchema = Yup.object({
    where: SaleWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([SaleCreateWithoutItemsInputObjectSchema,
SaleUncheckedCreateWithoutItemsInputObjectSchema])
});
