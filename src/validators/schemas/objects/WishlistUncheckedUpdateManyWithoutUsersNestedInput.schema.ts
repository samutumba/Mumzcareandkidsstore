// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { WishlistCreateWithoutUsersInputObjectSchema } from '../internals';;
import { WishlistUncheckedCreateWithoutUsersInputObjectSchema } from '../internals';;
import { WishlistCreateOrConnectWithoutUsersInputObjectSchema } from '../internals';;
import { WishlistUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from '../internals';;
import { WishlistCreateManyUsersInputEnvelopeObjectSchema } from '../internals';;
import { WishlistWhereUniqueInputObjectSchema } from '../internals';;
import { WishlistUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from '../internals';;
import { WishlistUpdateManyWithWhereWithoutUsersInputObjectSchema } from '../internals';;
import { WishlistScalarWhereInputObjectSchema } from '../internals';

export const WishlistUncheckedUpdateManyWithoutUsersNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([WishlistCreateWithoutUsersInputObjectSchema,
Yup.array().of(WishlistCreateWithoutUsersInputObjectSchema),
WishlistUncheckedCreateWithoutUsersInputObjectSchema,
Yup.array().of(WishlistUncheckedCreateWithoutUsersInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([WishlistCreateOrConnectWithoutUsersInputObjectSchema,
Yup.array().of(WishlistCreateOrConnectWithoutUsersInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([WishlistUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
Yup.array().of(WishlistUpsertWithWhereUniqueWithoutUsersInputObjectSchema)]),  createMany: WishlistCreateManyUsersInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([WishlistWhereUniqueInputObjectSchema,
Yup.array().of(WishlistWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([WishlistWhereUniqueInputObjectSchema,
Yup.array().of(WishlistWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([WishlistWhereUniqueInputObjectSchema,
Yup.array().of(WishlistWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([WishlistWhereUniqueInputObjectSchema,
Yup.array().of(WishlistWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([WishlistUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
Yup.array().of(WishlistUpdateWithWhereUniqueWithoutUsersInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([WishlistUpdateManyWithWhereWithoutUsersInputObjectSchema,
Yup.array().of(WishlistUpdateManyWithWhereWithoutUsersInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([WishlistScalarWhereInputObjectSchema,
Yup.array().of(WishlistScalarWhereInputObjectSchema)])
});
