// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationCreateemailInputObjectSchema } from '../internals';;
import { FileCreateNestedManyWithoutLocationsInputObjectSchema } from '../internals';;
import { LocationCreatephoneInputObjectSchema } from '../internals';

export const LocationCreateWithoutPickupsInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  address: Yup.string().required(),  email: Yup.mixed().oneOfSchemas([LocationCreateemailInputObjectSchema,
Yup.array().of(Yup.string())]),  images: FileCreateNestedManyWithoutLocationsInputObjectSchema,  isStore: Yup.boolean().required(),  maps: Yup.string().required(),  name: Yup.string().required(),  phone: Yup.mixed().oneOfSchemas([LocationCreatephoneInputObjectSchema,
Yup.array().of(Yup.string())]),  updatedAt: Yup.date(),  createdAt: Yup.date()
});
