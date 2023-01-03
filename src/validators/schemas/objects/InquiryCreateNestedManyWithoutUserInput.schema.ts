// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InquiryCreateWithoutUserInputObjectSchema } from '../internals';;
import { InquiryUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { InquiryCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { InquiryCreateManyUserInputEnvelopeObjectSchema } from '../internals';;
import { InquiryWhereUniqueInputObjectSchema } from '../internals';

export const InquiryCreateNestedManyWithoutUserInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([InquiryCreateWithoutUserInputObjectSchema,
Yup.array().of(InquiryCreateWithoutUserInputObjectSchema),
InquiryUncheckedCreateWithoutUserInputObjectSchema,
Yup.array().of(InquiryUncheckedCreateWithoutUserInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([InquiryCreateOrConnectWithoutUserInputObjectSchema,
Yup.array().of(InquiryCreateOrConnectWithoutUserInputObjectSchema)]),  createMany: InquiryCreateManyUserInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([InquiryWhereUniqueInputObjectSchema,
Yup.array().of(InquiryWhereUniqueInputObjectSchema)])
});
