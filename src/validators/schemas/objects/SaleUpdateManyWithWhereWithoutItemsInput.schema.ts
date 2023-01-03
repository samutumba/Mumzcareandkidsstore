// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleScalarWhereInputObjectSchema } from '../internals';;
import { SaleUpdateManyMutationInputObjectSchema } from '../internals';;
import { SaleUncheckedUpdateManyWithoutSalesInputObjectSchema } from '../internals';

export const SaleUpdateManyWithWhereWithoutItemsInputObjectSchema = Yup.object({
    where: SaleScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([SaleUpdateManyMutationInputObjectSchema,
SaleUncheckedUpdateManyWithoutSalesInputObjectSchema])
});
