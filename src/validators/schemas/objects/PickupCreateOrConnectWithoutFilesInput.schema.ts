// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupWhereUniqueInputObjectSchema } from '../internals';;
import { PickupCreateWithoutFilesInputObjectSchema } from '../internals';;
import { PickupUncheckedCreateWithoutFilesInputObjectSchema } from '../internals';

export const PickupCreateOrConnectWithoutFilesInputObjectSchema = Yup.object({
    where: PickupWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PickupCreateWithoutFilesInputObjectSchema,
PickupUncheckedCreateWithoutFilesInputObjectSchema])
});
