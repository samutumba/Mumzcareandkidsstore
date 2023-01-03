// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { TransactionUncheckedUpdateManyWithoutSalesNestedInputObjectSchema } from '../internals';;
import { CartItemUncheckedUpdateManyWithoutSalesNestedInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { SaleUpdateitemsIdInputObjectSchema } from '../internals';

export const SaleUncheckedUpdateWithoutItemsInputObjectSchema = Yup.object({
    reference: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  payments: TransactionUncheckedUpdateManyWithoutSalesNestedInputObjectSchema,  products: CartItemUncheckedUpdateManyWithoutSalesNestedInputObjectSchema,  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  usersId: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  itemsId: Yup.mixed().oneOfSchemas([SaleUpdateitemsIdInputObjectSchema,
Yup.array().of(Yup.string())])
});
