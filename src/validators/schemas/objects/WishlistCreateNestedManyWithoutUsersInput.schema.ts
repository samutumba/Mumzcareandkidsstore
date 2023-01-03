// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { WishlistCreateWithoutUsersInputObjectSchema } from '../internals';;
import { WishlistUncheckedCreateWithoutUsersInputObjectSchema } from '../internals';;
import { WishlistCreateOrConnectWithoutUsersInputObjectSchema } from '../internals';;
import { WishlistCreateManyUsersInputEnvelopeObjectSchema } from '../internals';;
import { WishlistWhereUniqueInputObjectSchema } from '../internals';

export const WishlistCreateNestedManyWithoutUsersInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([WishlistCreateWithoutUsersInputObjectSchema,
Yup.array().of(WishlistCreateWithoutUsersInputObjectSchema),
WishlistUncheckedCreateWithoutUsersInputObjectSchema,
Yup.array().of(WishlistUncheckedCreateWithoutUsersInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([WishlistCreateOrConnectWithoutUsersInputObjectSchema,
Yup.array().of(WishlistCreateOrConnectWithoutUsersInputObjectSchema)]),  createMany: WishlistCreateManyUsersInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([WishlistWhereUniqueInputObjectSchema,
Yup.array().of(WishlistWhereUniqueInputObjectSchema)])
});
