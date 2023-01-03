// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ReviewCreateWithoutProductsInputObjectSchema } from '../internals';;
import { ReviewUncheckedCreateWithoutProductsInputObjectSchema } from '../internals';;
import { ReviewCreateOrConnectWithoutProductsInputObjectSchema } from '../internals';;
import { ReviewUpsertWithWhereUniqueWithoutProductsInputObjectSchema } from '../internals';;
import { ReviewCreateManyProductsInputEnvelopeObjectSchema } from '../internals';;
import { ReviewWhereUniqueInputObjectSchema } from '../internals';;
import { ReviewUpdateWithWhereUniqueWithoutProductsInputObjectSchema } from '../internals';;
import { ReviewUpdateManyWithWhereWithoutProductsInputObjectSchema } from '../internals';;
import { ReviewScalarWhereInputObjectSchema } from '../internals';

export const ReviewUpdateManyWithoutProductsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ReviewCreateWithoutProductsInputObjectSchema,
Yup.array().of(ReviewCreateWithoutProductsInputObjectSchema),
ReviewUncheckedCreateWithoutProductsInputObjectSchema,
Yup.array().of(ReviewUncheckedCreateWithoutProductsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ReviewCreateOrConnectWithoutProductsInputObjectSchema,
Yup.array().of(ReviewCreateOrConnectWithoutProductsInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([ReviewUpsertWithWhereUniqueWithoutProductsInputObjectSchema,
Yup.array().of(ReviewUpsertWithWhereUniqueWithoutProductsInputObjectSchema)]),  createMany: ReviewCreateManyProductsInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([ReviewWhereUniqueInputObjectSchema,
Yup.array().of(ReviewWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([ReviewWhereUniqueInputObjectSchema,
Yup.array().of(ReviewWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([ReviewWhereUniqueInputObjectSchema,
Yup.array().of(ReviewWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([ReviewWhereUniqueInputObjectSchema,
Yup.array().of(ReviewWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([ReviewUpdateWithWhereUniqueWithoutProductsInputObjectSchema,
Yup.array().of(ReviewUpdateWithWhereUniqueWithoutProductsInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([ReviewUpdateManyWithWhereWithoutProductsInputObjectSchema,
Yup.array().of(ReviewUpdateManyWithWhereWithoutProductsInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([ReviewScalarWhereInputObjectSchema,
Yup.array().of(ReviewScalarWhereInputObjectSchema)])
});
