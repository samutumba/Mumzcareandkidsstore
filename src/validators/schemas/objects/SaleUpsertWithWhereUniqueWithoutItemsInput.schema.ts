// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleWhereUniqueInputObjectSchema } from '../internals';;
import { SaleUpdateWithoutItemsInputObjectSchema } from '../internals';;
import { SaleUncheckedUpdateWithoutItemsInputObjectSchema } from '../internals';;
import { SaleCreateWithoutItemsInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateWithoutItemsInputObjectSchema } from '../internals';

export const SaleUpsertWithWhereUniqueWithoutItemsInputObjectSchema = Yup.object({
    where: SaleWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([SaleUpdateWithoutItemsInputObjectSchema,
SaleUncheckedUpdateWithoutItemsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([SaleCreateWithoutItemsInputObjectSchema,
SaleUncheckedCreateWithoutItemsInputObjectSchema])
});
