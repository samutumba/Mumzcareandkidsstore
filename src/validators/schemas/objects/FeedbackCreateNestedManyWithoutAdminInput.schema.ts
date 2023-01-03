// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackCreateWithoutAdminInputObjectSchema } from '../internals';;
import { FeedbackUncheckedCreateWithoutAdminInputObjectSchema } from '../internals';;
import { FeedbackCreateOrConnectWithoutAdminInputObjectSchema } from '../internals';;
import { FeedbackCreateManyAdminInputEnvelopeObjectSchema } from '../internals';;
import { FeedbackWhereUniqueInputObjectSchema } from '../internals';

export const FeedbackCreateNestedManyWithoutAdminInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([FeedbackCreateWithoutAdminInputObjectSchema,
Yup.array().of(FeedbackCreateWithoutAdminInputObjectSchema),
FeedbackUncheckedCreateWithoutAdminInputObjectSchema,
Yup.array().of(FeedbackUncheckedCreateWithoutAdminInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([FeedbackCreateOrConnectWithoutAdminInputObjectSchema,
Yup.array().of(FeedbackCreateOrConnectWithoutAdminInputObjectSchema)]),  createMany: FeedbackCreateManyAdminInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([FeedbackWhereUniqueInputObjectSchema,
Yup.array().of(FeedbackWhereUniqueInputObjectSchema)])
});
