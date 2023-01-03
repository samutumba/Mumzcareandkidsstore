// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateNestedOneWithoutReviewsInputObjectSchema } from '../internals';

export const ReviewCreateWithoutProductsInputObjectSchema = Yup.object({
    id: Yup.string(),  user: UserCreateNestedOneWithoutReviewsInputObjectSchema,  rating: Yup.number(),  description: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date()
});
