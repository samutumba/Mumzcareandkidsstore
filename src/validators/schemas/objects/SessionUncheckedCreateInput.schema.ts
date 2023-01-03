// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const SessionUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.string().required(),  expires: Yup.date().required(),  session: Yup.string().required()
});
