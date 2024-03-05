"use client";

import { ShoppingCart } from "lucide-react";

import Currency  from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product
};

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  }

  return ( 
    <div>
      <h1 className="text-3xl font-bold text-white">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2 bg-blue-800">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
}
 
export default Info;
