// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductCreateNestedOneWithoutReviewsInputObjectSchema } from '../internals';

export const ReviewCreateWithoutUserInputObjectSchema = Yup.object({
    id: Yup.string(),  products: ProductCreateNestedOneWithoutReviewsInputObjectSchema,  rating: Yup.number(),  description: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date()
});
