// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackCreateWithoutInquiriesInputObjectSchema } from '../internals';;
import { FeedbackUncheckedCreateWithoutInquiriesInputObjectSchema } from '../internals';;
import { FeedbackCreateOrConnectWithoutInquiriesInputObjectSchema } from '../internals';;
import { FeedbackCreateManyInquiriesInputEnvelopeObjectSchema } from '../internals';;
import { FeedbackWhereUniqueInputObjectSchema } from '../internals';

export const FeedbackCreateNestedManyWithoutInquiriesInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([FeedbackCreateWithoutInquiriesInputObjectSchema,
Yup.array().of(FeedbackCreateWithoutInquiriesInputObjectSchema),
FeedbackUncheckedCreateWithoutInquiriesInputObjectSchema,
Yup.array().of(FeedbackUncheckedCreateWithoutInquiriesInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([FeedbackCreateOrConnectWithoutInquiriesInputObjectSchema,
Yup.array().of(FeedbackCreateOrConnectWithoutInquiriesInputObjectSchema)]),  createMany: FeedbackCreateManyInquiriesInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([FeedbackWhereUniqueInputObjectSchema,
Yup.array().of(FeedbackWhereUniqueInputObjectSchema)])
});
