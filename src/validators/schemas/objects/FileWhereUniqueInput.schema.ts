// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const FileWhereUniqueInputObjectSchema = Yup.object({
    id: Yup.string(),  fileKey: Yup.string(),  link: Yup.string()
});
