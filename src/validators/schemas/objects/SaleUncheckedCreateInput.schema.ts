// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionUncheckedCreateNestedManyWithoutSalesInputObjectSchema } from '../internals';;
import { CartItemUncheckedCreateNestedManyWithoutSalesInputObjectSchema } from '../internals';;
import { ItemUncheckedCreateNestedManyWithoutSalesInputObjectSchema } from '../internals';;
import { SaleCreateitemsIdInputObjectSchema } from '../internals';

export const SaleUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  reference: Yup.string().required(),  payments: TransactionUncheckedCreateNestedManyWithoutSalesInputObjectSchema,  products: CartItemUncheckedCreateNestedManyWithoutSalesInputObjectSchema,  items: ItemUncheckedCreateNestedManyWithoutSalesInputObjectSchema,  updatedAt: Yup.date(),  createdAt: Yup.date(),  usersId: Yup.mixed().oneOfSchemas([Yup.string()]),  itemsId: Yup.mixed().oneOfSchemas([SaleCreateitemsIdInputObjectSchema,
Yup.array().of(Yup.string())])
});
