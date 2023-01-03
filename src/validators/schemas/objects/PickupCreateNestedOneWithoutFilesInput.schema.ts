// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupCreateWithoutFilesInputObjectSchema } from '../internals';;
import { PickupUncheckedCreateWithoutFilesInputObjectSchema } from '../internals';;
import { PickupCreateOrConnectWithoutFilesInputObjectSchema } from '../internals';;
import { PickupWhereUniqueInputObjectSchema } from '../internals';

export const PickupCreateNestedOneWithoutFilesInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PickupCreateWithoutFilesInputObjectSchema,
PickupUncheckedCreateWithoutFilesInputObjectSchema]),  connectOrCreate: PickupCreateOrConnectWithoutFilesInputObjectSchema,  connect: PickupWhereUniqueInputObjectSchema
});
