// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileUncheckedCreateNestedManyWithoutPickupsInputObjectSchema } from '../internals';

export const PickupUncheckedCreateWithoutLocationInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  files: FileUncheckedCreateNestedManyWithoutPickupsInputObjectSchema,  service: Yup.string().required(),  status: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  contact: Yup.string().required(),  note: Yup.string().required(),  usersId: Yup.string().required()
});
