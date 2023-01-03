// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationCreateNestedOneWithoutPickupsInputObjectSchema } from '../internals';;
import { FileCreateNestedManyWithoutPickupsInputObjectSchema } from '../internals';;
import { UserCreateNestedOneWithoutPickupsInputObjectSchema } from '../internals';

export const PickupCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  location: LocationCreateNestedOneWithoutPickupsInputObjectSchema,  files: FileCreateNestedManyWithoutPickupsInputObjectSchema,  service: Yup.string().required(),  status: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  user: UserCreateNestedOneWithoutPickupsInputObjectSchema,  contact: Yup.string().required(),  note: Yup.string().required()
});
