// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleCreateWithoutPaymentsInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateWithoutPaymentsInputObjectSchema } from '../internals';;
import { SaleCreateOrConnectWithoutPaymentsInputObjectSchema } from '../internals';;
import { SaleWhereUniqueInputObjectSchema } from '../internals';

export const SaleCreateNestedOneWithoutPaymentsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SaleCreateWithoutPaymentsInputObjectSchema,
SaleUncheckedCreateWithoutPaymentsInputObjectSchema]),  connectOrCreate: SaleCreateOrConnectWithoutPaymentsInputObjectSchema,  connect: SaleWhereUniqueInputObjectSchema
});
