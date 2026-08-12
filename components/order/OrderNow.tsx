import Input from "@/components/form/Input";
import NumberInput from "@/components/form/NumberInput";
import Radio from "@/components/form/Radio";
import Button from "@/components/global/Button";
import OrderSuccessful from "@/components/order/OrderSuccessful";
import { useModal } from "@/store/modal.store";
import * as FBpixel from "@/utils/facebook.pixel";
import { formatPrice } from "@/utils/format.util";
import { Form, Formik } from "formik";
import { Info, Truck } from "lucide-react";
import React, { useState } from "react";
import * as Yup from "yup";

interface Props {
  product: Product;
}
const OrderNow: React.FC<Props> = ({ product }) => {
  const [loading, setloading] = useState(false);
  const colorOptions = product.colors?.map((i) => ({
    label: i.name,
    value: i.name,
  })) || [
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
    color: colorOptions[0].value,
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
  const modal = useModal();
  const submit = async (values: typeof initialValues) => {
    try {
      setloading(true);
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          productName: product.name,
          productPrice: product.price,
          total: product.price * Number(values.quantity),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit order");
      }
      modal.open({
        title: "Order placed successfully",
        content: <OrderSuccessful />,
        size: "w-[95%] sm:w-md",
      });
      FBpixel.event("Purchase", {
        content_name: product.name,
        num_items: values.quantity,
        currency: "USD",
        value: 2 * Number(values.quantity),
      });
      setloading(false);
    } catch (error) {
      console.error(error);
      setloading(false);
    }
  };
  return (
    <div>
      <div className="bg-linear-to-r from-[#3d352e] to-black border border-gold/30 flex items-start rounded-xl mb-1 gap-2 text-gold px-2 py-1">
        <div className="flex items-center justify-center h-7 w-7 rounded-full bg-gold/20">
          <Truck className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="font-bold">Pay on Delivery</div>
          <div className="text-xs text-gold/80">
            Note: you are required to only pay on delivery within Lagos, while
            outside Lagos may require a small commitment fee.
          </div>
        </div>
      </div>

      <div className="flex gap-2 border border-gray-300 px-2 py-1 rounded-xl mb-4 text-gray-500">
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
                size="xs"
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
                disabled={!isValid || loading}
                isLoading={loading}
                loadingLabel="Processing order"
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
