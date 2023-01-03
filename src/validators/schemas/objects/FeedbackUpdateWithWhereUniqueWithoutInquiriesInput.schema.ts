// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackWhereUniqueInputObjectSchema } from '../internals';;
import { FeedbackUpdateWithoutInquiriesInputObjectSchema } from '../internals';;
import { FeedbackUncheckedUpdateWithoutInquiriesInputObjectSchema } from '../internals';

export const FeedbackUpdateWithWhereUniqueWithoutInquiriesInputObjectSchema = Yup.object({
    where: FeedbackWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([FeedbackUpdateWithoutInquiriesInputObjectSchema,
FeedbackUncheckedUpdateWithoutInquiriesInputObjectSchema])
});
