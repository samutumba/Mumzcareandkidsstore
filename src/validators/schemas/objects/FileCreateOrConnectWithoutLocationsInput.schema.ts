// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileCreateWithoutLocationsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutLocationsInputObjectSchema } from '../internals';

export const FileCreateOrConnectWithoutLocationsInputObjectSchema = Yup.object({
    where: FileWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([FileCreateWithoutLocationsInputObjectSchema,
FileUncheckedCreateWithoutLocationsInputObjectSchema])
});
