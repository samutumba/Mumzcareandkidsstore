// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ReviewWhereUniqueInputObjectSchema } from '../internals';;
import { ReviewUpdateWithoutProductsInputObjectSchema } from '../internals';;
import { ReviewUncheckedUpdateWithoutProductsInputObjectSchema } from '../internals';

export const ReviewUpdateWithWhereUniqueWithoutProductsInputObjectSchema = Yup.object({
    where: ReviewWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ReviewUpdateWithoutProductsInputObjectSchema,
ReviewUncheckedUpdateWithoutProductsInputObjectSchema])
});
