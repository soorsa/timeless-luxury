/* eslint-disable react/no-unescaped-entities */
import { Check } from "lucide-react";

const OrderSuccessful = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="h-30 w-30 rounded-full p-2 flex justify-center items-center bg-green-500 text-white">
        <Check className="w-full h-full" />
      </div>
      <div className="py-2 space-y-1">
        <div className="text-2xl font-bold">Order Placed Successfully</div>
        <div className="text-sm">
          Your order has been placed successfully, you'll receive a call from
          out agent to confirm your order shortly.{" "}
        </div>
        <div className="text-sm mt-4">
          Thank you for chosing <b className="uppercase">Timeless Luxury</b>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessful;
