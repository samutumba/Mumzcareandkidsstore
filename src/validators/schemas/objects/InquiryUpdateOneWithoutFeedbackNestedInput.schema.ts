// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InquiryCreateWithoutFeedbackInputObjectSchema } from '../internals';;
import { InquiryUncheckedCreateWithoutFeedbackInputObjectSchema } from '../internals';;
import { InquiryCreateOrConnectWithoutFeedbackInputObjectSchema } from '../internals';;
import { InquiryUpsertWithoutFeedbackInputObjectSchema } from '../internals';;
import { InquiryWhereUniqueInputObjectSchema } from '../internals';;
import { InquiryUpdateWithoutFeedbackInputObjectSchema } from '../internals';;
import { InquiryUncheckedUpdateWithoutFeedbackInputObjectSchema } from '../internals';

export const InquiryUpdateOneWithoutFeedbackNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([InquiryCreateWithoutFeedbackInputObjectSchema,
InquiryUncheckedCreateWithoutFeedbackInputObjectSchema]),  connectOrCreate: InquiryCreateOrConnectWithoutFeedbackInputObjectSchema,  upsert: InquiryUpsertWithoutFeedbackInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: InquiryWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([InquiryUpdateWithoutFeedbackInputObjectSchema,
InquiryUncheckedUpdateWithoutFeedbackInputObjectSchema])
});
