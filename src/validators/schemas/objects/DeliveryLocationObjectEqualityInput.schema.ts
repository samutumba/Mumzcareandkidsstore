// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const DeliveryLocationObjectEqualityInputObjectSchema = Yup.object({
    lgt: Yup.mixed().oneOfSchemas([Yup.string()]),  lat: Yup.mixed().oneOfSchemas([Yup.string()]),  note: Yup.string().required(),  district: Yup.string().required(),  town: Yup.string().required(),  street: Yup.string().required(),  country: Yup.string().required()
});
