// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupCreateWithoutFilesInputObjectSchema } from '../internals';;
import { PickupUncheckedCreateWithoutFilesInputObjectSchema } from '../internals';;
import { PickupCreateOrConnectWithoutFilesInputObjectSchema } from '../internals';;
import { PickupUpsertWithoutFilesInputObjectSchema } from '../internals';;
import { PickupWhereUniqueInputObjectSchema } from '../internals';;
import { PickupUpdateWithoutFilesInputObjectSchema } from '../internals';;
import { PickupUncheckedUpdateWithoutFilesInputObjectSchema } from '../internals';

export const PickupUpdateOneWithoutFilesNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PickupCreateWithoutFilesInputObjectSchema,
PickupUncheckedCreateWithoutFilesInputObjectSchema]),  connectOrCreate: PickupCreateOrConnectWithoutFilesInputObjectSchema,  upsert: PickupUpsertWithoutFilesInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: PickupWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PickupUpdateWithoutFilesInputObjectSchema,
PickupUncheckedUpdateWithoutFilesInputObjectSchema])
});
