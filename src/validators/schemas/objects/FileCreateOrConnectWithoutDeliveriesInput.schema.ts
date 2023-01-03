// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereUniqueInputObjectSchema } from '../internals';;
import { FileCreateWithoutDeliveriesInputObjectSchema } from '../internals';;
import { FileUncheckedCreateWithoutDeliveriesInputObjectSchema } from '../internals';

export const FileCreateOrConnectWithoutDeliveriesInputObjectSchema = Yup.object({
    where: FileWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([FileCreateWithoutDeliveriesInputObjectSchema,
FileUncheckedCreateWithoutDeliveriesInputObjectSchema])
});
