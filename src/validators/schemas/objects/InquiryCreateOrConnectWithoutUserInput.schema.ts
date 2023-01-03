// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InquiryWhereUniqueInputObjectSchema } from '../internals';;
import { InquiryCreateWithoutUserInputObjectSchema } from '../internals';;
import { InquiryUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const InquiryCreateOrConnectWithoutUserInputObjectSchema = Yup.object({
    where: InquiryWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([InquiryCreateWithoutUserInputObjectSchema,
InquiryUncheckedCreateWithoutUserInputObjectSchema])
});
