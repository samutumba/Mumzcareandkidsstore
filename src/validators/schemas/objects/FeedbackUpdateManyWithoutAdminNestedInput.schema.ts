// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackCreateWithoutAdminInputObjectSchema } from '../internals';;
import { FeedbackUncheckedCreateWithoutAdminInputObjectSchema } from '../internals';;
import { FeedbackCreateOrConnectWithoutAdminInputObjectSchema } from '../internals';;
import { FeedbackUpsertWithWhereUniqueWithoutAdminInputObjectSchema } from '../internals';;
import { FeedbackCreateManyAdminInputEnvelopeObjectSchema } from '../internals';;
import { FeedbackWhereUniqueInputObjectSchema } from '../internals';;
import { FeedbackUpdateWithWhereUniqueWithoutAdminInputObjectSchema } from '../internals';;
import { FeedbackUpdateManyWithWhereWithoutAdminInputObjectSchema } from '../internals';;
import { FeedbackScalarWhereInputObjectSchema } from '../internals';

export const FeedbackUpdateManyWithoutAdminNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([FeedbackCreateWithoutAdminInputObjectSchema,
Yup.array().of(FeedbackCreateWithoutAdminInputObjectSchema),
FeedbackUncheckedCreateWithoutAdminInputObjectSchema,
Yup.array().of(FeedbackUncheckedCreateWithoutAdminInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([FeedbackCreateOrConnectWithoutAdminInputObjectSchema,
Yup.array().of(FeedbackCreateOrConnectWithoutAdminInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([FeedbackUpsertWithWhereUniqueWithoutAdminInputObjectSchema,
Yup.array().of(FeedbackUpsertWithWhereUniqueWithoutAdminInputObjectSchema)]),  createMany: FeedbackCreateManyAdminInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([FeedbackWhereUniqueInputObjectSchema,
Yup.array().of(FeedbackWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([FeedbackWhereUniqueInputObjectSchema,
Yup.array().of(FeedbackWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([FeedbackWhereUniqueInputObjectSchema,
Yup.array().of(FeedbackWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([FeedbackWhereUniqueInputObjectSchema,
Yup.array().of(FeedbackWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([FeedbackUpdateWithWhereUniqueWithoutAdminInputObjectSchema,
Yup.array().of(FeedbackUpdateWithWhereUniqueWithoutAdminInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([FeedbackUpdateManyWithWhereWithoutAdminInputObjectSchema,
Yup.array().of(FeedbackUpdateManyWithWhereWithoutAdminInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([FeedbackScalarWhereInputObjectSchema,
Yup.array().of(FeedbackScalarWhereInputObjectSchema)])
});
