// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminScalarWhereInputObjectSchema } from '../internals';;
import { AdminUpdateManyMutationInputObjectSchema } from '../internals';;
import { AdminUncheckedUpdateManyWithoutParticipantsInputObjectSchema } from '../internals';

export const AdminUpdateManyWithWhereWithoutEventsInputObjectSchema = Yup.object({
    where: AdminScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([AdminUpdateManyMutationInputObjectSchema,
AdminUncheckedUpdateManyWithoutParticipantsInputObjectSchema])
});
