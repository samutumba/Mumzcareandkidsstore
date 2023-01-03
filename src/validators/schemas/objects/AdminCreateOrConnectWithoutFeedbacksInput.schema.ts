// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminWhereUniqueInputObjectSchema } from '../internals';;
import { AdminCreateWithoutFeedbacksInputObjectSchema } from '../internals';;
import { AdminUncheckedCreateWithoutFeedbacksInputObjectSchema } from '../internals';

export const AdminCreateOrConnectWithoutFeedbacksInputObjectSchema = Yup.object({
    where: AdminWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([AdminCreateWithoutFeedbacksInputObjectSchema,
AdminUncheckedCreateWithoutFeedbacksInputObjectSchema])
});
