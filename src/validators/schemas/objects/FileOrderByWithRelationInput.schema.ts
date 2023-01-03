// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { EventOrderByWithRelationInputObjectSchema } from '../internals';;
import { DeliveryOrderByWithRelationInputObjectSchema } from '../internals';;
import { PickupOrderByWithRelationInputObjectSchema } from '../internals';;
import { LocationOrderByWithRelationInputObjectSchema } from '../internals';;
import { ProductOrderByWithRelationInputObjectSchema } from '../internals';;
import { AdminOrderByRelationAggregateInputObjectSchema } from '../internals';

export const FileOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  fileKey: SortOrderSchema,  link: SortOrderSchema,  type: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  events: EventOrderByWithRelationInputObjectSchema,  eventsId: SortOrderSchema,  deliveries: DeliveryOrderByWithRelationInputObjectSchema,  deliveriesId: SortOrderSchema,  pickups: PickupOrderByWithRelationInputObjectSchema,  pickupsId: SortOrderSchema,  locations: LocationOrderByWithRelationInputObjectSchema,  locationsId: SortOrderSchema,  products: ProductOrderByWithRelationInputObjectSchema,  productsId: SortOrderSchema,  admins: AdminOrderByRelationAggregateInputObjectSchema
});
