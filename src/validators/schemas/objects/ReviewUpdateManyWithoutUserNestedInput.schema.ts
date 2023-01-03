// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ReviewCreateWithoutUserInputObjectSchema } from '../internals';;
import { ReviewUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { ReviewCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { ReviewUpsertWithWhereUniqueWithoutUserInputObjectSchema } from '../internals';;
import { ReviewCreateManyUserInputEnvelopeObjectSchema } from '../internals';;
import { ReviewWhereUniqueInputObjectSchema } from '../internals';;
import { ReviewUpdateWithWhereUniqueWithoutUserInputObjectSchema } from '../internals';;
import { ReviewUpdateManyWithWhereWithoutUserInputObjectSchema } from '../internals';;
import { ReviewScalarWhereInputObjectSchema } from '../internals';

export const ReviewUpdateManyWithoutUserNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ReviewCreateWithoutUserInputObjectSchema,
Yup.array().of(ReviewCreateWithoutUserInputObjectSchema),
ReviewUncheckedCreateWithoutUserInputObjectSchema,
Yup.array().of(ReviewUncheckedCreateWithoutUserInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ReviewCreateOrConnectWithoutUserInputObjectSchema,
Yup.array().of(ReviewCreateOrConnectWithoutUserInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([ReviewUpsertWithWhereUniqueWithoutUserInputObjectSchema,
Yup.array().of(ReviewUpsertWithWhereUniqueWithoutUserInputObjectSchema)]),  createMany: ReviewCreateManyUserInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([ReviewWhereUniqueInputObjectSchema,
Yup.array().of(ReviewWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([ReviewWhereUniqueInputObjectSchema,
Yup.array().of(ReviewWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([ReviewWhereUniqueInputObjectSchema,
Yup.array().of(ReviewWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([ReviewWhereUniqueInputObjectSchema,
Yup.array().of(ReviewWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([ReviewUpdateWithWhereUniqueWithoutUserInputObjectSchema,
Yup.array().of(ReviewUpdateWithWhereUniqueWithoutUserInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([ReviewUpdateManyWithWhereWithoutUserInputObjectSchema,
Yup.array().of(ReviewUpdateManyWithWhereWithoutUserInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([ReviewScalarWhereInputObjectSchema,
Yup.array().of(ReviewScalarWhereInputObjectSchema)])
});
