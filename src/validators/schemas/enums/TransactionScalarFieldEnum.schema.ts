import * as Yup from 'yup';

export const TransactionScalarFieldEnumSchema = Yup.mixed().oneOf(["id","title","mode","amount","payment_fee","transaction_id","txt_ref","isExpense","updatedAt","createdAt","salesId"])