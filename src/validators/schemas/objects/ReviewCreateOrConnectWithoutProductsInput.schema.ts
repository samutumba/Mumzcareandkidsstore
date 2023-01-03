// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ReviewWhereUniqueInputObjectSchema } from '../internals';;
import { ReviewCreateWithoutProductsInputObjectSchema } from '../internals';;
import { ReviewUncheckedCreateWithoutProductsInputObjectSchema } from '../internals';

export const ReviewCreateOrConnectWithoutProductsInputObjectSchema = Yup.object({
    where: ReviewWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ReviewCreateWithoutProductsInputObjectSchema,
ReviewUncheckedCreateWithoutProductsInputObjectSchema])
});
