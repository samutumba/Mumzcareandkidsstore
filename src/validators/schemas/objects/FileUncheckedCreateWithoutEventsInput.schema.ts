// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminUncheckedCreateNestedManyWithoutProfileInputObjectSchema } from '../internals';

export const FileUncheckedCreateWithoutEventsInputObjectSchema = Yup.object({
    id: Yup.string(),  fileKey: Yup.string().required(),  link: Yup.string().required(),  type: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  deliveriesId: Yup.mixed().oneOfSchemas([Yup.string()]),  pickupsId: Yup.mixed().oneOfSchemas([Yup.string()]),  locationsId: Yup.mixed().oneOfSchemas([Yup.string()]),  productsId: Yup.mixed().oneOfSchemas([Yup.string()]),  admins: AdminUncheckedCreateNestedManyWithoutProfileInputObjectSchema
});
