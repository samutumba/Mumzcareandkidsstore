// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductCreateWithoutReviewsInputObjectSchema } from '../internals';;
import { ProductUncheckedCreateWithoutReviewsInputObjectSchema } from '../internals';;
import { ProductCreateOrConnectWithoutReviewsInputObjectSchema } from '../internals';;
import { ProductUpsertWithoutReviewsInputObjectSchema } from '../internals';;
import { ProductWhereUniqueInputObjectSchema } from '../internals';;
import { ProductUpdateWithoutReviewsInputObjectSchema } from '../internals';;
import { ProductUncheckedUpdateWithoutReviewsInputObjectSchema } from '../internals';

export const ProductUpdateOneRequiredWithoutReviewsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ProductCreateWithoutReviewsInputObjectSchema,
ProductUncheckedCreateWithoutReviewsInputObjectSchema]),  connectOrCreate: ProductCreateOrConnectWithoutReviewsInputObjectSchema,  upsert: ProductUpsertWithoutReviewsInputObjectSchema,  connect: ProductWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ProductUpdateWithoutReviewsInputObjectSchema,
ProductUncheckedUpdateWithoutReviewsInputObjectSchema])
});
