// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateWithoutEventsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutEventsInputObjectSchema } from '../internals';;
import { FileCreateOrConnectWithoutEventsInputObjectSchema } from '../internals';;
import { FileCreateManyEventsInputEnvelopeObjectSchema } from '../internals';;
import { FileWhereUniqueInputObjectSchema } from '../internals';

export const FileUncheckedCreateNestedManyWithoutEventsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([FileCreateWithoutEventsInputObjectSchema,
Yup.array().of(FileCreateWithoutEventsInputObjectSchema),
FileUncheckedCreateWithoutEventsInputObjectSchema,
Yup.array().of(FileUncheckedCreateWithoutEventsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([FileCreateOrConnectWithoutEventsInputObjectSchema,
Yup.array().of(FileCreateOrConnectWithoutEventsInputObjectSchema)]),  createMany: FileCreateManyEventsInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([FileWhereUniqueInputObjectSchema,
Yup.array().of(FileWhereUniqueInputObjectSchema)])
});
