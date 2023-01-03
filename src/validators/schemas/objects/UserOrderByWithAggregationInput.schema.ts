// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { UserCountOrderByAggregateInputObjectSchema } from '../internals';;
import { UserAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { UserMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { UserMinOrderByAggregateInputObjectSchema } from '../internals';;
import { UserSumOrderByAggregateInputObjectSchema } from '../internals';

export const UserOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  auth: SortOrderSchema,  createdAt: SortOrderSchema,  lastAccessed: SortOrderSchema,  name: SortOrderSchema,  password: SortOrderSchema,  phone: SortOrderSchema,  points: SortOrderSchema,  policyAccepted: SortOrderSchema,  preferredCommunicationMethod: SortOrderSchema,  updatedAt: SortOrderSchema,  username: SortOrderSchema,  email: SortOrderSchema,  whatsAppNumber: SortOrderSchema,  googleId: SortOrderSchema,  facebookId: SortOrderSchema,  verified: SortOrderSchema,  _count: UserCountOrderByAggregateInputObjectSchema,  _avg: UserAvgOrderByAggregateInputObjectSchema,  _max: UserMaxOrderByAggregateInputObjectSchema,  _min: UserMinOrderByAggregateInputObjectSchema,  _sum: UserSumOrderByAggregateInputObjectSchema
});
