// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleUpdateWithoutPaymentsInputObjectSchema } from '../internals';;
import { SaleUncheckedUpdateWithoutPaymentsInputObjectSchema } from '../internals';;
import { SaleCreateWithoutPaymentsInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateWithoutPaymentsInputObjectSchema } from '../internals';

export const SaleUpsertWithoutPaymentsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([SaleUpdateWithoutPaymentsInputObjectSchema,
SaleUncheckedUpdateWithoutPaymentsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([SaleCreateWithoutPaymentsInputObjectSchema,
SaleUncheckedCreateWithoutPaymentsInputObjectSchema])
});
