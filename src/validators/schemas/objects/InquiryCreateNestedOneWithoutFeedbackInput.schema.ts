// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InquiryCreateWithoutFeedbackInputObjectSchema } from '../internals';;
import { InquiryUncheckedCreateWithoutFeedbackInputObjectSchema } from '../internals';;
import { InquiryCreateOrConnectWithoutFeedbackInputObjectSchema } from '../internals';;
import { InquiryWhereUniqueInputObjectSchema } from '../internals';

export const InquiryCreateNestedOneWithoutFeedbackInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([InquiryCreateWithoutFeedbackInputObjectSchema,
InquiryUncheckedCreateWithoutFeedbackInputObjectSchema]),  connectOrCreate: InquiryCreateOrConnectWithoutFeedbackInputObjectSchema,  connect: InquiryWhereUniqueInputObjectSchema
});
