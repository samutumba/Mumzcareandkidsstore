// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductCreateWithoutReviewsInputObjectSchema } from '../internals';;
import { ProductUncheckedCreateWithoutReviewsInputObjectSchema } from '../internals';;
import { ProductCreateOrConnectWithoutReviewsInputObjectSchema } from '../internals';;
import { ProductWhereUniqueInputObjectSchema } from '../internals';

export const ProductCreateNestedOneWithoutReviewsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ProductCreateWithoutReviewsInputObjectSchema,
ProductUncheckedCreateWithoutReviewsInputObjectSchema]),  connectOrCreate: ProductCreateOrConnectWithoutReviewsInputObjectSchema,  connect: ProductWhereUniqueInputObjectSchema
});
