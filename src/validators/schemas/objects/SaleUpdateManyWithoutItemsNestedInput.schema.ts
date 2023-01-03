// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleCreateWithoutItemsInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateWithoutItemsInputObjectSchema } from '../internals';;
import { SaleCreateOrConnectWithoutItemsInputObjectSchema } from '../internals';;
import { SaleUpsertWithWhereUniqueWithoutItemsInputObjectSchema } from '../internals';;
import { SaleWhereUniqueInputObjectSchema } from '../internals';;
import { SaleUpdateWithWhereUniqueWithoutItemsInputObjectSchema } from '../internals';;
import { SaleUpdateManyWithWhereWithoutItemsInputObjectSchema } from '../internals';;
import { SaleScalarWhereInputObjectSchema } from '../internals';

export const SaleUpdateManyWithoutItemsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SaleCreateWithoutItemsInputObjectSchema,
Yup.array().of(SaleCreateWithoutItemsInputObjectSchema),
SaleUncheckedCreateWithoutItemsInputObjectSchema,
Yup.array().of(SaleUncheckedCreateWithoutItemsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([SaleCreateOrConnectWithoutItemsInputObjectSchema,
Yup.array().of(SaleCreateOrConnectWithoutItemsInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([SaleUpsertWithWhereUniqueWithoutItemsInputObjectSchema,
Yup.array().of(SaleUpsertWithWhereUniqueWithoutItemsInputObjectSchema)]),  set: Yup.mixed().oneOfSchemas([SaleWhereUniqueInputObjectSchema,
Yup.array().of(SaleWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([SaleWhereUniqueInputObjectSchema,
Yup.array().of(SaleWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([SaleWhereUniqueInputObjectSchema,
Yup.array().of(SaleWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([SaleWhereUniqueInputObjectSchema,
Yup.array().of(SaleWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([SaleUpdateWithWhereUniqueWithoutItemsInputObjectSchema,
Yup.array().of(SaleUpdateWithWhereUniqueWithoutItemsInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([SaleUpdateManyWithWhereWithoutItemsInputObjectSchema,
Yup.array().of(SaleUpdateManyWithWhereWithoutItemsInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([SaleScalarWhereInputObjectSchema,
Yup.array().of(SaleScalarWhereInputObjectSchema)])
});
