// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ReviewCreateManyProductsInputObjectSchema = Yup.object({
    id: Yup.string(),  rating: Yup.number(),  description: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  usersId: Yup.string().required()
});
