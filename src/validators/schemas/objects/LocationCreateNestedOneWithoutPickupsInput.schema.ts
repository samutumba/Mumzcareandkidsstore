// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { LocationCreateOrConnectWithoutPickupsInputObjectSchema } from '../internals';;
import { LocationWhereUniqueInputObjectSchema } from '../internals';

export const LocationCreateNestedOneWithoutPickupsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([LocationCreateWithoutPickupsInputObjectSchema,
LocationUncheckedCreateWithoutPickupsInputObjectSchema]),  connectOrCreate: LocationCreateOrConnectWithoutPickupsInputObjectSchema,  connect: LocationWhereUniqueInputObjectSchema
});
