import CartItem from "./CartItem";
export default function CartModal() {
  return (
    <div className="absolute p-4 gap-2 top-12 right-2 w-64  flex flex-col rounded-md shadow-lg z-10">
      <h4 className="text-xl font-semibold">Shopping Cart</h4>
      <CartItem />
      <div className="flex flex-row justify-between items-center text-lg font-bold">
        <p>Subtotal</p>
        <p>$ 40.5</p>
      </div>
      <p className="text-gray-500 text-md -mt-2">
        Shipping and tax calculated at checkout
      </p>
      <div className="flex flex-row justify-between">
        <button className="p-2 px-4 shadow-md border-[1px] border-gray-100 rounded-md">
          View cart
        </button>
        <button className="p-2 px-4 shadow-md border-[1px] bg-black text-white border-black rounded-md">
          Check out
        </button>
      </div>
    </div>
  );
}
