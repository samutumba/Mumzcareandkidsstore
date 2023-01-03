// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionCreateNestedManyWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemCreateNestedManyWithoutSalesInputObjectSchema } from '../internals';;
import { ItemCreateNestedManyWithoutSalesInputObjectSchema } from '../internals';;
import { SaleCreateitemsIdInputObjectSchema } from '../internals';

export const SaleCreateWithoutUserInputObjectSchema = Yup.object({
    id: Yup.string(),  reference: Yup.string().required(),  payments: TransactionCreateNestedManyWithoutSalesInputObjectSchema,  products: CartItemCreateNestedManyWithoutSalesInputObjectSchema,  items: ItemCreateNestedManyWithoutSalesInputObjectSchema,  updatedAt: Yup.date(),  createdAt: Yup.date(),  itemsId: Yup.mixed().oneOfSchemas([SaleCreateitemsIdInputObjectSchema,
Yup.array().of(Yup.string())])
});
