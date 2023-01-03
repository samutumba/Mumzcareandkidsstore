// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileUpdateWithoutLocationsInputObjectSchema } from '../internals';;
import { FileUncheckedUpdateWithoutLocationsInputObjectSchema } from '../internals';

export const FileUpdateWithWhereUniqueWithoutLocationsInputObjectSchema = Yup.object({
    where: FileWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([FileUpdateWithoutLocationsInputObjectSchema,
FileUncheckedUpdateWithoutLocationsInputObjectSchema])
});
