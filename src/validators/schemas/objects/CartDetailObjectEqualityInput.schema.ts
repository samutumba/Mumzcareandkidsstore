// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const CartDetailObjectEqualityInputObjectSchema = Yup.object({
    color: Yup.mixed().oneOfSchemas([Yup.string()]),  material: Yup.mixed().oneOfSchemas([Yup.string()]),  model: Yup.mixed().oneOfSchemas([Yup.string()]),  size: Yup.mixed().oneOfSchemas([Yup.string()])
});
