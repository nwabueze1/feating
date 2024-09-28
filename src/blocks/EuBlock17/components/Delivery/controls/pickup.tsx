import { useSelector } from "react-redux";
import { EuState } from "../../../../../helpers";
import { FormControlProps } from "../../../../../components";
import { useDeliveryStyles } from "../styles";
import { pickupSchema } from "./schema";
import { handleInputChange, handleInputBlur } from "../../../../../components";
import { TUpdateGuestVariables, useUpdateGuest } from "../hooks";

export const usePickupConfig = () => {
  const { restaurant } = useSelector<EuState, EuState>((state) => state);
  const cart = restaurant?.cart;
  const updateGuest = useUpdateGuest();

  return (onSuccess?: () => void) => {
    return {
      initialValues: {
        email: cart?.guest?.email ?? "",
        firstname: cart?.guest?.firstname ?? "",
        lastname: cart?.guest?.lastname ?? "",
        phone: cart?.guest?.phone ?? "",
      },
      validationSchema: pickupSchema,
      onSubmit: async (variables: TUpdateGuestVariables) => {
        const { email, firstname, lastname, phone } = variables;
        await updateGuest({ email, firstname, lastname, phone }, onSuccess, true);
      },
    };
  };
};

export const usePickupControls = () => {
  const classes = useDeliveryStyles();

  return (formik: any): FormControlProps[] => [
    {
      type: "grouped",
      properties: {
        name: <p className={classes.deliveryFormHeading}>Please fill in your details correctly</p>,
        controls: [
          {
            type: "text",
            properties: {
              name: "email",
              type: "email",
              placeholder: "Email address",
              label: "Email",
              value: formik.values?.email,
              onChange: ({ value }: { name: string; value: string }) => handleInputChange(formik, "email", value),
              onBlur: () => {
                handleInputBlur(formik, "email");
              },
              required: true,
              isError: formik?.touched?.email && Boolean(formik?.errors?.email),
              helperText: formik?.touched?.email && formik?.errors?.email ? formik.errors.email : undefined,
            },
          },
          {
            type: "text",
            properties: {
              name: "firstname",
              type: "text",
              placeholder: "First name",
              label: "First name",
              value: formik.values?.firstname,
              onChange: ({ value }: { name: string; value: string }) => handleInputChange(formik, "firstname", value),
              onBlur: () => {
                handleInputBlur(formik, "firstname");
              },
              required: true,
              isError: formik?.touched?.firstname && Boolean(formik?.errors?.firstname),
              helperText: formik?.touched?.firstname && formik?.errors?.firstname ? formik.errors.firstname : undefined,
            },
          },
          {
            type: "text",
            properties: {
              name: "lastname",
              type: "text",
              placeholder: "Last name",
              label: "Last name",
              value: formik.values?.lastname,
              onChange: ({ value }: { name: string; value: string }) => handleInputChange(formik, "lastname", value),
              onBlur: () => {
                handleInputBlur(formik, "lastname");
              },
              required: true,
              isError: formik?.touched?.lastname && Boolean(formik?.errors?.lastname),
              helperText: formik?.touched?.lastname && formik?.errors?.lastname ? formik.errors.lastname : undefined,
            },
          },
          {
            type: "text",
            properties: {
              name: "phone",
              type: "tel",
              placeholder: "Phone",
              label: "Phone",
              value: formik.values?.phone,
              onChange: ({ value }: { name: string; value: string }) => handleInputChange(formik, "phone", value),
              onBlur: () => {
                handleInputBlur(formik, "phone");
              },
              required: true,
              isError: formik?.touched?.phone && Boolean(formik?.errors?.phone),
              helperText: formik?.touched?.phone && formik?.errors?.phone ? formik.errors.phone : undefined,
            },
          },
        ],
      },
    },
  ];
};
