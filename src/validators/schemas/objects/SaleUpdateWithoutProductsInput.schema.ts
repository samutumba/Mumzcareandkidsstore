// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { UserUpdateOneWithoutSalesNestedInputObjectSchema } from '../internals';;
import { TransactionUpdateManyWithoutSalesNestedInputObjectSchema } from '../internals';;
import { ItemUpdateManyWithoutSalesNestedInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { SaleUpdateitemsIdInputObjectSchema } from '../internals';

export const SaleUpdateWithoutProductsInputObjectSchema = Yup.object({
    reference: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  user: UserUpdateOneWithoutSalesNestedInputObjectSchema,  payments: TransactionUpdateManyWithoutSalesNestedInputObjectSchema,  items: ItemUpdateManyWithoutSalesNestedInputObjectSchema,  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  itemsId: Yup.mixed().oneOfSchemas([SaleUpdateitemsIdInputObjectSchema,
Yup.array().of(Yup.string())])
});
