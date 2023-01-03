// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleWhereUniqueInputObjectSchema } from '../internals';;
import { SaleCreateWithoutUserInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const SaleCreateOrConnectWithoutUserInputObjectSchema = Yup.object({
    where: SaleWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([SaleCreateWithoutUserInputObjectSchema,
SaleUncheckedCreateWithoutUserInputObjectSchema])
});
