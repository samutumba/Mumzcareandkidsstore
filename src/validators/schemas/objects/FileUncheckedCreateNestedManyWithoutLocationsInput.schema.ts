// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateWithoutLocationsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutLocationsInputObjectSchema } from '../internals';;
import { FileCreateOrConnectWithoutLocationsInputObjectSchema } from '../internals';;
import { FileCreateManyLocationsInputEnvelopeObjectSchema } from '../internals';;
import { FileWhereUniqueInputObjectSchema } from '../internals';

export const FileUncheckedCreateNestedManyWithoutLocationsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([FileCreateWithoutLocationsInputObjectSchema,
Yup.array().of(FileCreateWithoutLocationsInputObjectSchema),
FileUncheckedCreateWithoutLocationsInputObjectSchema,
Yup.array().of(FileUncheckedCreateWithoutLocationsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([FileCreateOrConnectWithoutLocationsInputObjectSchema,
Yup.array().of(FileCreateOrConnectWithoutLocationsInputObjectSchema)]),  createMany: FileCreateManyLocationsInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)])
});
