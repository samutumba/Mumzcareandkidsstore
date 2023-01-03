// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminUpdateOneRequiredWithoutFeedbacksNestedInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { InquiryUpdateOneWithoutFeedbackNestedInputObjectSchema } from '../internals';

export const FeedbackUpdateInputObjectSchema = Yup.object({
    admin: AdminUpdateOneRequiredWithoutFeedbacksNestedInputObjectSchema,  message: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  inquiries: InquiryUpdateOneWithoutFeedbackNestedInputObjectSchema
});
