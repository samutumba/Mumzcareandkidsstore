// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateNestedOneWithoutSalesInputObjectSchema } from '../internals';;
import { TransactionCreateNestedManyWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemCreateNestedManyWithoutSalesInputObjectSchema } from '../internals';;
import { SaleCreateitemsIdInputObjectSchema } from '../internals';

export const SaleCreateWithoutItemsInputObjectSchema = Yup.object({
    id: Yup.string(),  reference: Yup.string().required(),  user: UserCreateNestedOneWithoutSalesInputObjectSchema,  payments: TransactionCreateNestedManyWithoutSalesInputObjectSchema,  products: CartItemCreateNestedManyWithoutSalesInputObjectSchema,  updatedAt: Yup.date(),  createdAt: Yup.date(),  itemsId: Yup.mixed().oneOfSchemas([SaleCreateitemsIdInputObjectSchema,
Yup.array().of(Yup.string())])
});
