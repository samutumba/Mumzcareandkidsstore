// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ReviewCreateWithoutUserInputObjectSchema } from '../internals';;
import { ReviewUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { ReviewCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { ReviewCreateManyUserInputEnvelopeObjectSchema } from '../internals';;
import { ReviewWhereUniqueInputObjectSchema } from '../internals';

export const ReviewCreateNestedManyWithoutUserInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ReviewCreateWithoutUserInputObjectSchema,
Yup.array().of(ReviewCreateWithoutUserInputObjectSchema),
ReviewUncheckedCreateWithoutUserInputObjectSchema,
Yup.array().of(ReviewUncheckedCreateWithoutUserInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ReviewCreateOrConnectWithoutUserInputObjectSchema,
Yup.array().of(ReviewCreateOrConnectWithoutUserInputObjectSchema)]),  createMany: ReviewCreateManyUserInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([ReviewWhereUniqueInputObjectSchema,
Yup.array().of(ReviewWhereUniqueInputObjectSchema)])
});
