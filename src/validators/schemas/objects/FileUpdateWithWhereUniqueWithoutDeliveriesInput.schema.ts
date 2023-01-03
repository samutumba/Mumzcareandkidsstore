// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileUpdateWithoutDeliveriesInputObjectSchema } from '../internals';;
import { FileUncheckedUpdateWithoutDeliveriesInputObjectSchema } from '../internals';

export const FileUpdateWithWhereUniqueWithoutDeliveriesInputObjectSchema = Yup.object({
    where: FileWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([FileUpdateWithoutDeliveriesInputObjectSchema,
FileUncheckedUpdateWithoutDeliveriesInputObjectSchema])
});
