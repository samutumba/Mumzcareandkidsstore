// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const LocationCreatephoneInputObjectSchema = Yup.object({
    set: Yup.array().of(Yup.string()).required()
});
