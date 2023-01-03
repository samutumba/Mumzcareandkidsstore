// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleWhereUniqueInputObjectSchema } from '../internals';;
import { SaleCreateWithoutPaymentsInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateWithoutPaymentsInputObjectSchema } from '../internals';

export const SaleCreateOrConnectWithoutPaymentsInputObjectSchema = Yup.object({
    where: SaleWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([SaleCreateWithoutPaymentsInputObjectSchema,
SaleUncheckedCreateWithoutPaymentsInputObjectSchema])
});
