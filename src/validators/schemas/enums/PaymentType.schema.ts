import * as Yup from 'yup';

export const PaymentTypeSchema = Yup.mixed().oneOf(["flutterwave","cash","mobile_money","credit","debit"])