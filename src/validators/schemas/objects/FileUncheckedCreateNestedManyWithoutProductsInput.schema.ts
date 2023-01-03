// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateWithoutProductsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutProductsInputObjectSchema } from '../internals';;
import { FileCreateOrConnectWithoutProductsInputObjectSchema } from '../internals';;
import { FileCreateManyProductsInputEnvelopeObjectSchema } from '../internals';;
import { FileWhereUniqueInputObjectSchema } from '../internals';

export const FileUncheckedCreateNestedManyWithoutProductsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([FileCreateWithoutProductsInputObjectSchema,
Yup.array().of(FileCreateWithoutProductsInputObjectSchema),
FileUncheckedCreateWithoutProductsInputObjectSchema,
Yup.array().of(FileUncheckedCreateWithoutProductsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([FileCreateOrConnectWithoutProductsInputObjectSchema,
Yup.array().of(FileCreateOrConnectWithoutProductsInputObjectSchema)]),  createMany: FileCreateManyProductsInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)])
});
