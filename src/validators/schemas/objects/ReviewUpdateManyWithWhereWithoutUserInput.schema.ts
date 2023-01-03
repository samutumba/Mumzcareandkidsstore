// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ReviewScalarWhereInputObjectSchema } from '../internals';;
import { ReviewUpdateManyMutationInputObjectSchema } from '../internals';;
import { ReviewUncheckedUpdateManyWithoutReviewsInputObjectSchema } from '../internals';

export const ReviewUpdateManyWithWhereWithoutUserInputObjectSchema = Yup.object({
    where: ReviewScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ReviewUpdateManyMutationInputObjectSchema,
ReviewUncheckedUpdateManyWithoutReviewsInputObjectSchema])
});
