// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackCreateWithoutInquiriesInputObjectSchema } from '../internals';;
import { FeedbackUncheckedCreateWithoutInquiriesInputObjectSchema } from '../internals';;
import { FeedbackCreateOrConnectWithoutInquiriesInputObjectSchema } from '../internals';;
import { FeedbackUpsertWithWhereUniqueWithoutInquiriesInputObjectSchema } from '../internals';;
import { FeedbackCreateManyInquiriesInputEnvelopeObjectSchema } from '../internals';;
import { FeedbackWhereUniqueInputObjectSchema } from '../internals';;
import { FeedbackUpdateWithWhereUniqueWithoutInquiriesInputObjectSchema } from '../internals';;
import { FeedbackUpdateManyWithWhereWithoutInquiriesInputObjectSchema } from '../internals';;
import { FeedbackScalarWhereInputObjectSchema } from '../internals';

export const FeedbackUpdateManyWithoutInquiriesNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([FeedbackCreateWithoutInquiriesInputObjectSchema,
Yup.array().of(FeedbackCreateWithoutInquiriesInputObjectSchema),
FeedbackUncheckedCreateWithoutInquiriesInputObjectSchema,
Yup.array().of(FeedbackUncheckedCreateWithoutInquiriesInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([FeedbackCreateOrConnectWithoutInquiriesInputObjectSchema,
Yup.array().of(FeedbackCreateOrConnectWithoutInquiriesInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([FeedbackUpsertWithWhereUniqueWithoutInquiriesInputObjectSchema,
Yup.array().of(FeedbackUpsertWithWhereUniqueWithoutInquiriesInputObjectSchema)]),  createMany: FeedbackCreateManyInquiriesInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([FeedbackWhereUniqueInputObjectSchema,
Yup.array().of(FeedbackWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([FeedbackWhereUniqueInputObjectSchema,
Yup.array().of(FeedbackWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([FeedbackWhereUniqueInputObjectSchema,
Yup.array().of(FeedbackWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([FeedbackWhereUniqueInputObjectSchema,
Yup.array().of(FeedbackWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([FeedbackUpdateWithWhereUniqueWithoutInquiriesInputObjectSchema,
Yup.array().of(FeedbackUpdateWithWhereUniqueWithoutInquiriesInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([FeedbackUpdateManyWithWhereWithoutInquiriesInputObjectSchema,
Yup.array().of(FeedbackUpdateManyWithWhereWithoutInquiriesInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([FeedbackScalarWhereInputObjectSchema,
Yup.array().of(FeedbackScalarWhereInputObjectSchema)])
});
