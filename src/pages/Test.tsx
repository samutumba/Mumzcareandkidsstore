import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export const TestPage = () => {

  const handleFlutterPayment = useFlutterwave({
    public_key: process.env.FLW_PUBLIC_KEY || "",
    tx_ref: Date.now().toLocaleString(),
    amount: 5000,
    currency: 'UGX',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'samuel@gmail.com',
      phone_number: '0772654175',
      name: 'john doe',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  });

  return (<div className="w-full h-full min-h-screen justify-center flex flex-col gap-4 items center">
    <button title="button" onClick={() => {
      handleFlutterPayment({
        callback: (response) => {
          console.log(response);
          closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => { },
      });
    }}
    >
      Pay
    </button>

  </div>)
}