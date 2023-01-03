// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemUncheckedCreateNestedManyWithoutSalesInputObjectSchema } from '../internals';;
import { ItemUncheckedCreateNestedManyWithoutSalesInputObjectSchema } from '../internals';;
import { SaleCreateitemsIdInputObjectSchema } from '../internals';

export const SaleUncheckedCreateWithoutPaymentsInputObjectSchema = Yup.object({
    id: Yup.string(),  reference: Yup.string().required(),  products: CartItemUncheckedCreateNestedManyWithoutSalesInputObjectSchema,  items: ItemUncheckedCreateNestedManyWithoutSalesInputObjectSchema,  updatedAt: Yup.date(),  createdAt: Yup.date(),  usersId: Yup.mixed().oneOfSchemas([Yup.string()]),  itemsId: Yup.mixed().oneOfSchemas([SaleCreateitemsIdInputObjectSchema,
Yup.array().of(Yup.string())])
});
