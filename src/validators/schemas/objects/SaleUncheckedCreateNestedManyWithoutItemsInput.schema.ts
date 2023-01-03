// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleCreateWithoutItemsInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateWithoutItemsInputObjectSchema } from '../internals';;
import { SaleCreateOrConnectWithoutItemsInputObjectSchema } from '../internals';;
import { SaleWhereUniqueInputObjectSchema } from '../internals';

export const SaleUncheckedCreateNestedManyWithoutItemsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SaleCreateWithoutItemsInputObjectSchema,
Yup.array().of(SaleCreateWithoutItemsInputObjectSchema),
SaleUncheckedCreateWithoutItemsInputObjectSchema,
Yup.array().of(SaleUncheckedCreateWithoutItemsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([SaleCreateOrConnectWithoutItemsInputObjectSchema,
Yup.array().of(SaleCreateOrConnectWithoutItemsInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([SaleWhereUniqueInputObjectSchema,
Yup.array().of(SaleWhereUniqueInputObjectSchema)])
});
