// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InquiryWhereUniqueInputObjectSchema } from '../internals';;
import { InquiryCreateWithoutFeedbackInputObjectSchema } from '../internals';;
import { InquiryUncheckedCreateWithoutFeedbackInputObjectSchema } from '../internals';

export const InquiryCreateOrConnectWithoutFeedbackInputObjectSchema = Yup.object({
    where: InquiryWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([InquiryCreateWithoutFeedbackInputObjectSchema,
InquiryUncheckedCreateWithoutFeedbackInputObjectSchema])
});
