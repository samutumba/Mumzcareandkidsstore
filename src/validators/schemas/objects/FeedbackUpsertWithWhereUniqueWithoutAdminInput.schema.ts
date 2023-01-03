// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackWhereUniqueInputObjectSchema } from '../internals';;
import { FeedbackUpdateWithoutAdminInputObjectSchema } from '../internals';;
import { FeedbackUncheckedUpdateWithoutAdminInputObjectSchema } from '../internals';;
import { FeedbackCreateWithoutAdminInputObjectSchema } from '../internals';;
import { FeedbackUncheckedCreateWithoutAdminInputObjectSchema } from '../internals';

export const FeedbackUpsertWithWhereUniqueWithoutAdminInputObjectSchema = Yup.object({
    where: FeedbackWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([FeedbackUpdateWithoutAdminInputObjectSchema,
FeedbackUncheckedUpdateWithoutAdminInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([FeedbackCreateWithoutAdminInputObjectSchema,
FeedbackUncheckedCreateWithoutAdminInputObjectSchema])
});
