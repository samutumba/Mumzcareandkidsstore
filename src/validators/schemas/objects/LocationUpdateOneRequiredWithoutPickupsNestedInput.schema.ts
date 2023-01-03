// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { LocationCreateOrConnectWithoutPickupsInputObjectSchema } from '../internals';;
import { LocationUpsertWithoutPickupsInputObjectSchema } from '../internals';;
import { LocationWhereUniqueInputObjectSchema } from '../internals';;
import { LocationUpdateWithoutPickupsInputObjectSchema } from '../internals';;
import { LocationUncheckedUpdateWithoutPickupsInputObjectSchema } from '../internals';

export const LocationUpdateOneRequiredWithoutPickupsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([LocationCreateWithoutPickupsInputObjectSchema,
LocationUncheckedCreateWithoutPickupsInputObjectSchema]),  connectOrCreate: LocationCreateOrConnectWithoutPickupsInputObjectSchema,  upsert: LocationUpsertWithoutPickupsInputObjectSchema,  connect: LocationWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([LocationUpdateWithoutPickupsInputObjectSchema,
LocationUncheckedUpdateWithoutPickupsInputObjectSchema])
});
