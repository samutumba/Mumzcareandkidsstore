// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileUpdateWithoutDeliveriesInputObjectSchema } from '../internals';;
import { FileUncheckedUpdateWithoutDeliveriesInputObjectSchema } from '../internals';;
import { FileCreateWithoutDeliveriesInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutDeliveriesInputObjectSchema } from '../internals';

export const FileUpsertWithWhereUniqueWithoutDeliveriesInputObjectSchema = Yup.object({
    where: FileWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([FileUpdateWithoutDeliveriesInputObjectSchema,
FileUncheckedUpdateWithoutDeliveriesInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([FileCreateWithoutDeliveriesInputObjectSchema,
FileUncheckedCreateWithoutDeliveriesInputObjectSchema])
});
