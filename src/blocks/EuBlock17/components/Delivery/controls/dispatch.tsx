import { useSelector } from "react-redux";
import { EuState } from "../../../../../helpers";
import { dispatchSchema } from "./schema";
import { usePickupControls } from "./pickup";
import { usePickupConfig } from "./pickup";
import { FormControlProps } from "../../../../../components";
import { useDeliveryStyles } from "../styles";
import { handleInputChange, handleInputBlur } from "../../../../../components";
import { TCreateAddressVariables, TUpdateGuestVariables, useCreateAddress, useUpdateGuest } from "../hooks";

export const useDispatchConfig = () => {
  const { restaurant } = useSelector<EuState, EuState>((state) => state);
  const cart = restaurant?.cart;
  const getPickupConfig = usePickupConfig();
  const updateGuest = useUpdateGuest();
  const createAddress = useCreateAddress();

  return (onSuccess?: () => void) => {
    return {
      initialValues: {
        ...getPickupConfig().initialValues,
        addressline1: cart?.guest?.address?.addressline1 ?? "",
        city: cart?.guest?.address?.city ?? "",
        state: cart?.guest?.address?.state ?? "",
        country: cart?.guest?.address?.country ?? "",
        postcode: cart?.guest?.address?.postcode ?? "",
      },
      validationSchema: dispatchSchema,
      onSubmit: async (variables: TUpdateGuestVariables & TCreateAddressVariables) => {
        const { email, firstname, lastname, phone, ...rest } = variables;
        const guest = await updateGuest({ email, firstname, lastname, phone });

        guest && (await createAddress({ ...rest }, guest, onSuccess));
      },
    };
  };
};

export const useDispatchControls = () => {
  const getPickupControls = usePickupControls();
  const classes = useDeliveryStyles();

  return (formik: any): FormControlProps[] => {
    const pickupControls = getPickupControls(formik);

    return [
      ...pickupControls,
      {
        type: "grouped",
        properties: {
          name: <p className={classes.deliveryFormGroupHeading}>SHIPPING INFO</p>,
          controls: [
            {
              type: "text",
              properties: {
                name: "addressline1",
                type: "text",
                placeholder: "Address",
                label: "Address",
                value: formik.values?.addressline1,
                onChange: ({ value }: { name: string; value: string }) => handleInputChange(formik, "addressline1", value),
                onBlur: () => {
                  handleInputBlur(formik, "addressline1");
                },
                required: true,
                isError: formik?.touched?.addressline1 && Boolean(formik?.errors?.addressline1),
                helperText: formik?.touched?.addressline1 && formik?.errors?.addressline1 ? formik.errors.addressline1 : undefined,
              },
            },
            {
              type: "text",
              properties: {
                name: "city",
                type: "text",
                placeholder: "City",
                label: "City",
                value: formik.values?.city,
                onChange: ({ value }: { name: string; value: string }) => handleInputChange(formik, "city", value),
                onBlur: () => {
                  handleInputBlur(formik, "city");
                },
                required: true,
                isError: formik?.touched?.city && Boolean(formik?.errors?.city),
                helperText: formik?.touched?.city && formik?.errors?.city ? formik.errors.city : undefined,
              },
            },
            {
              type: "text",
              properties: {
                name: "state",
                type: "text",
                placeholder: "State",
                label: "State",
                value: formik.values?.state,
                onChange: ({ value }: { name: string; value: string }) => handleInputChange(formik, "state", value),
                onBlur: () => {
                  handleInputBlur(formik, "state");
                },
                required: true,
                isError: formik?.touched?.state && Boolean(formik?.errors?.state),
                helperText: formik?.touched?.state && formik?.errors?.state ? formik.errors.state : undefined,
              },
            },
            {
              type: "text",
              properties: {
                name: "country",
                type: "text",
                placeholder: "Country",
                label: "Country",
                value: formik.values?.country,
                onChange: ({ value }: { name: string; value: string }) => handleInputChange(formik, "country", value),
                onBlur: () => {
                  handleInputBlur(formik, "country");
                },
                required: true,
                isError: formik?.touched?.country && Boolean(formik?.errors?.country),
                helperText: formik?.touched?.country && formik?.errors?.country ? formik.errors.country : undefined,
              },
            },
            {
              type: "text",
              properties: {
                name: "postcode",
                type: "text",
                placeholder: "Post Code",
                label: "Post Code",
                value: formik.values?.postcode,
                onChange: ({ value }: { name: string; value: string }) => handleInputChange(formik, "postcode", value),
                onBlur: () => {
                  handleInputBlur(formik, "postcode");
                },
                required: true,
                isError: formik?.touched?.postcode && Boolean(formik?.errors?.postcode),
                helperText: formik?.touched?.postcode && formik?.errors?.postcode ? formik.errors.country : undefined,
              },
            },
          ],
        },
      },
    ];
  };
};
