// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackWhereUniqueInputObjectSchema } from '../internals';;
import { FeedbackCreateWithoutInquiriesInputObjectSchema } from '../internals';;
import { FeedbackUncheckedCreateWithoutInquiriesInputObjectSchema } from '../internals';

export const FeedbackCreateOrConnectWithoutInquiriesInputObjectSchema = Yup.object({
    where: FeedbackWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([FeedbackCreateWithoutInquiriesInputObjectSchema,
FeedbackUncheckedCreateWithoutInquiriesInputObjectSchema])
});
