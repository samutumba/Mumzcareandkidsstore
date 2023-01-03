// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ErrorWhereUniqueInputObjectSchema = Yup.object({
    id: Yup.string()
});
