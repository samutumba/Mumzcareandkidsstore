// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleCreateWithoutPaymentsInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateWithoutPaymentsInputObjectSchema } from '../internals';;
import { SaleCreateOrConnectWithoutPaymentsInputObjectSchema } from '../internals';;
import { SaleUpsertWithoutPaymentsInputObjectSchema } from '../internals';;
import { SaleWhereUniqueInputObjectSchema } from '../internals';;
import { SaleUpdateWithoutPaymentsInputObjectSchema } from '../internals';;
import { SaleUncheckedUpdateWithoutPaymentsInputObjectSchema } from '../internals';

export const SaleUpdateOneWithoutPaymentsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SaleCreateWithoutPaymentsInputObjectSchema,
SaleUncheckedCreateWithoutPaymentsInputObjectSchema]),  connectOrCreate: SaleCreateOrConnectWithoutPaymentsInputObjectSchema,  upsert: SaleUpsertWithoutPaymentsInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: SaleWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([SaleUpdateWithoutPaymentsInputObjectSchema,
SaleUncheckedUpdateWithoutPaymentsInputObjectSchema])
});
