// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackWhereUniqueInputObjectSchema } from '../internals';;
import { FeedbackUpdateWithoutAdminInputObjectSchema } from '../internals';;
import { FeedbackUncheckedUpdateWithoutAdminInputObjectSchema } from '../internals';

export const FeedbackUpdateWithWhereUniqueWithoutAdminInputObjectSchema = Yup.object({
    where: FeedbackWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([FeedbackUpdateWithoutAdminInputObjectSchema,
FeedbackUncheckedUpdateWithoutAdminInputObjectSchema])
});
