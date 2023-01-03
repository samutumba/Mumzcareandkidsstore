// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackScalarWhereInputObjectSchema } from '../internals';;
import { FeedbackUpdateManyMutationInputObjectSchema } from '../internals';;
import { FeedbackUncheckedUpdateManyWithoutFeedbacksInputObjectSchema } from '../internals';

export const FeedbackUpdateManyWithWhereWithoutAdminInputObjectSchema = Yup.object({
    where: FeedbackScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([FeedbackUpdateManyMutationInputObjectSchema,
FeedbackUncheckedUpdateManyWithoutFeedbacksInputObjectSchema])
});
