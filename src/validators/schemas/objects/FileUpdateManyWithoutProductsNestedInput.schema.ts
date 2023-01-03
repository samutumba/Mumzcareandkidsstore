// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateWithoutProductsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutProductsInputObjectSchema } from '../internals';;
import { FileCreateOrConnectWithoutProductsInputObjectSchema } from '../internals';;
import { FileUpsertWithWhereUniqueWithoutProductsInputObjectSchema } from '../internals';;
import { FileCreateManyProductsInputEnvelopeObjectSchema } from '../internals';;
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileUpdateWithWhereUniqueWithoutProductsInputObjectSchema } from '../internals';;
import { FileUpdateManyWithWhereWithoutProductsInputObjectSchema } from '../internals';;
import { FileScalarWhereInputObjectSchema } from '../internals';

export const FileUpdateManyWithoutProductsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([FileCreateWithoutProductsInputObjectSchema,
Yup.array().of(FileCreateWithoutProductsInputObjectSchema),
FileUncheckedCreateWithoutProductsInputObjectSchema,
Yup.array().of(FileUncheckedCreateWithoutProductsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([FileCreateOrConnectWithoutProductsInputObjectSchema,
Yup.array().of(FileCreateOrConnectWithoutProductsInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([FileUpsertWithWhereUniqueWithoutProductsInputObjectSchema,
Yup.array().of(FileUpsertWithWhereUniqueWithoutProductsInputObjectSchema)]),  createMany: FileCreateManyProductsInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([FileUpdateWithWhereUniqueWithoutProductsInputObjectSchema,
Yup.array().of(FileUpdateWithWhereUniqueWithoutProductsInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([FileUpdateManyWithWhereWithoutProductsInputObjectSchema,
Yup.array().of(FileUpdateManyWithWhereWithoutProductsInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([FileScalarWhereInputObjectSchema,
Yup.array().of(FileScalarWhereInputObjectSchema)])
});
