import * as Yup from "yup";
export declare const pickupSchema: Yup.ObjectSchema<{
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
}, Yup.AnyObject, {
    firstname: undefined;
    lastname: undefined;
    email: undefined;
    phone: undefined;
}, "">;
export declare const dispatchSchema: Yup.ObjectSchema<{
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    addressline1: string;
    country: string;
    state: string;
    city: string;
    postcode: string;
}, Yup.AnyObject, {
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
