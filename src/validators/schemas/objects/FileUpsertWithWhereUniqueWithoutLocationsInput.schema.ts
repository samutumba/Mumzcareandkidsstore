// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileUpdateWithoutLocationsInputObjectSchema } from '../internals';;
import { FileUncheckedUpdateWithoutLocationsInputObjectSchema } from '../internals';;
import { FileCreateWithoutLocationsInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutLocationsInputObjectSchema } from '../internals';

export const FileUpsertWithWhereUniqueWithoutLocationsInputObjectSchema = Yup.object({
    where: FileWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([FileUpdateWithoutLocationsInputObjectSchema,
FileUncheckedUpdateWithoutLocationsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([FileCreateWithoutLocationsInputObjectSchema,
FileUncheckedCreateWithoutLocationsInputObjectSchema])
});
