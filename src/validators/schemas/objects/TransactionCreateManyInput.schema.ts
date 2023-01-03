// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const TransactionCreateManyInputObjectSchema = Yup.object({
    id: Yup.string(),  title: Yup.string(),  amount: Yup.number().required(),  payment_fee: Yup.mixed().oneOfSchemas([Yup.number()]),  transaction_id: Yup.mixed().oneOfSchemas([Yup.string()]),  txt_ref: Yup.mixed().oneOfSchemas([Yup.string()]),  isExpense: Yup.boolean(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  salesId: Yup.mixed().oneOfSchemas([Yup.string()])
});
