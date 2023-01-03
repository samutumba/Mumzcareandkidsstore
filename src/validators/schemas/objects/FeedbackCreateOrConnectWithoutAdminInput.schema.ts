// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackWhereUniqueInputObjectSchema } from '../internals';;
import { FeedbackCreateWithoutAdminInputObjectSchema } from '../internals';;
import { FeedbackUncheckedCreateWithoutAdminInputObjectSchema } from '../internals';

export const FeedbackCreateOrConnectWithoutAdminInputObjectSchema = Yup.object({
    where: FeedbackWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([FeedbackCreateWithoutAdminInputObjectSchema,
FeedbackUncheckedCreateWithoutAdminInputObjectSchema])
});
