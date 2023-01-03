// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleWhereUniqueInputObjectSchema } from '../internals';;
import { SaleUpdateWithoutItemsInputObjectSchema } from '../internals';;
import { SaleUncheckedUpdateWithoutItemsInputObjectSchema } from '../internals';

export const SaleUpdateWithWhereUniqueWithoutItemsInputObjectSchema = Yup.object({
    where: SaleWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([SaleUpdateWithoutItemsInputObjectSchema,
SaleUncheckedUpdateWithoutItemsInputObjectSchema])
});
