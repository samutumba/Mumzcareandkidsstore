// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ReviewCreateWithoutProductsInputObjectSchema } from '../internals';;
import { ReviewUncheckedCreateWithoutProductsInputObjectSchema } from '../internals';;
import { ReviewCreateOrConnectWithoutProductsInputObjectSchema } from '../internals';;
import { ReviewCreateManyProductsInputEnvelopeObjectSchema } from '../internals';;
import { ReviewWhereUniqueInputObjectSchema } from '../internals';

export const ReviewCreateNestedManyWithoutProductsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ReviewCreateWithoutProductsInputObjectSchema,
Yup.array().of(ReviewCreateWithoutProductsInputObjectSchema),
ReviewUncheckedCreateWithoutProductsInputObjectSchema,
Yup.array().of(ReviewUncheckedCreateWithoutProductsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ReviewCreateOrConnectWithoutProductsInputObjectSchema,
Yup.array().of(ReviewCreateOrConnectWithoutProductsInputObjectSchema)]),  createMany: ReviewCreateManyProductsInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([ReviewWhereUniqueInputObjectSchema,
Yup.array().of(ReviewWhereUniqueInputObjectSchema)])
});
