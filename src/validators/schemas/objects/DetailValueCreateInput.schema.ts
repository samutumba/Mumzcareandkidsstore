// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const DetailValueCreateInputObjectSchema = Yup.object({
    name: Yup.string().required(),  valueAdd: Yup.number().required()
});
