import Input from "@/components/form/Input";
import NumberInput from "@/components/form/NumberInput";
import Radio from "@/components/form/Radio";
import Button from "@/components/global/Button";
import { formatPrice } from "@/utils/format.util";
import { Form, Formik } from "formik";
import { Info } from "lucide-react";
import React from "react";
import * as Yup from "yup";
interface Props {
  product: Product;
}
const OrderNow: React.FC<Props> = ({ product }) => {
  const colorOptions = [
    { label: "Black", value: "Black" },
    { label: "Blue", value: "Blue" },
    { label: "Gold", value: "Gold" },
  ];
  const initialValues = {
    fullname: "",
    address: "",
    town: "",
    state: "",
    phone_number: "",
    email: "",
    color: "",
    quantity: 1,
  };
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("required"),
    address: Yup.string().required("required"),
    town: Yup.string().required("required"),
    state: Yup.string().required("required"),
    color: Yup.string().required("required"),
    quantity: Yup.number().required("required"),
  });
  const submit = () => {};
  return (
    <div>
      <div className="flex gap-2 border border-gray-300 p-1 rounded-xl mb-4 text-gray-500">
        <Info className="text-gray-400" />
        <div className="text-xs flex-1 font-medium">
          DO NOT PLACE AN ORDER IF YOU DO NOT HAVE THE COMPLETE MONEY OR YOU
          WONT BE AVAILABLE TO RECEIVE THE PRODUCT IN THE NEXT 24 HOURS.
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount
        onSubmit={submit}
      >
        {({ isValid, values }) => (
          <Form className="space-y-4">
            <div className="space-y-3">
              <Input name="fullname" label="Full Name" />
              <Input name="email" label="Email address" />
              <Input name="phone_number" label="Phone number" />
              <div className="">
                <div className="text-sm font-semibold">Delivery Address:</div>
                {/* <div className="grid grid-cols-4 gap-1">
                  </div> */}
                <div className="grid grid-cols-2 gap-1">
                  <div className="col-span-2">
                    <Input name="address" placeholder="Street Address" />
                  </div>
                  <Input
                    name="town"
                    //   label="Town"
                    placeholder="E.g. Ikeja, Iyana Ipaja, etc."
                  />
                  <Input
                    name="state"
                    //   label="Town"
                    placeholder="E.g. Lagos, Ogun, Rivers, etc."
                  />
                </div>
              </div>
              <Radio
                label="What color do you want?"
                name="color"
                options={colorOptions}
                orientation="horizontal"
                optionClassName="min-w-[calc(33%-8px)]"
              />
              <NumberInput name="quantity" label="How many to you want?" />
            </div>
            <div className="sticky bottom-0 bg-white">
              <Button
                label="Order Now"
                type="submit"
                disabled={!isValid}
                icon={
                  <div>
                    {formatPrice(product.price * Number(values.quantity))}
                  </div>
                }
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderNow;
