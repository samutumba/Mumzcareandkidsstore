// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { EventRelationFilterObjectSchema } from '../internals';;
import { EventWhereInputObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { DeliveryRelationFilterObjectSchema } from '../internals';;
import { DeliveryWhereInputObjectSchema } from '../internals';;
import { PickupRelationFilterObjectSchema } from '../internals';;
import { PickupWhereInputObjectSchema } from '../internals';;
import { LocationRelationFilterObjectSchema } from '../internals';;
import { LocationWhereInputObjectSchema } from '../internals';;
import { ProductRelationFilterObjectSchema } from '../internals';;
import { ProductWhereInputObjectSchema } from '../internals';;
import { AdminListRelationFilterObjectSchema } from '../internals';

export const FileWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => FileWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => FileWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => FileWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => FileWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => FileWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  fileKey: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  link: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  type: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  events: Yup.mixed().oneOfSchemas([EventRelationFilterObjectSchema,
EventWhereInputObjectSchema]),  eventsId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  deliveries: Yup.mixed().oneOfSchemas([DeliveryRelationFilterObjectSchema,
DeliveryWhereInputObjectSchema]),  deliveriesId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  pickups: Yup.mixed().oneOfSchemas([PickupRelationFilterObjectSchema,
PickupWhereInputObjectSchema]),  pickupsId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  locations: Yup.mixed().oneOfSchemas([LocationRelationFilterObjectSchema,
LocationWhereInputObjectSchema]),  locationsId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  products: Yup.mixed().oneOfSchemas([ProductRelationFilterObjectSchema,
ProductWhereInputObjectSchema]),  productsId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  admins: AdminListRelationFilterObjectSchema
});
