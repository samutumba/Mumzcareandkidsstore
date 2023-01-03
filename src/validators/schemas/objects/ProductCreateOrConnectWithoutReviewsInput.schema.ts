// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductWhereUniqueInputObjectSchema } from '../internals';;
import { ProductCreateWithoutReviewsInputObjectSchema } from '../internals';;
import { ProductUncheckedCreateWithoutReviewsInputObjectSchema } from '../internals';

export const ProductCreateOrConnectWithoutReviewsInputObjectSchema = Yup.object({
    where: ProductWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ProductCreateWithoutReviewsInputObjectSchema,
ProductUncheckedCreateWithoutReviewsInputObjectSchema])
});
