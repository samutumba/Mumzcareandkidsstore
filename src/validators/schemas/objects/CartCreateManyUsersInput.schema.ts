// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const CartCreateManyUsersInputObjectSchema = Yup.object({
    id: Yup.string(),  updatedAt: Yup.date(),  createdAt: Yup.date()
});
