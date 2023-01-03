// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateNestedManyWithoutPickupsInputObjectSchema } from '../internals';;
import { UserCreateNestedOneWithoutPickupsInputObjectSchema } from '../internals';

export const PickupCreateWithoutLocationInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  files: FileCreateNestedManyWithoutPickupsInputObjectSchema,  service: Yup.string().required(),  status: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  user: UserCreateNestedOneWithoutPickupsInputObjectSchema,  contact: Yup.string().required(),  note: Yup.string().required()
});
