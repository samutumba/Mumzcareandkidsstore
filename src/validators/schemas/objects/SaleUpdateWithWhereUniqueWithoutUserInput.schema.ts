// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleWhereUniqueInputObjectSchema } from '../internals';;
import { SaleUpdateWithoutUserInputObjectSchema } from '../internals';;
import { SaleUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';

export const SaleUpdateWithWhereUniqueWithoutUserInputObjectSchema = Yup.object({
    where: SaleWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([SaleUpdateWithoutUserInputObjectSchema,
SaleUncheckedUpdateWithoutUserInputObjectSchema])
});
