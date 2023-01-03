// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleWhereUniqueInputObjectSchema } from '../internals';;
import { SaleUpdateWithoutUserInputObjectSchema } from '../internals';;
import { SaleUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';;
import { SaleCreateWithoutUserInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const SaleUpsertWithWhereUniqueWithoutUserInputObjectSchema = Yup.object({
    where: SaleWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([SaleUpdateWithoutUserInputObjectSchema,
SaleUncheckedUpdateWithoutUserInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([SaleCreateWithoutUserInputObjectSchema,
SaleUncheckedCreateWithoutUserInputObjectSchema])
});
