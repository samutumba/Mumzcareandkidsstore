// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InquiryCreateWithoutUserInputObjectSchema } from '../internals';;
import { InquiryUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { InquiryCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { InquiryUpsertWithWhereUniqueWithoutUserInputObjectSchema } from '../internals';;
import { InquiryCreateManyUserInputEnvelopeObjectSchema } from '../internals';;
import { InquiryWhereUniqueInputObjectSchema } from '../internals';;
import { InquiryUpdateWithWhereUniqueWithoutUserInputObjectSchema } from '../internals';;
import { InquiryUpdateManyWithWhereWithoutUserInputObjectSchema } from '../internals';;
import { InquiryScalarWhereInputObjectSchema } from '../internals';

export const InquiryUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([InquiryCreateWithoutUserInputObjectSchema,
Yup.array().of(InquiryCreateWithoutUserInputObjectSchema),
InquiryUncheckedCreateWithoutUserInputObjectSchema,
Yup.array().of(InquiryUncheckedCreateWithoutUserInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([InquiryCreateOrConnectWithoutUserInputObjectSchema,
Yup.array().of(InquiryCreateOrConnectWithoutUserInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([InquiryUpsertWithWhereUniqueWithoutUserInputObjectSchema,
Yup.array().of(InquiryUpsertWithWhereUniqueWithoutUserInputObjectSchema)]),  createMany: InquiryCreateManyUserInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([InquiryWhereUniqueInputObjectSchema,
Yup.array().of(InquiryWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([InquiryWhereUniqueInputObjectSchema,
Yup.array().of(InquiryWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([InquiryWhereUniqueInputObjectSchema,
Yup.array().of(InquiryWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([InquiryWhereUniqueInputObjectSchema,
Yup.array().of(InquiryWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([InquiryUpdateWithWhereUniqueWithoutUserInputObjectSchema,
Yup.array().of(InquiryUpdateWithWhereUniqueWithoutUserInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([InquiryUpdateManyWithWhereWithoutUserInputObjectSchema,
Yup.array().of(InquiryUpdateManyWithWhereWithoutUserInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([InquiryScalarWhereInputObjectSchema,
Yup.array().of(InquiryScalarWhereInputObjectSchema)])
});
