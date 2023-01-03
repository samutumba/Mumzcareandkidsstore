// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FeedbackScalarWhereInputObjectSchema } from '../internals';;
import { FeedbackUpdateManyMutationInputObjectSchema } from '../internals';;
import { FeedbackUncheckedUpdateManyWithoutFeedbackInputObjectSchema } from '../internals';

export const FeedbackUpdateManyWithWhereWithoutInquiriesInputObjectSchema = Yup.object({
    where: FeedbackScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([FeedbackUpdateManyMutationInputObjectSchema,
FeedbackUncheckedUpdateManyWithoutFeedbackInputObjectSchema])
});
