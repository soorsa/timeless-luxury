import Input from "@/components/form/Input";
import NumberInput from "@/components/form/NumberInput";
import Button from "@/components/global/Button";
import OrderSuccessful from "@/components/order/OrderSuccessful";
import { useModal } from "@/store/modal.store";
import * as FBpixel from "@/utils/facebook.pixel";
import { formatPrice } from "@/utils/format.util";
import { FieldArray, Form, Formik } from "formik";
import { Info, Truck } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import * as Yup from "yup";

interface Props {
  product: Product;
}

const OrderNow: React.FC<Props> = ({ product }) => {
  const [loading, setloading] = useState(false);
  const colors = product.colors?.map((c) => ({
    color: c.name,
    quantity: 0,
  })) || [{ color: "Default", quantity: 1 }];
  const numberOfAvailableColors = colors?.length || 0;
  const initialValues = {
    fullname: "",
    address: "",
    town: "",
    state: "",
    phone_number: "",
    email: "",
    colors: colors,
    // colors && numberOfAvailableColors > 1
    //   ? [
    //       {
    //         color: colors[0].color,
    //         quantity: 1,
    //       },
    //     ]
    //   : [{ color: "Black", quantity: 1 }],
    quantity: 1,
  };

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Full name is required"),
    address: Yup.string().required("Address is required"),
    town: Yup.string().required("Town is required"),
    state: Yup.string().required("State is required"),
    phone_number: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const modal = useModal();

  const submit = async (values: typeof initialValues) => {
    try {
      setloading(true);

      const totalQuantity = values.colors?.reduce(
        (acc, curr) => acc + Number(curr.quantity || 0),
        0
      );

      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          quantity: totalQuantity > 0 ? totalQuantity : values.quantity,
          productName: product.name,
          productPrice: product.price,
          total:
            product.price *
            (totalQuantity > 0 ? totalQuantity : values.quantity),
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
        num_items: totalQuantity || values.quantity,
        currency: "USD",
        value: product.price * (totalQuantity || values.quantity),
      });
    } catch (error) {
      console.error(error);
    } finally {
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
        <Info className="text-gray-400 shrink-0 mt-0.5" />
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
        {({ isValid, values }) => {
          const totalQty = values.colors.reduce(
            (acc, curr) => acc + Number(curr.quantity || 0),
            0
          );
          const computedTotal = product.price * (totalQty > 0 ? totalQty : 1);

          return (
            <Form className="space-y-4">
              <div className="space-y-3">
                <Input
                  name="fullname"
                  label="Full Name"
                  className="rounded-sm"
                />
                <Input
                  name="email"
                  label="Email address"
                  className="rounded-sm"
                />
                <Input
                  name="phone_number"
                  label="Phone number"
                  className="rounded-sm"
                />

                <div>
                  <div className="text-sm font-semibold mb-1">
                    Delivery Address:
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="col-span-2">
                      <Input
                        name="address"
                        placeholder="Street Address"
                        className="rounded-sm"
                      />
                    </div>
                    <Input
                      className="rounded-sm"
                      name="town"
                      placeholder="E.g. Ikeja, Iyana Ipaja, etc."
                    />
                    <Input
                      name="state"
                      className="rounded-sm"
                      placeholder="E.g. Lagos, Ogun, Rivers, etc."
                    />
                  </div>
                </div>

                {product.colors && product.colors.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-sm font-semibold">
                      Select Color & Quantity:
                    </div>
                    <FieldArray name="colors">
                      {() => (
                        <div className="space-y-2">
                          {product.colors?.map((item, index) => (
                            <div
                              key={item.color || item.name}
                              className="flex items-center justify-between gap-2 border border-gray-200 p-2 rounded-xl"
                            >
                              <div className="flex items-start gap-2">
                                {item.image && (
                                  <div className="size-10 relative rounded-md overflow-hidden shrink-0">
                                    <Image
                                      src={item.image}
                                      fill
                                      alt={`${product.name}-${item.name}`}
                                    />
                                  </div>
                                )}
                                <div className="text-sm font-medium">
                                  {item.name}
                                </div>
                              </div>
                              <div className="w-32">
                                <NumberInput
                                  name={`colors[${index}].quantity`}
                                  min={0}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </FieldArray>
                  </div>
                )}
              </div>

              <div className="sticky bottom-0 bg-white pt-2">
                <Button
                  label="Order Now"
                  type="submit"
                  disabled={!isValid || loading || totalQty <= 0}
                  isLoading={loading}
                  loadingLabel="Processing order"
                  icon={<div>{formatPrice(computedTotal)}</div>}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default OrderNow;
