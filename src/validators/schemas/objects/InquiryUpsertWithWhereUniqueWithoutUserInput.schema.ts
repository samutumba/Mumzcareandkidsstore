// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InquiryWhereUniqueInputObjectSchema } from '../internals';;
import { InquiryUpdateWithoutUserInputObjectSchema } from '../internals';;
import { InquiryUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';;
import { InquiryCreateWithoutUserInputObjectSchema } from '../internals';;
import { InquiryUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const InquiryUpsertWithWhereUniqueWithoutUserInputObjectSchema = Yup.object({
    where: InquiryWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([InquiryUpdateWithoutUserInputObjectSchema,
InquiryUncheckedUpdateWithoutUserInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([InquiryCreateWithoutUserInputObjectSchema,
InquiryUncheckedCreateWithoutUserInputObjectSchema])
});
