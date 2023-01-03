// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InquiryWhereUniqueInputObjectSchema } from '../internals';;
import { InquiryUpdateWithoutUserInputObjectSchema } from '../internals';;
import { InquiryUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';

export const InquiryUpdateWithWhereUniqueWithoutUserInputObjectSchema = Yup.object({
    where: InquiryWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([InquiryUpdateWithoutUserInputObjectSchema,
InquiryUncheckedUpdateWithoutUserInputObjectSchema])
});
