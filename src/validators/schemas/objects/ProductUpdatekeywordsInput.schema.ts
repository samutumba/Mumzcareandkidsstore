// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ProductUpdatekeywordsInputObjectSchema = Yup.object({
    set: Yup.array().of(Yup.string()),  push: Yup.mixed().oneOfSchemas([Yup.string(),
Yup.array().of(Yup.string())])
});
