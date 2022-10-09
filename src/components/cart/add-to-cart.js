import { addToCart } from "../../utils/cart/index";

const AddToCart = ({ product }) => {
  return (
    <button
      className="btn px-4 py-2 bg-blue-100 rounded"
      onClick={() => {
        addToCart(product?.id ?? 0);
      }}
    >
      Add To Cart
    </button>
  );
};
export default AddToCart;
