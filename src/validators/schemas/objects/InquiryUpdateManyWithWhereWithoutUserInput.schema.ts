// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InquiryScalarWhereInputObjectSchema } from '../internals';;
import { InquiryUpdateManyMutationInputObjectSchema } from '../internals';;
import { InquiryUncheckedUpdateManyWithoutInquiriesInputObjectSchema } from '../internals';

export const InquiryUpdateManyWithWhereWithoutUserInputObjectSchema = Yup.object({
    where: InquiryScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([InquiryUpdateManyMutationInputObjectSchema,
InquiryUncheckedUpdateManyWithoutInquiriesInputObjectSchema])
});
