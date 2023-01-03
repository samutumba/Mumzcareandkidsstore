// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ReviewWhereUniqueInputObjectSchema } from '../internals';;
import { ReviewUpdateWithoutUserInputObjectSchema } from '../internals';;
import { ReviewUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';

export const ReviewUpdateWithWhereUniqueWithoutUserInputObjectSchema = Yup.object({
    where: ReviewWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ReviewUpdateWithoutUserInputObjectSchema,
ReviewUncheckedUpdateWithoutUserInputObjectSchema])
});
