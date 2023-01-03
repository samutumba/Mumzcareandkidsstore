// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { TransactionUncheckedUpdateManyWithoutSalesNestedInputObjectSchema } from '../internals';;
import { CartItemUncheckedUpdateManyWithoutSalesNestedInputObjectSchema } from '../internals';;
import { ItemUncheckedUpdateManyWithoutSalesNestedInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { SaleUpdateitemsIdInputObjectSchema } from '../internals';

export const SaleUncheckedUpdateWithoutUserInputObjectSchema = Yup.object({
    reference: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  payments: TransactionUncheckedUpdateManyWithoutSalesNestedInputObjectSchema,  products: CartItemUncheckedUpdateManyWithoutSalesNestedInputObjectSchema,  items: ItemUncheckedUpdateManyWithoutSalesNestedInputObjectSchema,  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  itemsId: Yup.mixed().oneOfSchemas([SaleUpdateitemsIdInputObjectSchema,
Yup.array().of(Yup.string())])
});
