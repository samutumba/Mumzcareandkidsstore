// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InquiryUpdateWithoutFeedbackInputObjectSchema } from '../internals';;
import { InquiryUncheckedUpdateWithoutFeedbackInputObjectSchema } from '../internals';;
import { InquiryCreateWithoutFeedbackInputObjectSchema } from '../internals';;
import { InquiryUncheckedCreateWithoutFeedbackInputObjectSchema } from '../internals';

export const InquiryUpsertWithoutFeedbackInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([InquiryUpdateWithoutFeedbackInputObjectSchema,
InquiryUncheckedUpdateWithoutFeedbackInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([InquiryCreateWithoutFeedbackInputObjectSchema,
InquiryUncheckedCreateWithoutFeedbackInputObjectSchema])
});
