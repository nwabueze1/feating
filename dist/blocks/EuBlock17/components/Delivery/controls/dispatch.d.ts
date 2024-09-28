import { FormControlProps } from "../../../../../components";
import { TCreateAddressVariables, TUpdateGuestVariables } from "../hooks";
export declare const useDispatchConfig: () => (onSuccess?: () => void) => {
    initialValues: {
        addressline1: string;
        city: string;
        state: string;
        country: string;
        postcode: string;
        email: string;
        firstname: string;
        lastname: string;
        phone: string;
    };
    validationSchema: import("yup").ObjectSchema<{
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        addressline1: string;
        country: string;
        state: string;
        city: string;
        postcode: string;
    }, import("yup").AnyObject, {
        firstname: undefined;
        lastname: undefined;
        email: undefined;
        phone: undefined;
        addressline1: undefined;
        country: undefined;
        state: undefined;
        city: undefined;
        postcode: undefined;
    }, "">;
    onSubmit: (variables: TUpdateGuestVariables & TCreateAddressVariables) => Promise<void>;
};
export declare const useDispatchControls: () => (formik: any) => FormControlProps[];
