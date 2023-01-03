// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationCreateemailInputObjectSchema } from '../internals';;
import { LocationCreatephoneInputObjectSchema } from '../internals';;
import { PickupCreateNestedManyWithoutLocationInputObjectSchema } from '../internals';

export const LocationCreateWithoutImagesInputObjectSchema = Yup.object({
    id: Yup.string(),  v: Yup.number(),  address: Yup.string().required(),  email: Yup.mixed().oneOfSchemas([LocationCreateemailInputObjectSchema,
Yup.array().of(Yup.string())]),  isStore: Yup.boolean().required(),  maps: Yup.string().required(),  name: Yup.string().required(),  phone: Yup.mixed().oneOfSchemas([LocationCreatephoneInputObjectSchema,
Yup.array().of(Yup.string())]),  updatedAt: Yup.date(),  createdAt: Yup.date(),  pickups: PickupCreateNestedManyWithoutLocationInputObjectSchema
});
