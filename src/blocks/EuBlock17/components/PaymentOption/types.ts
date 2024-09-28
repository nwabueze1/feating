export type PaymentOptionProps = {
  img?: string;
  title: string;
  value: string;
  name: string;
  // config: { [key: string]: string };
  handleChange: (paymentOption: string) => void;
};

export type TPaymentCustomStyles = {
  colors?: { [key: string]: { [key: string]: string } };
  fonts?: { [key: string]: string };
};
