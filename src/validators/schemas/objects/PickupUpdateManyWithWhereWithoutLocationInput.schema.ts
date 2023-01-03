// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupScalarWhereInputObjectSchema } from '../internals';;
import { PickupUpdateManyMutationInputObjectSchema } from '../internals';;
import { PickupUncheckedUpdateManyWithoutPickupsInputObjectSchema } from '../internals';

export const PickupUpdateManyWithWhereWithoutLocationInputObjectSchema = Yup.object({
    where: PickupScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([PickupUpdateManyMutationInputObjectSchema,
PickupUncheckedUpdateManyWithoutPickupsInputObjectSchema])
});
