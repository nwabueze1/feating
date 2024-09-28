export type TUpdateGuestVariables = {
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  is_active?: boolean;
};

export type TCreateAddressVariables = {
  addressline1: string;
  city: string;
  state: string;
  country: string;
  postcode: string;
};
