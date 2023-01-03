// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { PickupOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { CartOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { WishlistOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { SaleOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { ReviewOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { InquiryOrderByRelationAggregateInputObjectSchema } from '../internals';

export const UserOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  auth: SortOrderSchema,  createdAt: SortOrderSchema,  lastAccessed: SortOrderSchema,  name: SortOrderSchema,  password: SortOrderSchema,  phone: SortOrderSchema,  points: SortOrderSchema,  policyAccepted: SortOrderSchema,  preferredCommunicationMethod: SortOrderSchema,  updatedAt: SortOrderSchema,  username: SortOrderSchema,  email: SortOrderSchema,  whatsAppNumber: SortOrderSchema,  googleId: SortOrderSchema,  facebookId: SortOrderSchema,  verified: SortOrderSchema,  pickups: PickupOrderByRelationAggregateInputObjectSchema,  cart: CartOrderByRelationAggregateInputObjectSchema,  wishlist: WishlistOrderByRelationAggregateInputObjectSchema,  sales: SaleOrderByRelationAggregateInputObjectSchema,  reviews: ReviewOrderByRelationAggregateInputObjectSchema,  inquiries: InquiryOrderByRelationAggregateInputObjectSchema
});
