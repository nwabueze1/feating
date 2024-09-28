import { FormControlProps } from "../../../../../components";
import { TUpdateGuestVariables } from "../hooks";
export declare const usePickupConfig: () => (onSuccess?: () => void) => {
    initialValues: {
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
    }, import("yup").AnyObject, {
        firstname: undefined;
        lastname: undefined;
        email: undefined;
        phone: undefined;
    }, "">;
    onSubmit: (variables: TUpdateGuestVariables) => Promise<void>;
};
export declare const usePickupControls: () => (formik: any) => FormControlProps[];
