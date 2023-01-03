// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackWhereUniqueInputObjectSchema } from '../internals';;
import { FeedbackUpdateWithoutInquiriesInputObjectSchema } from '../internals';;
import { FeedbackUncheckedUpdateWithoutInquiriesInputObjectSchema } from '../internals';;
import { FeedbackCreateWithoutInquiriesInputObjectSchema } from '../internals';;
import { FeedbackUncheckedCreateWithoutInquiriesInputObjectSchema } from '../internals';

export const FeedbackUpsertWithWhereUniqueWithoutInquiriesInputObjectSchema = Yup.object({
    where: FeedbackWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([FeedbackUpdateWithoutInquiriesInputObjectSchema,
FeedbackUncheckedUpdateWithoutInquiriesInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([FeedbackCreateWithoutInquiriesInputObjectSchema,
FeedbackUncheckedCreateWithoutInquiriesInputObjectSchema])
});
