// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const FileCreateManyLocationsInputObjectSchema = Yup.object({
    id: Yup.string(),  fileKey: Yup.string().required(),  link: Yup.string().required(),  type: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  eventsId: Yup.mixed().oneOfSchemas([Yup.string()]),  deliveriesId: Yup.mixed().oneOfSchemas([Yup.string()]),  pickupsId: Yup.mixed().oneOfSchemas([Yup.string()]),  productsId: Yup.mixed().oneOfSchemas([Yup.string()])
});
