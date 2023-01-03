// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const UserCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  auth: SortOrderSchema,  createdAt: SortOrderSchema,  lastAccessed: SortOrderSchema,  name: SortOrderSchema,  password: SortOrderSchema,  phone: SortOrderSchema,  points: SortOrderSchema,  policyAccepted: SortOrderSchema,  preferredCommunicationMethod: SortOrderSchema,  updatedAt: SortOrderSchema,  username: SortOrderSchema,  email: SortOrderSchema,  whatsAppNumber: SortOrderSchema,  googleId: SortOrderSchema,  facebookId: SortOrderSchema,  verified: SortOrderSchema
});
