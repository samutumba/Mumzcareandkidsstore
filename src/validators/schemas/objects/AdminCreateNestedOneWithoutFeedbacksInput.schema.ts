// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminCreateWithoutFeedbacksInputObjectSchema } from '../internals';;
import { AdminUncheckedCreateWithoutFeedbacksInputObjectSchema } from '../internals';;
import { AdminCreateOrConnectWithoutFeedbacksInputObjectSchema } from '../internals';;
import { AdminWhereUniqueInputObjectSchema } from '../internals';

export const AdminCreateNestedOneWithoutFeedbacksInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([AdminCreateWithoutFeedbacksInputObjectSchema,
AdminUncheckedCreateWithoutFeedbacksInputObjectSchema]),  connectOrCreate: AdminCreateOrConnectWithoutFeedbacksInputObjectSchema,  connect: AdminWhereUniqueInputObjectSchema
});
