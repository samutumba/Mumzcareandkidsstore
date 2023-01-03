// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductCreateNestedOneWithoutReviewsInputObjectSchema } from '../internals';;
import { UserCreateNestedOneWithoutReviewsInputObjectSchema } from '../internals';

export const ReviewCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  products: ProductCreateNestedOneWithoutReviewsInputObjectSchema,  user: UserCreateNestedOneWithoutReviewsInputObjectSchema,  rating: Yup.number(),  description: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date()
});
