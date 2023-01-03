// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationWhereUniqueInputObjectSchema } from '../internals';;
import { LocationCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutPickupsInputObjectSchema } from '../internals';

export const LocationCreateOrConnectWithoutPickupsInputObjectSchema = Yup.object({
    where: LocationWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([LocationCreateWithoutPickupsInputObjectSchema,
LocationUncheckedCreateWithoutPickupsInputObjectSchema])
});
