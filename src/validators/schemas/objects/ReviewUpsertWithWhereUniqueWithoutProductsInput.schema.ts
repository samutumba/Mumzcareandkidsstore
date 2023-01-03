// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ReviewWhereUniqueInputObjectSchema } from '../internals';;
import { ReviewUpdateWithoutProductsInputObjectSchema } from '../internals';;
import { ReviewUncheckedUpdateWithoutProductsInputObjectSchema } from '../internals';;
import { ReviewCreateWithoutProductsInputObjectSchema } from '../internals';;
import { ReviewUncheckedCreateWithoutProductsInputObjectSchema } from '../internals';

export const ReviewUpsertWithWhereUniqueWithoutProductsInputObjectSchema = Yup.object({
    where: ReviewWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ReviewUpdateWithoutProductsInputObjectSchema,
ReviewUncheckedUpdateWithoutProductsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ReviewCreateWithoutProductsInputObjectSchema,
ReviewUncheckedCreateWithoutProductsInputObjectSchema])
});
